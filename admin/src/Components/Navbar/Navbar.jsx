import React from "react"
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navprofile from '../../assets/nav-profile.svg'
export default function Navbar(){
    return(
        <>
            <div className="navbar">
                <img className="navbar__logo" src={navlogo} alt="" />
                <img className="navbar__profile" src={navprofile} alt="" />
            </div>
        </>
    )
}