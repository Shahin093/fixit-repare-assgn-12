import React from 'react';
import Banner from './HomePage/Banner';
import Facilities from './HomePage/Facilities';
import HomeService from './HomePage/HomeService';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <HomeService></HomeService>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;