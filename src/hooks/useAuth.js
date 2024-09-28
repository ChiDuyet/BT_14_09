import { auth } from '../utils/firebase';

export const useAuth = () => {
    const signInWithEmail = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    };

    return { signInWithEmail };
};