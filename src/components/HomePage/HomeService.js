import React from 'react';

const HomeService = () => {
    return (
        <div style={{ background: '#570df8', outline: null }} className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 hidden lg:block'>
                    <img className="mt-[-100px] max-w-sm rounded-lg shadow-2xl" src="http://iamubaidah.com/html/solvit/assets/images/home-service-img.png" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-white">Book An Appointment For Home Service</h1>
                    <p className="py-6 text-white">We Offer Affordable Repair Services Of All Computer, Mobile, And Other Electronics To Client At Your Home Or Office.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeService;