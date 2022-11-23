import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Config/Firebase.init';


export const AuthUser = createContext();
const auth = getAuth(app);
const provaider = new GoogleAuthProvider();
const UserContext = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true)
    //firebase functions :
    const loginWithGoogle = () => signInWithPopup(auth, provaider);
    const createuser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
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
        createuser,
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