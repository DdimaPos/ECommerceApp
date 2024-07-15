import React, { useEffect, useState } from "react";
import './ListProducts.css'
import cross_ico from '../../assets/cross_icon.png'
export default function ListProducts(){
    const [allProducts, setAllProducts] = useState([]);

    const fetchInfo = async ()=>{
        await fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json())
        .then((data=>{setAllProducts(data)}));
    }
    useEffect(()=>{
        fetchInfo();
    },[]);

    const removeProduct = async (id) =>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify({id:id})
        })
        await fetchInfo();
    }

    return(
        <>
            <div className="listprod">
                <h1>All Products List</h1>
                <div className="listprod__format-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Old Price</p>
                    <p>New Price</p>
                    <p>Category</p>
                    <p>Remove</p>
                </div>
                <div className="listprod__allprod">
                    <hr />
                    {allProducts.map((item, i)=>{
                        return <> 
                            <div key={i} className="listprod__format listprod__format-main">
                                <img className="listprod__prodico" src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>${item.old_price}</p>
                                <p>${item.new_price}</p>
                                <p>{item.category}</p>
                                <img onClick={()=>{removeProduct(item.id)}} src={cross_ico} alt="" className="lustprod__rem-ico" />
                            </div>
                            <hr />
                        </>
                    })}
                </div>
            </div>
        </>
    )
}