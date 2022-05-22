import React from 'react';

const Facilities = () => {
    return (

        <div className='mt-20'>
            <div className='text-center'>
                <h1>YOUR PERFECT WAY</h1>
                <h1 style={{ color: '#570df8' }} className='text-5xl font-bold '>Why Choose Our Facilities</h1>
            </div>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">

                    <img src="http://iamubaidah.com/html/solvit/assets/images/why-choose-img.png" class="" />
                    <div className=''>
                        <div class="card lg:card-side">
                            <figure><img className='w-36' src="http://iamubaidah.com/html/solvit/assets/images/svg/why-choose-icon-1.svg" alt="Movie" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">24x7 Support Service</h2>
                                <p>In case you have a minor PC issue or need a consultation, our support team can help!</p>
                            </div>
                        </div>
                        <div class="card lg:card-side">
                            <figure><img className='w-36' src="http://iamubaidah.com/html/solvit/assets/images/svg/why-choose-icon-2.svg" alt="Movie" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">Good Performamce</h2>
                                <p>Looking for a quick PC upgrade? Our experts will have the job done correctly and in time.</p>
                            </div>
                        </div>
                        <div class="card lg:card-side">
                            <figure><img className='w-36' src="http://iamubaidah.com/html/solvit/assets/images/svg/why-choose-icon-3.svg" alt="Movie" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">Repair Process</h2>
                                <p>Our appliance repair technicians are clean and professional and provide repair services you can rely on.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;