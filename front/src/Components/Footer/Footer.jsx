import React from "react";
import "./Footer.css"
import footer_logo from "../Assets/Frontend_Assets/logo_big.png"
import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png'
import pintester_icon from '../Assets/Frontend_Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png'
export default function Footer(){
    return(
        <>
        <div className="footer">
            <div className="footer__logo">
                <img src={footer_logo} alt="footer_logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer__links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul> 
            <div className="footer__social">
                <div className="footer__social__container">
                    <img src={instagram_icon} alt="instagram_icon" /></div>
                <div className="footer__social__container">
                    <img src={pintester_icon} alt="pintester_icon" /></div>
                <div className="footer__social__container">
                    <img src={whatsapp_icon} alt="whatsapp_icon" /></div>
            </div>    
            <div className="footer__copyright">
                <hr />
                <p>Copyright @ 2024 - All rights reserved</p>
            </div>
        </div>
        </>
    )
}