import React from 'react'
import { Spin } from 'antd'
import "./common.scss"
export default function Loader() {
  return (
    
    <div className='loader'>
        <Spin/>
    </div>
  )
}
