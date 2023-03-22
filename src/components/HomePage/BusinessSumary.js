import React from 'react';

const BusinessSumary = () => {
    return (
        <div className='w-full'>
            <div className="hero w-full" style={{
                backgroundImage: "url(https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/counter_bg.jpg)"
            }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full">
                        <h1 className="mb-5 text-5xl font-bold">Our Statistics</h1>
                        <p className="mb-5">We’re experienced and award winning repair company. We’ve successfully fixed thousands of computer device over the last couple of years with our customer satisfaction.</p>
                        <div className='stats stats-vertical lg:stats-horizontal  mt-5'>
                            <div className="stat card card-sumary">
                                <div className="stat-value">
                                    275</div>
                                <div className="stat-desc text-3xl font-bold m-3">Current <span className='text-orange-500'>Fixings</span></div>
                            </div>

                            <div className="stat card card-sumary">
                                <div className="stat-value">6325</div>
                                <div className="stat-desc text-3xl font-bold">Happy <span className='text-orange-500'>Clients</span></div>
                            </div>

                            <div className="stat card card-sumary">
                                <div className="stat-value">22</div>
                                <div className="stat-desc text-3xl font-bold">Years <span className='text-orange-500'>Experience</span></div>
                            </div>

                            <div className="stat card card-sumary">
                                <div className="stat-value">5750</div>
                                <div className="stat-desc text-3xl font-bold">Devices<span className='text-orange-500'>Fixing</span></div>
                            </div>
                        </div>
                    </div>


                </div>
                {/* <div className='hero-content'>
                <div className="stats stats-vertical shadow">

                    

                </div> 
        </div>*/}


            </div >
        </div>
    );
};

export default BusinessSumary;