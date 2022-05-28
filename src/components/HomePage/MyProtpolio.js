import React from 'react';

const MyProtpolio = () => {
    return (
        <div class="hero min-h-screen w-full" style={{
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrc0M5Z2Ih8lNzelCF3UEBlXLyiHynisYFw&usqp=CAU)"
        }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content w-62">
                <div class="w-5/6">
                    <h1 class="mb-2 text-3xl ">Name : Shidul Islam</h1>
                    <h1 class="mb-2 text-3xl ">Email : sishahin093@gmail.com</h1>
                    <h1 class="mb-5">Education Qualication : Diploma 5th semister</h1>


                    <div class="card card-protfolio w-5/6 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h1 className='text-3xl text-red-600'>Web Developer Skills : </h1>
                            <p className='text-green-500'>HTML5,   CSS3,    BOOTSTRAP</p>
                            <p className='text-green-500'>TAILWIND,   DAISYUI,    JAVASCRIPT</p>
                            <p className='text-green-500'>REACT JS,   NODE JS,    MONGODB DATABASE</p>
                        </div>
                    </div>
                    <div class="card card-protfolio w-5/6 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h1 className='text-3xl text-red-600'>My Practise Project Live Website Link : </h1>
                            <a href='https://fixit-repair-assign-12.web.app' target='_blank' class="link link-secondary">https://fixit-repair-assign-12.web.app</a>
                            <a class="link link-secondary">I'm a simple link</a>
                            <a class="link link-secondary">I'm a simple link</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProtpolio;