import React, { useContext } from "react";
import {ShopContext} from "../Context/ShopContext"
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts"
export default function Product(){
    const {all_product}=useContext(ShopContext)
    const productId = useParams().productID;
    //find the desired product from entire array using .find
    const product = all_product.find((e)=> e.id === Number(productId));
    return(
        <>
        <div className="product">
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox product={product}/>
            <RelatedProducts/>
        </div>
        </>
    )
}