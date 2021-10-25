import React from 'react'
import './App.css';
import Home from "./Pages/Home/Home/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from "./Pages/NotFound/NotFound";
import Booking from "./Pages/Booking/Booking";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AddService from "./Pages/AddService/AddService";
import ManageServices from "./Pages/ManageServices/ManageServices";


function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <PrivateRoute exact path="/booking/:serviceId">
                            <Booking/>
                        </PrivateRoute>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/addService" component={AddService}/>
                        <Route exact path="/manageServices" component={ManageServices}/>
                        <Route exact component={NotFound}/>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
