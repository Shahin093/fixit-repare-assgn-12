import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './HomePage.css';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};

const HomeService = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);


    return (
        <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <div style={{ background: '#570df9' }} className=" ">
                <div className=" hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1 lg:none hidden lg:block'>
                        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                            <img className="mt-[-80px]  child bounce" src="http://iamubaidah.com/html/solvit/assets/images/home-service-img.png" alt='' />
                        </AnimationOnScroll>


                    </div>
                    <div className="flex-1 px-5">
                        <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">
                            <h1 className="text-4xl text-white py-5 mb-5">Book An Appointment For Home Service</h1>
                        </AnimationOnScroll>

                        <p className="py-6 text-white child bounce">We Offer Affordable Repair Services Of All Computer, Mobile, And Other Electronics To Client At Your Home Or Office.We Offer Affordable Repair Services Of All Computer, Mobile, And Other Electronics To Client At Your Home Or Office</p>
                        <button className="button-87" role="button">Get Started</button>
                    </div>
                </div>
            </div>
        </motion.div>


    );
};

export default HomeService;