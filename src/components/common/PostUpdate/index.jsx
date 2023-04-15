import React, { useMemo, useState } from 'react'
import ModalComponent from '../modal'
import  "./index.scss"
import  {postStatus ,getStatus} from "../../../api/fireStoreApi"
import PostCard from '../PostCard';
import  getCurrentTimeStamp from "../../../helpers/useMoment"
export default function PostStatus() {
  const [modal1Open, setModal1Open] = useState(false);
  const [text,setText] =useState("")
  const [allStatus,setAllstatus] =useState([])


  const sendStatus =(status)=>{
    let object={
      status:status,
      timeStamp:getCurrentTimeStamp("LLL")
    }
    console.log("send status")
    postStatus(object)
    setModal1Open(false)
    setText("")

  }

  useMemo(()=>{
    console.log("memo im running")
    getStatus(setAllstatus)
  },[])

  console.log(allStatus)
  return (
    <div className='post-status-main'>
      <div className='post-status'>
          <button className='open-post-modal' 
          onClick={() => setModal1Open(true)}
          > start a post</button>
          
     </div>

     <ModalComponent modalOpen={modal1Open} setModalOpen={setModal1Open} sendStatus={sendStatus} text ={text} setText={setText}/>
   
     {allStatus.map((posts)=>(
        // <div className=''>
        //   <p>{posts.status}</p>

        // </div>
          <PostCard post={posts} key={posts.id} />
      ) )}
    
     
    

    </div>
  )
}
