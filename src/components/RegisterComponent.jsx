import React, { useState } from 'react'
import { RegisterAPI ,GoogleSignInApi} from '../api/AuthAPI'
import "../Sass/LoginComponent.scss"
import "../Sass/hrText.scss"
import  LinkedinLogo  from '../assets/LinkedinLogo.png'
import GoogleButton from 'react-google-button';
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

function RegisterComponent() {
    let navigate =useNavigate();
    const [credentials,setCredentials] =useState({})
    const login =async()=>{
        try {
            console.log(credentials)
            let res= await RegisterAPI(credentials.email,credentials.password)
            console.log(res)
            toast.success("account created")
            navigate("/Home")
            
        } catch (error) {
            toast.error("cannot create your account")
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
        <h1>Make the most of your professional life </h1>
        <input type="text" placeholder="enter your email"
        onChange={(event)=>
            setCredentials({...credentials,email:event.target.value})
        }
        />
        <input type="text" onChange={(event=>
            setCredentials({...credentials,password:event.target.value}))} />
        <button onClick={login} className="login-btn"> Agree &  join</button>

        </div>
        <div className='loginBottom'>
            <hr className="hr-text" data-content="OR"></hr>
            <GoogleButton className='GoogleButton'
                    onClick={googleSignIn}
            />
            <p> Already on Linkedin? <span className='join-now' onClick={()=>navigate("/Login")}>Sign in</span></p>
        </div>

       
    </div>
  )
}

export default RegisterComponent