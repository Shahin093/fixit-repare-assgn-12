import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceRow.css'
const ServicesRow = ({ service }) => {
    const { img, _id, name, description } = service;
    return (
        <div className='col-lg-4'>
            <div className=' card text-center'>
                <div className="overflow">
                    <img className='card-img-top' src={img} alt="" />
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