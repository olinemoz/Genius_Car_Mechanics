import React, {useEffect, useState} from 'react';
import Service from "../Service/Service";
import './Services.css'
import {Row} from "react-bootstrap";
import axios from "axios";
import {useHistory} from "react-router-dom";
import AddService from "../../AddService/AddService";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        // fetch('http://localhost:5000/services')
        //     .then(response => response.json())
        //     .then(data => setServices(data))
        axios.get(`http://localhost:5000/services`)
            .then(response => setServices(response.data))
    }, [])

    const history = useHistory();
    // const handleService = () => {
    //     history.push(`/service/${services.id}`)
    // }
    const addService = () => {
        history.push(`/addService`)
    }


    return (
        <div className="my-5" id="services">
            <h2 className="text-primary">Our Services</h2>
            <button onClick={addService} className="btn mt-3 btn-lg btn-primary">Add Service</button>
            <Row>
                {
                    services.map((service, index) => {
                        return (
                            <Service
                                key={index}
                                service={service}
                                // handleService={handleService}
                            />
                        )
                    })
                }
            </Row>
        </div>
    );
};

export default Services;