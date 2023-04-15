import React from 'react'
import "./index.scss"
export default function PostCard({post}) {
  return (
    <div className='feed'>
        <p className='timeStamp'>{post.timeStamp} </p>
        <p className='status'> {post.status}</p>

    </div>
      
  )
}
