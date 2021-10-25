import React from 'react';
import './Service.css'
import {Col} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Service = ({service}) => {
    const {_id, firstName, price, description, img} = service
    const history = useHistory()
    const handleBooking = () => {
        history.push(`/booking/${_id}`)
    }

    return (
        <Col xs={12} sm={12} md={6} lg={4} className="mt-4">
            <div className="shadow-lg rounded mx-3 p-2">
                <img src={img} alt=""/>
                <h3>{firstName}</h3>
                <h5>Price: {price}</h5>
                <p>{description}</p>
                <button className="btn btn-warning" onClick={handleBooking}>Book {firstName.toLowerCase()}</button>
            </div>
        </Col>
    );
};

export default Service;