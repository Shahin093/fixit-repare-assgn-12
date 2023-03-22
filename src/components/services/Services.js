import React, { useEffect, useState } from 'react';
import ServicesRow from './serviceDetails/ServicesRow';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};
// import ServicesRow from './ServicesRow';

const Services = () => {


    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);



    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://fixit-repare-server-assgn-12-production.up.railway.app/tools')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (

        <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <div className='row mb-20 mt-20'>
                <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">

                    <h2 className='text-3xl text-center mb-3'>Service</h2>

                </AnimationOnScroll>

                {/* <h2 className='text-3xl text-center mb-3'>Service</h2> */}
                {
                    services.map(service => <ServicesRow key={service._id} service={service}></ServicesRow>)
                }
            </div>
        </motion.div>


    );
};

export default Services;