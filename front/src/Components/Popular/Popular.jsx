import React from "react";
import "./Popular.css"
import data_product from '../Assets/Frontend_Assets/data'
import Item from "../Item/Item";
export default function Popular(){
    return(
        <>
        <div className="popular">
            <h1>POPULAR FOR WOMEN</h1>
            <hr/>
            <div className="popular__item">
                {data_product.map((item, i) =>{
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