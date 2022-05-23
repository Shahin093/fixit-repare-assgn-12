import React from 'react';
import Banner from './HomePage/Banner';
import BusinessSumary from './HomePage/BusinessSumary';
import Facilities from './HomePage/Facilities';
import HomeService from './HomePage/HomeService';
import Services from './services/Services';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Services></Services>
            <HomeService></HomeService>
            <Facilities></Facilities>
            <BusinessSumary></BusinessSumary>
        </div>
    );
};

export default Home;