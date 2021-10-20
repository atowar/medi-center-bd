import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import initAuth from "../Firebase/firebase.init";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn= () => {
       return signInWithPopup (auth, googleProvider)
        
    }

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            setUser ({})
          }).catch((error) => {
            // An error happened.
          });
    }
    
//observe user state
   useEffect(() => {
     onAuthStateChanged (auth, (user) => {
        if (user){
            setUser(user)
        }

     });

   },[])

   return {
       user, 
       setUser,
       googleSignIn,
       logOut
   }
    
}

export default useFirebase;