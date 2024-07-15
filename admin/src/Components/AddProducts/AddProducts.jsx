import React, { useState } from "react";
import './AddProducts.css'
import upload_img from '../../assets/upload_area.svg'
export default function AddProducts(){
    const [image, setImage]=useState(false);
    const [productInfo, setProductInfo] = useState({
        name:"",
        image:"",
        category:"Women",
        new_price:"",
        old_price:""
    })
    
    const imageHandler = (e) =>{
        setImage(e.target.files[0])
    }
    const changeHandler = (e) =>{
        setProductInfo({...productInfo, [e.target.name]:e.target.value})
    }
    const Add_product = async ()=>{
        console.log(productInfo);
        let responseData;
        let product = productInfo;

        let formData = new FormData();
        formData.append('product', image);
        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept: 'application/json',
            },
            body:formData,
        }).then((resp)=>{
            return resp.json();
        }).then((data)=>{
            responseData=data;
        })
        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product)
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept: 'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert('Product added'):alert('Product not added')
            })
        }
    }
    
    return(
        <>
            <div className="addprod">
                <div className="addprod__itemfield">
                    <p>Add product</p>
                    <input value={productInfo.name} onChange={changeHandler} type="text" name="name" placeholder="Type here"/>
                </div>
                <div className="addprod__price">
                    <div className="addprod__itemfield">
                        <p>Price</p>
                        <input value={productInfo.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here"/>
                    </div>
                    <div className="addprod__itemfield">
                        <p>Offer price</p>
                        <input value={productInfo.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here"/>
                    </div>
                </div>
                <div className="addprod__itemfield">
                    <p>Product Category</p>
                    <select value={productInfo.category} onChange={changeHandler} className="addprod__selector" name="category" id="">
                        <option value="Women">Women</option>
                        <option value="Men">Men</option>
                        <option value="Kids">Kids</option>
                    </select>    
                </div>
                <div className="addprod__itemfield">
                      <label htmlFor="file-input">
                        <img className="addprod__thumbnail-img" src={image?URL.createObjectURL(image):upload_img} alt="" />
                      </label>
                      <input  onChange={imageHandler} type="file" name="image" id="file-input" hidden/>
                </div>
                <button onClick={()=>{Add_product()}} className="addprod__button">ADD</button>
            </div>
            
        </>
    )
}