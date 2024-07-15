import React from "react";
import "./NewCollections.css"
//import new_collection from "../Assets/Frontend_Assets/new_collections"
import Item from "../Item/Item";
import { useState ,useEffect } from "react";

export default function NewCollections(){
    const [new_collection, setNew_collection]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/newcollection')
        .then((response)=>response.json())
        .then((data)=>setNew_collection(data));
    },[])
    return(
        <>
        <div className="newcol">
            <h1>NEW COLLECTIONS</h1>    
            <hr />
            <div className="newcol__collections">
                {new_collection.map((item, i) => {
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