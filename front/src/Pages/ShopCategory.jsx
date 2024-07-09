import React, { useContext } from "react";
import './CSS/ShopCategory.css'
import {ShopContext} from "../Context/ShopContext";
import Item from "../Components/Item/Item"
import dropdown_icon from "../Components/Assets/Frontend_Assets/dropdown_icon.png"
export default function ShopCategory(props){
    const {all_product} = useContext(ShopContext);
    return(
        <>
        <div className="shopcategory">
            <img className="shopcategory__banner" src={props.banner} alt="banner" />
            <div className="shopcategory__indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory__indexSort__sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory__products">
                {all_product.map((item, i) => {
                    if(props.category===item.category){
                        return <Item key={i} 
                            id={item.id} 
                            name={item.name} 
                            new_price={item.new_price} 
                            old_price={item.old_price}
                            image={item.image}/>
                    }else{
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory__loadmore">
                Show more
            </div>
        </div>
        </>
    )
}