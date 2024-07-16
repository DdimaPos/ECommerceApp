import React from "react";
import "./Breadcrum.css"
import arrow_icon from "../Assets/Frontend_Assets/breadcrum_arrow.png"
export default function Breadcrum(props){
    const {product} = props;
   // console.log(product)
    return(
        <>
        <div className="breadcrum">
            HOME <img src={arrow_icon} alt="arrow icon" /> SHOP <img src={arrow_icon} alt="arrow icon" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
        </>
    )
}