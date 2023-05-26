import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";

export const AuthContext = createContext()


const auth = getAuth(app)


const AuthProviders = ({children}) => {

    const [user, setUser]= useState(null)
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const googleUserCreate = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const githubProvider = new GithubAuthProvider()
    const githubUserCreate = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return ()=>{
            return unsubscribe;
        }
    },[])

    const authInfo ={
        loader,
        auth,
        user,
        createUser,
        logIn,
        logOut,
        googleUserCreate,
        githubUserCreate
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;