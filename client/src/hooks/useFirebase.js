import {useEffect, useState} from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication()

const useFirebase = () => {
    const [users, setUsers] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUsers({})
        }).finally(() => setIsLoading(false))
    }

    return {
        users,
        signInUsingGoogle,
        logOut,
        isLoading
    }
};

export default useFirebase;