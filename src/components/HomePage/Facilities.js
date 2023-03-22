import React from 'react';
import './Facilities.css';
const Facilities = () => {
    return (

        <div className='mt-24 mb-20'>


            <div class="bg-gray-50   items-center justify-center">
                <div class="relative">
                    <div class="absolute top-0 -left-4 w-60 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div class="absolute -bottom-8 left-20 w-60 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div class=" relative space-y-4">



                    </div>
                </div>
            </div>


            <div className='text-center'>
                <h1>YOUR PERFECT WAY</h1>
                <h1 style={{ color: '#570df8' }} className='text-5xl font-bold '>
                    <span className='title-word title-word-1'>Why </span>
                    <span className='title-word title-word-2'>Choose </span>
                    <span className='title-word title-word-3'>Our </span>
                    <span className='title-word title-word-4'>Facilities </span>
                </h1>
            </div>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">

                    <img src="http://iamubaidah.com/html/solvit/assets/images/why-choose-img.png" alt='' class="" />




                    <div className=''>
                        <div class="card card-Facilities lg:card-side  child bounce">
                            <figure><img className='w-32' src="http://iamubaidah.com/html/solvit/assets/images/svg/why-choose-icon-1.svg" alt="Movie" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">24x7 Support Service</h2>
                                <p>In case you have a minor PC issue or need a consultation, our support team can help!</p>
                            </div>
                        </div>
                        <div class="card card-Facilities lg:card-side  child bounce">
                            <figure><img className='w-36' src="http://iamubaidah.com/html/solvit/assets/images/svg/why-choose-icon-2.svg" alt="Movie" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">Good Performamce</h2>
                                <p>Looking for a quick PC upgrade? Our experts will have the job done correctly and in time.</p>
                            </div>
                        </div>
                        <div class="card card-Facilities lg:card-side  child bounce">
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