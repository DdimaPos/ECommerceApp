import React, {createContext} from "react";
import { useEffect } from "react";
//import all_product from "../Components/Assets/Frontend_Assets/all_product"
import { useState } from "react";
export const ShopContext = createContext(null); 

const getDefaultCart = () =>{
    let cart = {};
    //initialize an empty cart
    for(let i = 0; i < 300+1; i++){
        cart[i]=0
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    //define a state for car(empty by default)
    const [all_product, setAll_product]=useState([]);
    const [cartItem, setCartItem]=useState(getDefaultCart());
    //include in context all necessary data
    
    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_product(data))
    },[])
    
    const addToCart=(itemId)=>{
        //prev is previous state
        //[itemId]:prev[itemId]+1 it increases the counter for certain item
        setCartItem((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        //console.log(cartItem)
    }
    
    const removeFromCart=(itemId)=>{
        //prev is previous state
        //[itemId]:prev[itemId]+1 it increases the counter for certain item
        setCartItem((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () =>{
        let totalAmount=0;
        for(const item in cartItem){
            if(cartItem[item]>0){//if number of this item in cart is > 0
                //get the number of products put in cart
                let itemInfo=all_product.find((product)=>product.id===Number(item))
                //add them to total sum
                totalAmount+=itemInfo.new_price*cartItem[item];
            }
            
        }
        return totalAmount;
    }
    const getTotalCartItems = () =>{
        let counter = 0
        for(const item in cartItem){
            if(cartItem[item]>0){
                counter+=cartItem[item];
            }
            
        }
        return counter;
    }
    const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItem, addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;