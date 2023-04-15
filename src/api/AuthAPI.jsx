import {signInWithEmailAndPassword ,createUserWithEmailAndPassword
    ,GoogleAuthProvider,signInWithPopup, signOut
} from "firebase/auth"
import {auth} from "../firebaseConfig";


export const LoginAPI =(email ,password)=>{
    try {
      let response=  signInWithEmailAndPassword( auth,email,password)
        return response
    } catch (error) {
        return error;  
    }
}

export const RegisterAPI =async(email ,password)=>{
    try {
      let response=await createUserWithEmailAndPassword( auth,email,password)
      console.log(response)
        return response
    } catch (error) {
        return error;  
    }
}

export const GoogleSignInApi=()=>{
    try {
        let googleProvider =new GoogleAuthProvider()
        console.log(googleProvider)
        let res =signInWithPopup(auth, googleProvider)
        console.log(auth)
        console.log(res)
        return res
        
    } catch (error) {
         return error
    }
}

// export const onLogout =()=>{
//             try {
//                 signOut(auth)
//             } catch (error) {
//                 console.log(error)
//             }
// }