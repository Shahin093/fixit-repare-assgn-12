import React from 'react';
import Banner from './HomePage/Banner';
import HomeService from './HomePage/HomeService';

const Home = () => {
    return (
        <div className='mb-20'>
            <Banner></Banner>
            <HomeService></HomeService>
        </div>
    );
};

export default Home;