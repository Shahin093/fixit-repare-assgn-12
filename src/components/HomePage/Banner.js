import React from 'react';

const Banner = () => {
    return (
        <div className='mb-32'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://html.modernwebtemplates.com/fixit/images/slide03.jpg" /> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div>
                            <h2 className='text-base-100 text-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, a?</h2>
                            <p className='text-base-100  text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem maiores molestiae est at perspiciatis dolores dicta accusamus debitis quod? Ducimus consequatur iure excepturi, quidem reiciendis commodi impedit ipsum hic voluptatibus.</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://html.modernwebtemplates.com/fixit/images/slide01.jpg
" className="w-full" /> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div>
                            <h2 className='text-base-100 text-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, a?</h2>
                            <p className='text-base-100 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem maiores molestiae est at perspiciatis dolores dicta accusamus debitis quod? Ducimus consequatur iure excepturi, quidem reiciendis commodi impedit ipsum hic voluptatibus.</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;