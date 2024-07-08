import React from "react"
import "./NewsLetter.css"
import { useState } from "react"
export default function NewsLetter(){
    const [email, setEmail] = useState('')
    const handleEmail = (e) =>{
        setEmail(e.value);
    }
    return(
        <>
        <div className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder="Your email" onChange={handleEmail} value={email}/>
                <button>Subscribe</button>
            </div>
        </div>
        </>
    )
}