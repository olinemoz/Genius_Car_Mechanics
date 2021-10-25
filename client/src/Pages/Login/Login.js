import React from 'react';
import useAuth from "../../hooks/useAuth";
import {useHistory, useLocation} from "react-router-dom";


const Login = () => {
    const {signInUsingGoogle} = useAuth()
    const location = useLocation()
    // console.log(location)
    // const {pathname} = location.state?.from
    // console.log(pathname)
    const redirectURL = location.state?.from || '/home'
    const history = useHistory()
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
            })
        history.push(redirectURL)
    }
    return (
        <div>
            <h2 className="text-center">Please Login</h2>
            <button className="btn btn-warning" onClick={handleGoogleLogin}>Google Sign In</button>
        </div>
    );
};

export default Login;