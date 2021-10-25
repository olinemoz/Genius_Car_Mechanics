import React from 'react';
import notFound from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" style={{height: "550px"}} src={notFound} alt=""/>
        </div>
    );
};

export default NotFound;