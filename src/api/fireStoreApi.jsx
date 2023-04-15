import { addDoc,collection, onSnapshot } from "firebase/firestore"
import { firestore }  from  "../firebaseConfig"
import {toast} from "react-toastify"

let dbref =collection(firestore, "posts" )

export const postStatus =(object)=>{
    addDoc(dbref,object)
        .then((res)=>{ toast.success("document has been added successfully")})
        .catch((err)=>{
            console.log(err)
        })
}

export const getStatus =(setAllstatus)=>{
    onSnapshot(dbref ,(res)=>{
           setAllstatus(res.docs.map((docs)=>{
              return  {...docs.data(),id:docs.id}
           }))
    })
}