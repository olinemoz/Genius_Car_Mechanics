import React from 'react';
import useAuth from "../../../hooks/useAuth";
import {Redirect, Route} from "react-router-dom";
import {Spinner} from "react-bootstrap";

const PrivateRoute = ({children, ...rest}) => {
    const {users,isLoading} = useAuth()
    if(isLoading){
        return <Spinner animation="border" variant="danger"/>
    }
    return (
        <Route
            {...rest}
            render={({location}) => users.displayName ? children : <Redirect to={{
                pathname: '/login',
                state: {from: location}
            }}/>}
        />
    );
};

export default PrivateRoute;