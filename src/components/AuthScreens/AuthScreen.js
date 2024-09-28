import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const AuthScreen = () => {
    const { signInWithGoogle } = useAuth();

    return (
        <div>
            <h1>Welcome to Slack Clone</h1>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default AuthScreen;