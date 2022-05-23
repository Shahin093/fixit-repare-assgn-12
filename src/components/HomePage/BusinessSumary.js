import React from 'react';

const BusinessSumary = () => {
    return (
        <div class="hero " style={{
            backgroundImage: "url(https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/counter_bg.jpg)"
        }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="">
                    <h1 class="mb-5 text-5xl font-bold">Our Statistics</h1>
                    <p class="mb-5">We’re experienced and award winning repair company. We’ve successfully fixed thousands of computer device over the last couple of years with our customer satisfaction.</p>
                    <div className='stats stats-vertical lg:stats-horizontal shadow m-3'>
                        <div class="stat m-3">
                            <div class="stat-value">275</div>
                            <div class="stat-desc text-3xl font-bold m-3">Current <span className='text-orange-500'>Fixings</span></div>
                        </div>

                        <div class="stat">
                            <div class="stat-value">6325</div>
                            <div class="stat-desc text-3xl font-bold">Happy <span className='text-orange-500'>Clients</span></div>
                        </div>

                        <div class="stat">
                            <div class="stat-value">22</div>
                            <div class="stat-desc text-3xl font-bold">Years <span className='text-orange-500'>Experience</span></div>
                        </div>

                        <div class="stat">
                            <div class="stat-value">5750</div>
                            <div class="stat-desc text-3xl font-bold">Devices<span className='text-orange-500'>Fixing</span></div>
                        </div>
                    </div>
                </div>


            </div>
            {/* <div className='hero-content'>
                <div class="stats stats-vertical shadow">

                    

                </div> 
        </div>*/}


        </div >
    );
};

export default BusinessSumary;