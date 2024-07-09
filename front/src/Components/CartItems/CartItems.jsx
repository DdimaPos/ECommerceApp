import React, { useContext } from "react";
import {ShopContext} from "../../Context/ShopContext"
import "./CartItems.css"
import rem_icon from "../Assets/Frontend_Assets/cart_cross_icon.png"

export default function CartItems(){
    const {all_product, cartItem, removeFromCart, getTotalCartAmount}=useContext(ShopContext);
    //console.log(cartItem)
    return(
        <>
        <div className="cartitems">
            <div className="cartitems__format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e)=>{
                if(cartItem[e.id]>0)
                {return(
                    <div key={e.id}>
                        <div className="cartitems__format cartitems__format-main">
                            <img className="cartitems__format__product-icon" src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartitems__format__quantity">{cartItem[e.id]}</button>
                            <p>${e.new_price*cartItem[e.id]}</p>
                            <img className="cartitems__format__rem-ico"src={rem_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
                    );} 
                else return null;
            })}
            <div className="cartitems__down">
                <div className="cartitems__total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems__total__item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems__total__item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems__total__item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cartitems__promocode">
                        <p>If you have a promocode, Enter it here</p>
                        <div className="cartitems__promocode__promobox">
                            <input type="text" placeholder="Promocode"/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        </>
    )
}