import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import Loader from '../components/common/Loader'
import HomeComponent from '../components/HomeComponent'
import {auth} from '../firebaseConfig'

export default function Home() {
    const [loading ,setLoading] =useState(true)

    let navigate =useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth,(res)=>{
            if(!res.accessToken){
                navigate("/")
            }
            else {
            setLoading(false)
            }
        
        })
    },[])
  return (  loading ?<Loader/> :<HomeComponent/>
  )
}
