import React from "react"
import "./Navbar.css"
import logo from "../Assets/Frontend_Assets/logo.png"
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png"
import { useState } from "react"
import { Link } from "react-router-dom"
export default function Navbar(){
    const [menu, setmenu]=useState("shop");

    return(
        <>
            <div className="navbar">
                <div className="navbar__logo">
                    <img src={logo} alt="shop logo" />
                    <p>Shopper</p>
                </div>
                <ul className="navbar__menu">
                    <li onClick={() => {setmenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                    <li onClick={() => {setmenu("men")}}><Link to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
                    <li onClick={() => {setmenu("women")}}><Link to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
                    <li onClick={() => {setmenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
                </ul>
                <div className="navbar__login_cart">
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                    <div className="navbar__login_cart__counter">0</div>
                </div>
            </div>
        </>
    )
}