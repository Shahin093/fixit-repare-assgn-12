import React from 'react';
import { Carousel } from 'react-carousel-minimal';
// import { AnimationOnScroll } from 'react-animation-on-scroll';


// sourse animation link : : https://www.metinarslanturk.com/react-animation-on-scroll/


const Banner = () => {
    const data = [
        {
            image: "https://html.modernwebtemplates.com/fixit/images/slide03.jpg",
            caption: "San Francisco"
        },
        {
            image: "https://html.modernwebtemplates.com/fixit/images/slide03.jpg",
            caption: "Scotland"
        },
        {
            image: "https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/home_1_slider_1-e1527970919620.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/home_1_slider_2-e1527970968543.jpg",
            caption: "San Francisco"
        },
        // {
        //     image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
        //     caption: "Scotland"
        // },
        // {
        //     image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
        //     caption: "Darjeeling"
        // },
        // {
        //     image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
        //     caption: "San Francisco"
        // },
        // {
        //     image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
        //     caption: "Scotland"
        // },
        // {
        //     image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
        //     caption: "Darjeeling"
        // }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }


    return (
        <div>
            {/* <AnimationOnScroll animateIn="animate__fadeInLeftBig"> */}

            <div style={{ textAlign: "center" }}>
                {/* <h2>React Carousel Minimal</h2>
                <p>Easy to use, responsive and customizable carousel component for React Projects.</p> */}
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={2000}
                        width="1150px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "1150px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>
            </div>



            {/*    <div class="carousel w-full my-16">


                <div id="slide1" class="carousel-item relative w-full">
                    <img src="" class="w-full" /> /
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
                    <img src="" class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="" class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="" class="w-full" /> /
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>

                <div>

                </div>


            </div > */}

            {/* </AnimationOnScroll> */}
        </div>

        // <div class="carousel w-full my-16">


        //     <div id="slide1" class="carousel-item relative w-full">
        //         <img src="https://html.modernwebtemplates.com/fixit/images/slide03.jpg" class="w-full" /> /
        //         <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide4" class="btn btn-circle">❮</a>
        //             <div className='text-center'>
        //                 <h2>THis is best Fisure.</h2>
        //                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse unde </p>
        //             </div>
        //             <a href="#slide2" class="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide2" class="carousel-item relative w-full">
        //         <img src="https://html.modernwebtemplates.com/fixit/images/slide03.jpg" class="w-full" /> /
        //         <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide1" class="btn btn-circle">❮</a>
        //             <a href="#slide3" class="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide3" class="carousel-item relative w-full">
        //         <img src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/home_1_slider_1-e1527970919620.jpg" class="w-full" /> /
        //         <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide2" class="btn btn-circle">❮</a>
        //             <a href="#slide4" class="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide4" class="carousel-item relative w-full">
        //         <img src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/home_1_slider_2-e1527970968543.jpg" class="w-full" /> /
        //         <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide3" class="btn btn-circle">❮</a>
        //             <a href="#slide1" class="btn btn-circle">❯</a>
        //         </div>
        //     </div>

        //     <div>

        //     </div>


        // </div >
    );
};

export default Banner;