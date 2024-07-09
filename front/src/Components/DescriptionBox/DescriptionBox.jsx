import React from "react";
import "./DescriptionBox.css"
export default function DescriptionBox({product}){
    return(
        <>
        <div className="descbox">
            <div className="descbox__nav">
                <div className="descbox__nav__box">
                    Description
                </div>
                <div className="descbox__nav__box fade">
                    Reviews (122)
                </div>
            </div>
            <div className="descbox__description">
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Recusandae totam sit animi 
                    consequuntur pariatur deleniti esse quos odit 
                    alias possimus qui ipsum, officia praesentium? 
                    Laboriosam consequuntur obcaecati eaque aut perferendis.
                </p>
                <p>
                    Another Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Recusandae totam sit animi 
                    consequuntur pariatur deleniti esse quos odit 
                    alias possimus qui ipsum, officia praesentium? 
                    Laboriosam consequuntur obcaecati eaque aut perferendis.
                </p>
            </div>
        </div>
        </>
    )
}