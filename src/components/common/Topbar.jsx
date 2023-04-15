import React from 'react'
import "./topbar.scss"
import  LinkedinLogo from "../../assets/LinkedinLogo.png"
import  user from "../../assets/user.jpg"

import {AiOutlineHome,AiOutlineUser,AiOutlineSearch,AiOutlineMessage,AiOutlineBell} from "react-icons/ai";
import {BsBriefcase} from "react-icons/bs";
import  {useNavigate} from "react-router-dom"
export default function Topbar() {
  let  navigate = useNavigate()
  const navigateTo=(route)=>{
        navigate(route)
  }
  return (
    <div className='topbar-main'>
        <img src={LinkedinLogo} alt="linkedlogo"  className='linkedin-logo'/>
        <div className='react-icons'>
            <AiOutlineSearch size={ 30}  className="react-icon" />
            <AiOutlineHome size={ 30}  className="react-icon"  onClick={()=>navigateTo("/home")}/>
            <AiOutlineUser size={ 30}  className="react-icon"   onClick={()=>navigateTo("/user")}/>
            <AiOutlineMessage size={ 30}  className="react-icon"/>
            <AiOutlineBell size={ 30}  className="react-icon"/>
            <BsBriefcase size={ 30}  className="react-icon"/>
        </div>
        <img src={user} alt="user"  className='user'/>
    </div>
  )
}
