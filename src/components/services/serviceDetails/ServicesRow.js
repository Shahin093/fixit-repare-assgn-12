import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceRow.css'
const ServicesRow = ({ service }) => {

    const { image, _id, name, description } = service;
    return (
        <div className='col-lg-4 mb-5'>
            <div className=' card text-center'>
                <div className="overflow">
                    <img className='card-img-top' src={image} alt="" />
                </div>
                <div className="card-body">
                    <h4 className='card-title'>{name}</h4>
                    <p className='card-text text-secondary'>{description}</p>
                    <Link to={`/servicePurchase/${_id}`} className='btn btn-outline-success'>Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesRow;