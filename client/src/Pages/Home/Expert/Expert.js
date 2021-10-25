import React from 'react';
import {Col} from "react-bootstrap";

const Expert = ({expert}) => {
    const {name, img, expertize} = expert
    return (
        <Col xs={12} sm={12} md={6} lg={4}>
            <img src={img} alt={name}/>
            <h3>{name}</h3>
            <h5 className="text-danger">{expertize}</h5></Col>
    );
};

export default Expert;