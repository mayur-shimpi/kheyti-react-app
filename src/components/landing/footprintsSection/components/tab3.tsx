"use client";
import React from 'react';
import { motion } from "framer-motion";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Tab3 = () => {
    return (
        <section className='relative h-screen py-5 lg:py-10 bg-[url(/assets/landing/footprint-bg-2.png)] bg-no-repeat bg-cover bg-center'>
            <div className="container mx-auto px-5 lg:px-40 lg:max-w-7xl">
                <div className="text-center">
                    <h3 className='text-white text-center font-semibold text-2xl lg:text-4xl !leading-20 '>Registering our footprints in India’s agrivolution.</h3>
                </div>

                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full "
                >
                    <div className='mt-20 lg:w-[25%]'>
                        <div className='mb-10'>
                            <h6 className='text-2xl lg:text-4xl text-primary400 font-cronosSemiBold'>Cultivating empowerment, state by state</h6>
                        </div>
                        <div className='mb-7'>
                            <h6 className='text-2xl lg:text-4xl text-primary400 font-cronosSemiBold'>20+</h6>
                            <p className='text-xl text-white font-medium mt-1 leading-5'> vegetables, herbs, fruits and flowers.</p>
                        </div>
                        <div className='mb-7'>
                            <h6 className='text-2xl lg:text-4xl text-primary400 font-cronosSemiBold'>7,000+</h6>
                            <p className='text-xl text-white font-medium mt-1 leading-5'> farmers.</p>
                        </div>
                        <div className='mb-7'>
                            <h6 className='text-2xl lg:text-4xl text-primary400 font-cronosSemiBold'>9 States</h6>
                            <p className='text-xl text-white font-medium mt-1 leading-5'> Telangana, Andhra Pradesh, UP, Bihar, Jharkhand, Odisha, Rajasthan, Madhya Pradesh and Karnataka</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Tab3