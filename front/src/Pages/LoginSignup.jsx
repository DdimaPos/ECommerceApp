import React from "react";
import "./CSS/LoginSignup.css"
import { useState } from "react";
export default function LoginSignup(){
    const [state, setState]=useState("Login");
    const [formData, setFormData]= useState({
        username:'',
        password:'',
        email:''
    })

    const changeHandler = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const login = async () =>{
        //console.log("Login", formData);
        let responseData;
        await fetch("http://localhost:4000/login",{
            method: 'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData),
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            responseData=data;
        })
        if(responseData.success){
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }else{
            alert(responseData.error)
        }
    }
    const signup = async () =>{
        //console.log("Sign up", formData);
        let responseData;
        await fetch("http://localhost:4000/signup",{
            method: 'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData),
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            responseData=data;
        })
        if(responseData.success){
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }else{
            alert(responseData.error)
        }
    }
    return(
        <>
        <div className="loginsign">
            <div className="loginsign__container">
                <h1>{state}</h1>
                <div className="loginsign__container__fields">
                    {state==="Sign Up"?<input value={formData.username} onChange={changeHandler} type="text" name="username" placeholder="Your name"/>:<></>}
                    <input value={formData.email} onChange={changeHandler} type="email" placeholder="Email" name="email"/>
                    <input value={formData.password} onChange={changeHandler} type="password" placeholder="Password" name="password"/>
                    <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                    
                    {state==="Sign Up"?<p className="loginsign__container__login">
                        Already have an account? <span onClick={()=>setState("Login")}>Login here</span>
                    </p>:
                    <p className="loginsign__container__login">
                        Create new account? <span onClick={()=>setState("Sign Up")}>Create here</span>
                    </p>}

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