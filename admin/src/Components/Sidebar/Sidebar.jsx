import React from "react";
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_pr_icon from '../../assets/Product_Cart.svg'
import list_prod from '../../assets/Product_list_icon.svg'
export default function Sidebar(){
    return(
        <>
            <div className="sidebar">
                <Link to={'/addproduct'}>
                    <div className="sidebar__item">
                        <img src={add_pr_icon} alt="" />
                        <p>Add product</p>
                    </div>
                </Link>
                <Link to={'/listproduct'}>
                    <div className="sidebar__item">
                        <img src={list_prod} alt="" />
                        <p>List products</p>
                    </div>
                </Link>
            </div>
        </>
    )
}