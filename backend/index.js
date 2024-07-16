// Define the port number for the server to listen on
const port = 4000;

// Import required packages
const express = require("express");
const app = express(); // Initialize an Express application
const mongoose = require("mongoose"); // MongoDB object modeling tool
const jwt = require("jsonwebtoken"); // Library for creating and verifying JSON Web Tokens
const multer = require("multer"); // Middleware for handling multipart/form-data, used for file uploads

const path = require("path"); // Node.js module for working with file and directory paths
const cors = require("cors"); // Middleware to enable Cross-Origin Resource Sharing (CORS)

require('dotenv').config()

// Middleware to parse JSON bodies in HTTP requests
app.use(express.json());

// Enable CORS so that the React project can access the backend
app.use(cors());

// Connect to the MongoDB database using Mongoose
mongoose.connect(`mongodb+srv://starplatinum:${process.env.db_password}@cluster0.kfenmzl.mongodb.net/e-commerce`);

// Create a simple GET API endpoint
// When the root URL ("/") is accessed, it responds with a message
app.get("/", (req, res) => {
    res.send("Express app is running");
});

// Set up the storage engine for Multer to handle file uploads
const storage = multer.diskStorage({
    // Define the destination folder for uploaded images
    destination: './upload/images',
    // Define the naming convention for uploaded files
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

// Initialize the Multer middleware with the defined storage settings
const upload = multer({ storage: storage });

// Serve static files from the 'images' directory
app.use('/images', express.static('upload/images'));

// Create an endpoint to handle image uploads
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        // Respond with the URL of the uploaded image
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

//Schema for creating product
const Product = mongoose.model("Product", {
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    new_price:{
        type: Number,
        required: true
    },
    old_price:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now,
    },
    available:{
        type:Boolean,
        default: true,       
    }
});
app.post('/addproduct', async (req, res)=>{
    let products = await Product.find({});
    
    let id;
    //create the new id
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }else{
        id=1; 
    }
    
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })
    console.log(product);
    //save the product
    await product.save();
    console.log("Saved");
    //send a response to user
    res.json({
        success:1,
        name: req.body.name
    })
})

//Creating API for deleting products
app.post('/removeproduct', async (req, res)=>{
    await Product.findOneAndDelete({id: req.body.id});
    console.log("removed");
    res.json({
        success: true,
        name: req.body.name
    })
})

//Creating api for getting the products
app.get('/allproducts', async (req, res)=>{
    let product_list = await Product.find({});//get all products
    console.log('All products fetched');
    res.send(product_list);
})

//Schema creating for user model
const User = mongoose.model('User',{
    name:{
        type: String,
    },
    email:{
        type:String,
        unique: true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating enndpoint for registering the user
app.post('/signup', async (req, res)=>{
    //Check if there is an already existing account
    let check = await User.findOne({email:req.body.email})
    if(check){
        return res.status(400).json({success:false, error:"existing user found with same email"})
    }
    let cart = {}
    //I think it is a bad habit, should be replaced if size of store is huge 
    for(let i=0; i < 300; i++){
        cart[i]=0;
    }
    //Define the new user
    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData:cart,
    })
    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data, 'secret_ecom');
    res.json({success:true, token})
})
//Creating endpoint for user login
app.post('/login' , async (req, res)=>{
    let user = await User.findOne({email:req.body.email});
    if(user){
        if(req.body.password===user.password){
            const data = {
                user:{
                    id:user.id
                } 
            }
            const token = jwt.sign(data, 'secret_ecom')
            res.json({success:true, token})
        }else{
            res.json({success:false, error:"Wrong Password"})
        }
    }else{
        res.json({success:false, error:"Email not found"})
    }
})
//Creating endpoint for newcollection data
app.get('/newcollection',async (req, res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("New collection fetched");
    res.send(newcollection);
})
//Creating endpoint for 'popular for women 
app.get('/popularinwomen', async (req, res)=>{
    let products = await Product.find({category:"Women"});
    let popularinwomen = products.slice(0,4);
    console.log("Popular in women fetched");
    res.send(popularinwomen);
})

//Creating middleware to fetch user
const fetchUser = async (req, res, next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Autentificate using a valid token"})
    }else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        }catch(error){
            res.status(401).send({error:"Autentificate using a valid token"})
        }
    }
}
//Creating endppoint for cart data
app.post('/addtocart', fetchUser,async (req, res)=>{
    //console.log(req.body, req.user);
    let userData = await User.findOne({_id:req.user.id});
    
    userData.cartData[req.body.itemId]++;
    await User.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData})
    res.send({success:true, message:'added'})
})
//Creating endpoint to remove the cart item
app.post('/removefromcart', fetchUser, async (req, res)=>{
    //console.log(req.body, req.user);
    let userData = await User.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId] > 0)
        userData.cartData[req.body.itemId]--;
    await User.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData})
    res.send({success:true, message:'removed'})
})
//create endpoint to get cart data
app.post('/getcart', fetchUser, async (req, res)=>{
    let userData = await User.findOne({_id:req.user.id});
    res.json(userData.cartData)
    console.log("Cart data sent")
})
// Start the server and listen on the defined port
app.listen(port, (err) => {
    if (!err) {
        console.log("Server Running on Port:", port);
    } else {
        console.log("Error:", err);
    }
});
