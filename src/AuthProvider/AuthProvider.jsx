import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true)

    // console.log(user)

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

 const SignIn = (email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
 }


 const updateUser =(updateData)=>{
    return updateProfile(auth.currentUser,updateData)

 }
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])
    const authData = {
        user, 
        setUser, 
        creatUser, 
        logOut,
        SignIn,
        loading,
        setLoading,
        updateUser

    };



    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;