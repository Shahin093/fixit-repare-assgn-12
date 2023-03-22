import React from 'react';
import './ContactUs.css';
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
};

const ContactUs = () => {


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


        <div className='my-16'>
            <motion.div
                className="box"
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
            >



                <div class="containers">
                    <div class="content">
                        <div class="left-side">
                            <div class="address details">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="topic">Address</div>
                                <div class="text-one">Surkhet, NP12</div>
                                <div class="text-two">Birendranagar 06</div>
                            </div>
                            <div class="phone details">
                                <i class="fas fa-phone-alt"></i>
                                <div class="topic">Phone</div>
                                <div class="text-one">+0098 9893 5647</div>
                                <div class="text-two">+0096 3434 5678</div>
                            </div>
                            <div class="email details">
                                <i class="fas fa-envelope"></i>
                                <div class="topic">Email</div>
                                <div class="text-one">codinglab@gmail.com</div>
                                <div class="text-two">info.codinglab@gmail.com</div>
                            </div>
                        </div>
                        <div class="right-side">
                            <div class="topic-text">Send us a message</div>
                            <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
                            <form action="#">
                                <div class="input-box">
                                    <input type="text" placeholder="Enter your name" />
                                </div>
                                <div class="input-box">
                                    <input type="text" placeholder="Enter your email" />
                                </div>
                                <div class="input-box message-box">
                                    <input type="textarea" placeholder="Enter your Description" />
                                </div>
                                <div class="button">
                                    <input type="button" value="Send Now" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>





        </div>
    );
};

export default ContactUs;