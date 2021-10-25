import React from 'react';
import {useForm} from "react-hook-form";
import './AddService.css'
import axios from "axios";

const AddService = () => {
    const {register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
     axios.post(`http://localhost:5000/services`,data)
         .then(response => {
             if(response.data.insertedId){
                 alert("added successfully")
                 reset()
             }
         })
    };

    return (
        <div className="add-service">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", {required: true, maxLength: 20})} placeholder="name"/>
                <textarea {...register("description")} placeholder="enter description"/>
                <input type="number" {...register("price")} placeholder="price"/>
                <input {...register("img")} placeholder="img url"/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default AddService;