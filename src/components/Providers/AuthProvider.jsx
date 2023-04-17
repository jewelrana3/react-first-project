import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase';

const auth = getAuth(app)

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    const createUser = (email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = (auth)=>{
        return signOut;
    }
    
    useEffect(()=>{
       const unsubacribe =  onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
        });
        // stop unobvers unmounting
        return ()=>{
            return unsubacribe()
        }
    },[])
    const info = {
        user,
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