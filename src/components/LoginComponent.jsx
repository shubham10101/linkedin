import React, { useState } from 'react'
import { LoginAPI ,GoogleSignInApi} from '../api/AuthAPI'
import "../Sass/LoginComponent.scss"
import "../Sass/hrText.scss"
import  LinkedinLogo  from '../assets/LinkedinLogo.png'
import GoogleButton from 'react-google-button';
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

function LoginComponent() {
    let navigate =useNavigate();
    const [credentials,setCredentials] =useState({})
    const login =async()=>{
        try {
            console.log(credentials)
            const res= await LoginAPI(credentials.email,credentials.password)
            toast.success("login to linkedin")
            navigate("/Home")
            
        } catch (error) {
            toast.error("login failure")
        }
      
        
    }

    const googleSignIn =async()=>{
        try {
            let res = await GoogleSignInApi()
            console.log(res)
            toast.success(`hi ${res.user.displayName}`)
            navigate("/Home")
            
        } catch (error) {
            toast.error("something wrong")
        }
    
    }
  return (

    <div  className='loginWrapper'>
        <div>
            <img src={LinkedinLogo} className="linkedinLogo" alt='linedinLogo'/>
        </div>
        <div className='loginBox'>
        <h1>Sign in </h1>
        <input type="text" placeholder="enter your email"
        onChange={(event)=>
            setCredentials({...credentials,email:event.target.value})
        }
        />
        <input type="text" onChange={(event=>
            setCredentials({...credentials,password:event.target.value}))} />
        <button onClick={login} className="login-btn"> log in</button>

        </div>
        <div className='loginBottom'>
            <hr className="hr-text" data-content="OR"></hr>
            <GoogleButton className='GoogleButton'
                    onClick={googleSignIn}
            />
            <p> New to Linkedin? <span className='join-now' onClick={()=>navigate("/register")}>Join now</span></p>
        </div>

       
    </div>
  )
}

export default LoginComponent