import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import auth from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import { signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Context = ({children}) => {

    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(true)

    
    let createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    let singInUser = (email, password) => {
       setLoading(true) 
       return signInWithEmailAndPassword(auth, email, password)
    }
     
    let googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    let githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    
    let userSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (users) => {
     setLoading(false)   
     setUser(users)
     console.log("onAuthStateChanged",users)

    })
    return () => {
        unsubscribe()
    }
    },[])

    let authInfo =
     {
      user, 
      createUser,
      singInUser,
      googleSignIn, 
      githubSignIn, 
      userSignOut,
      loading,
      setLoading
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

Context.propTypes ={
    children:PropTypes.node.isRequired
}
export default Context;