import React from 'react';
import Banner from './HomePage/Banner';
import BusinessSumary from './HomePage/BusinessSumary';
import Facilities from './HomePage/Facilities';
import HomeService from './HomePage/HomeService';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <HomeService></HomeService>
            <Facilities></Facilities>
            <BusinessSumary></BusinessSumary>
        </div>
    );
};

export default Home;