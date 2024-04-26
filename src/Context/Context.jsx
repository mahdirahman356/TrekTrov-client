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

    
    let createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    let singInUser = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }
     
    let googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    let githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }
    
    let userSignOut = () => {
        return signOut(auth)
    }

    useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (users) => {
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
      userSignOut
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