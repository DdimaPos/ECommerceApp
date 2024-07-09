import React from "react";
import { Link } from "react-router-dom"
import "./Item.css"
export default function Item(props){
    return(
        <>
        <div className="item">
            <Link to={`/product/${props.id}`} >
                <img onClick={window.scrollTo(0,0)} src={props.image} alt="imagenot found" />
            </Link>
            <p>{props.name}</p>
            <div className="item__prices">
                <div className="item__prices__new">
                    ${props.new_price}
                </div>
                <div className="item__prices__old">
                    ${props.old_price}
                </div>
            </div>
        </div>
        </>
    )
}