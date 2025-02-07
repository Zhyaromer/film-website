import { auth, onAuthStateChanged } from '../Firebase/frontendfb.js';
import { useState, useEffect } from 'react';

const Onauth = () => {
    const [user, setuser] = useState([])
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                setuser(firebaseUser);
            } else {
                setuser(null);
            }
        });

        return () => unsubscribe();
    }, []);
    
    return user;
}

export default Onauth
