import React from "react";
import "./Popular.css"
//import data_product from '../Assets/Frontend_Assets/data'
import Item from "../Item/Item";
import { useState ,useEffect } from "react";
export default function Popular(){
    const [popularInWomen, setPopularInWomen]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/popularinwomen')
        .then((response)=>response.json())
        .then((data)=>setPopularInWomen(data));
    },[])
    return(
        <>
        <div className="popular">
            <h1>POPULAR FOR WOMEN</h1>
            <hr/>
            <div className="popular__item">
                {popularInWomen.map((item, i) =>{
                    return <Item key={i} 
                        id={item.id} 
                        name={item.name} 
                        new_price={item.new_price} 
                        old_price={item.old_price}
                        image={item.image}/>
                })}
            </div>
        </div>
        </>
    )
}