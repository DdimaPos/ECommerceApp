import React, { useContext } from "react";
import star_icon from "../Assets/Frontend_Assets/star_icon.png";
import star_dull_icon from "../Assets/Frontend_Assets/star_dull_icon.png";
import "./ProductDisplay.css"
import { ShopContext } from "../../Context/ShopContext";
export default function ProductDisplay({product}){
    //const {product}=props;
    const {addToCart}=useContext(ShopContext);
    return(
        <>
        <div className="display">
            <div className="display__left">
                <div className="display__left__img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="display__left__img">
                    <img className="display__left__img__main" src={product.image} alt="" />
                </div>
            </div>
            <div className="display__right">
                <h1>{product.name}</h1>
                <div className="display__right__star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>122</p>
                </div>
                <div className="display__right__prices">
                    <div className="display__right__prices__old">
                        ${product.old_price}
                    </div>
                    <div className="display__right__prices__new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="display__right__description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa adipisci
                    quibusdam temporibus ipsa beatae similique aliquid sunt 
                    amet ullam. Ut dolorem praesentium vero quia numquam natus 
                    illum eum unde atque!
                </div>
                <div className="display__right__size">
                    <h1>Select Size</h1>
                    <div className="display__right__size__choose">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="display__right__category">
                    <span>Category :</span> Women, T-shirt, Crop
                </p>
                <p className="display__right__category">
                    <span>Tags :</span> Modern, Latest
                </p>
            </div>
        </div>
        </>
    )
}