import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase';

const auth = getAuth(app)

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth);
    }
    
    useEffect(()=>{
       const unsubacribe =  onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        // stop unobvers unmounting
        return ()=>{
            return unsubacribe()
        }
    },[])
    const info = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;