import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceRow.css'
const ServicesRow = ({ service }) => {

    const { image, _id, name, description, price } = service;
    return (
        // <div className='col-lg-4 mb-5'>
        //     <div className=' card text-center'>
        //         <div className="overflow">
        //             <img className='card-img-top' src={image} alt="" />
        //         </div>
        //         <div className="card-body">
        //             <h4 className='card-title'>{name}</h4>
        //             <p className='card-text text-secondary'>{description}</p>
        //             <Link to={`/servicePurchase/${_id}`} className='btn btn-outline-success'>Order Now</Link>
        //         </div>
        //     </div>
        // </div>
        <div className='col-lg-4 mb-5 mx-auto'>
            <div class="container">
                <div class="card">
                    <div class="imgBx">
                        <img src={image} alt='products-img' />
                    </div>
                    <div class="contentBx">
                        <h2>{name}</h2>

                        <div className='size'>
                            <h2>{description}</h2>

                        </div>
                        {/* <div class="color">
                            <h3>Color :</h3>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div> */}
                        <div className="color">
                            <div className="control">
                                <Link to={`/servicePurchase/${_id}`} className="btnnn button-87">
                                    <span class="price">${price}</span>
                                    <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                    <span class="buy"></span>
                                    Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default ServicesRow;