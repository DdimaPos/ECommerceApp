import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/Frontend_Assets/banner_mens.png'
import women_banner from './Components/Assets/Frontend_Assets/banner_women.png'
import kids_banner from './Components/Assets/Frontend_Assets/banner_kids.png'
//to continue to make the app responsive -> 3.17.00
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory banner={men_banner} category="Men"/>}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="Women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="Kids"/>}/>
          
          <Route path='/product' element={<Product />}> lcoalhost:3000/product/pro
            <Route path=':productID' element={<Product/>}/>
          </Route>

          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        
        </Routes>
        <Footer/>

      </BrowserRouter>
    </>
  )
}

export default App
