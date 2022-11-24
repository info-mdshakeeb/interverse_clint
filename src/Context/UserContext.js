import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Config/Firebase.init';


export const AuthUser = createContext();
const auth = getAuth(app);
const provaider = new GoogleAuthProvider();
const UserContext = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState('');
    // console.log(user)
    //firebase functions :
    const loginWithGoogle = () => signInWithPopup(auth, provaider);
    const createUser = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
    const updateUser = userinfo => updateProfile(auth.currentUser, userinfo);
    const loginEP = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const logOut = () => signOut(auth)

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsuscribe()
    }, [])

    const authinfo = {
        user, setUser,
        loading, setLoading,
        loginWithGoogle,
        createUser,
        updateUser,
        loginEP,
        logOut
    }

    return (
        <AuthUser.Provider value={authinfo}>
            {children}
        </AuthUser.Provider>
    );
};

export default UserContext;