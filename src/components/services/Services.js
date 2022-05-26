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
        <div className='row'>
            {
                services.map(service => <ServicesRow key={service._id} service={service}></ServicesRow>)
            }
        </div>
    );
};

export default Services;