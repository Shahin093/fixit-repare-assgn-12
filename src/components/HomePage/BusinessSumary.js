import React from 'react';
import BouncingText from 'react-bouncing-text';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};
const BusinessSumary = () => {

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            className="box"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <div className='w-full'>
                <div className="hero w-full" style={{
                    backgroundImage: "url(https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/counter_bg.jpg)"
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-full">
                            <h1 className="mb-5 text-5xl font-bold">
                                <BouncingText
                                    className={"bouncing-text"}
                                    text={"Our Statistics"}
                                    clickable
                                    hoverable
                                    delay={30}
                                    duration={200}
                                />
                            </h1>
                            <p className="mb-5">We’re experienced and award winning repair company. We’ve successfully fixed thousands of computer device over the last couple of years with our customer satisfaction.</p>
                            <div className='stats stats-vertical lg:stats-horizontal  mt-5'>
                                <div className="stat card card-sumary">

                                    <div className="stat-value">
                                        <BouncingText
                                            className={"bouncing-text"}
                                            text={"2566"}
                                            clickable
                                            hoverable
                                            delay={30}
                                            duration={200}
                                        />
                                        {/* 275 */}
                                    </div>
                                    <div className="stat-desc text-3xl font-bold m-3">Current <span className='text-orange-500'>Fixings</span></div>
                                </div>

                                <div className="stat card card-sumary">
                                    <div className="stat-value">
                                        <BouncingText
                                            className={"bouncing-text"}
                                            text={"6325"}
                                            clickable
                                            hoverable
                                            delay={30}
                                            duration={200}
                                        />
                                    </div>
                                    <div className="stat-desc text-3xl font-bold">Happy <span className='text-orange-500'>Clients</span></div>
                                </div>

                                <div className="stat card card-sumary">
                                    <div className="stat-value">
                                        <BouncingText
                                            className={"bouncing-text"}
                                            text={"22"}
                                            clickable
                                            hoverable
                                            delay={30}
                                            duration={200}
                                        />
                                    </div>
                                    <div className="stat-desc text-3xl font-bold">Years <span className='text-orange-500'>Experience</span></div>
                                </div>

                                <div className="stat card card-sumary">
                                    <div className="stat-value">
                                        <BouncingText
                                            className={"bouncing-text"}
                                            text={"5750"}
                                            clickable
                                            hoverable
                                            delay={30}
                                            duration={200}
                                        />
                                    </div>
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
        </motion.div>


    );
};

export default BusinessSumary;