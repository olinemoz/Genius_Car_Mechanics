import React, {useEffect, useState} from 'react';
import axios from "axios";

const ManageServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/services`)
            .then(response => setServices(response.data))
    }, [])

    const handleDeleteService = id => {
        axios.delete(`http://localhost:5000/services/${id}`)
            .then(response => {
                if (response.data.deletedCount > 0) {
                    const restServices = services.filter(service => service._id !== id)
                    setServices(restServices)
                    alert('Service Has Been Deleted')
                }
            })
    }
    return (
        <div>
            <h3>Manage Services</h3>
            {
                services.map(service => (
                    <div key={service._id}>
                        <h4 className="text-capitalize">{service.firstName}</h4>
                        <button onClick={() => handleDeleteService(service._id)}
                                className="btn btn-sm btn-danger">Delete
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

export default ManageServices;