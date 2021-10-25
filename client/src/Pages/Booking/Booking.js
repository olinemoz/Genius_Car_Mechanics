import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Booking = () => {
    const [service,setService] = useState({})
    const {firstName,description,img,price} = service

   const {serviceId} = useParams()
    // console.log(serviceId)
    useEffect(() => {
        axios.get(`http://localhost:5000/services/${serviceId}`)
            .then(response => setService(response.data))
    },[serviceId])
    return (
        <div>
            <h2>Welcome! this is booking</h2>
             <div className="rounded w-50 py-4 px-2 mx-auto shadow-lg">
                 <div>
                     <img src={img} className="img-fluid" alt=""/>
                 </div>
                 <div>
                     <h3>{firstName}</h3>
                     <p><b>Cost: {price}</b></p>
                     <p><small>{description}</small></p>
                 </div>
             </div>
        </div>
    );
};

export default Booking;