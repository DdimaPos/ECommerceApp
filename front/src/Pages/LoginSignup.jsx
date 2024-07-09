import React from "react";
import "./CSS/LoginSignup.css"
export default function LoginSignup(){
    return(
        <>
        <div className="loginsign">
            <div className="loginsign__container">
                <h1>Sign Up</h1>
                <div className="loginsign__container__fields">
                    <input type="text" placeholder="Your name"/>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password"/>
                    <button>Continue</button>
                    <p className="loginsign__container__login">
                        Already have an account? <span>Login here</span>
                    </p>
                    <div className="loginsign__container__agree">
                        <input type="checkbox" />
                        <p>By continuing, I agree to give my soul to Shang Tsung</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}