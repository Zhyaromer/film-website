import { auth, onAuthStateChanged } from '../Firebase/frontendfb.js';
import { useEffect } from 'react';

const ProtectedPages = () => {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (!firebaseUser) {
               window.location.href = '/'
            } 
        });
        return () => unsubscribe();
    }, []);
}

export default ProtectedPages
