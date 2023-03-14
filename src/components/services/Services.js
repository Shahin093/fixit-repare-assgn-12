import React, { useEffect, useState } from 'react';
import ServicesRow from './serviceDetails/ServicesRow';
import { AnimationOnScroll } from 'react-animation-on-scroll';
// import ServicesRow from './ServicesRow';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://fixit-fsa6.onrender.com/tools')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='row mb-20 mt-20'>
            <AnimationOnScroll animateIn="animate__shakeY" animateOut="animate__bounceOutRight">

                <h2 className='text-3xl text-center mb-3'>Service</h2>

            </AnimationOnScroll>

            {/* <h2 className='text-3xl text-center mb-3'>Service</h2> */}
            {
                services.map(service => <ServicesRow key={service._id} service={service}></ServicesRow>)
            }
        </div>
    );
};

export default Services;