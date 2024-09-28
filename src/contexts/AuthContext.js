import React, { createContext, useContext, useState } from 'react';
import { auth } from '../utils/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        setCurrentUser(result.user);
    };

    return (
        <AuthContext.Provider value={{ currentUser, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);