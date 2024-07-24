# E-Commerce-App
This is a fulltack application that is composed of 4 main instances:
## Frontend (for user)
Frontent is written using React js. It uses multiple React hooks and features like 
 - Routing
 - **useContext** to pass information about products across multiple pages without props drilling
 - **useState** and **useEffect** to process, read, save and display the information to user

## Frontend (for admin)
It is also written in React and is used by the admin of page to add and remove the products

## Backend 
Backend is written in Node js using express application framework. Using this framework I created multiple endpoints to cover all serverside functionalities which will be listed further
Also there were used other packages to properly handle the connection with database and user registration on website:
1. **Mongoose** - package to establish connection with MongoDb and use its functions to create collections of data
2. **JSONWebToken** - package used to securely encrypt and decrypt user's login data like username and password
3. **Multer** - Middleware for handling multipart/form-data, used for file uploads

## Database
As database I used MongoDb. It is different from SQL databases in it's basic concept. Database is called a cluster. One cluster consists of multiple collections that are not connected as relational databases. In collection all data is stored in json format. 
