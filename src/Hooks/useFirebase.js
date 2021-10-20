import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import initAuth from "../Firebase/firebase.init";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn= () => {
        signInWithPopup (auth, googleProvider)
        .then (result => {
            console.log(result.user);
        })
    }

    const signOut = () =>{
        signOut (auth)
        .then (()=>{
            setUser ({})
        })
    }
//observe user state
   useEffect(() => {
     onAuthStateChanged (auth, (user => {
        if (user){
            setUser(user)
        }

     }))

   },[])

   return {
       user, 
       setUser,
       googleSignIn,
       signOut
   }
    
}

export default useFirebase;