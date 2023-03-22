import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './HomePage.css';
const HomeService = () => {
    return (
        <div style={{ background: '#570df9' }} className=" ">
            <div className=" hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 lg:none hidden lg:block'>
                    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                        <img className="mt-[-80px] " src="http://iamubaidah.com/html/solvit/assets/images/home-service-img.png" alt='' />
                    </AnimationOnScroll>


                </div>
                <div className="flex-1 px-5">
                    <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                        <h1 className="text-4xl text-white py-5 mb-5">Book An Appointment For Home Service</h1>
                    </AnimationOnScroll>

                    <p className="py-6 text-white">We Offer Affordable Repair Services Of All Computer, Mobile, And Other Electronics To Client At Your Home Or Office.We Offer Affordable Repair Services Of All Computer, Mobile, And Other Electronics To Client At Your Home Or Office</p>
                    <button className="button-87" role="button">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeService;