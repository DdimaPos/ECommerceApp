import React from "react";
import "./RelatedProducts.css"
import data_product from "../Assets/Frontend_Assets/data"
import Item from "./../Item/Item"
export default function RelatedProducts({product}){
    return(
        <>
        <div className="relprod">
            <h1>Related Products</h1>
            <hr />
            <div className="relprod__items">
                {data_product.map((item, i) => {
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