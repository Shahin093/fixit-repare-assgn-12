import React from 'react';
import { Carousel } from 'react-carousel-minimal';
// import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};

// sourse animation link : : https://www.metinarslanturk.com/react-animation-on-scroll/


const Banner = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);


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

        <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
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
                            // slideNumber={true}
                            slideNumberStyle={slideNumberStyle}
                            captionPosition="bottom"
                            automatic={true}
                            dots={true}
                            pauseIconColor="white"
                            pauseIconSize="40px"
                            slideBackgroundColor="darkgrey"
                            slideImageFit="cover"
                            // thumbnails={true}
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
            </div>
        </motion.div>





    );
};

export default Banner;