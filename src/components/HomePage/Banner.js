import React from 'react';

const Banner = () => {
    return (
        <div class="carousel w-full my-16">
            <div id="slide1" class="carousel-item relative w-full">
                <img src="https://html.modernwebtemplates.com/fixit/images/slide03.jpg" class="w-full" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <div className='text-center'>
                        <h2>THis is best Fisure.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse unde </p>
                    </div>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src="https://html.modernwebtemplates.com/fixit/images/slide03.jpg" class="w-full" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/home_1_slider_1-e1527970919620.jpg" class="w-full" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/home_1_slider_2-e1527970968543.jpg" class="w-full" /> /
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a>
                    <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;