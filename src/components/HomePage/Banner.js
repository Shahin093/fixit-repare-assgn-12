import React from 'react';

const Banner = () => {
    return (
        <div className='p-10'>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://html.modernwebtemplates.com/fixit/images/slide03.jpg" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <div>
                            <h2 className='text-base-100 text-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, a?</h2>
                            <p className='text-base-100  text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem maiores molestiae est at perspiciatis dolores dicta accusamus debitis quod? Ducimus consequatur iure excepturi, quidem reiciendis commodi impedit ipsum hic voluptatibus.</p>
                        </div>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://html.modernwebtemplates.com/fixit/images/slide01.jpg
" class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <div>
                            <h2 className='text-base-100 text-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, a?</h2>
                            <p className='text-base-100 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem maiores molestiae est at perspiciatis dolores dicta accusamus debitis quod? Ducimus consequatur iure excepturi, quidem reiciendis commodi impedit ipsum hic voluptatibus.</p>
                        </div>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;