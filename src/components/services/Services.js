import React, { useEffect, useState } from 'react';
import ServicesRow from './serviceDetails/ServicesRow';
// import ServicesRow from './ServicesRow';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://whispering-everglades-47983.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='row mb-20 mt-20'>
            <h2 className='text-3xl text-center mb-3'>Service</h2>
            {
                services.map(service => <ServicesRow key={service._id} service={service}></ServicesRow>)
            }
        </div>
    );
};

export default Services;