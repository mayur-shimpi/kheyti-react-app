"use client";
import React from 'react';
import { motion } from "framer-motion";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Tab2 = () => {
    return (
        <section className='relative h-screen py-5 lg:py-10 bg-[url(/assets/landing/footprint-bg-1.png)] bg-no-repeat bg-cover bg-center'>
            <div className="container mx-auto px-5 lg:px-40 max-w-7xl">
                <div className="text-center">
                    <h3 className='text-white text-center font-semibold text-2xl lg:text-4xl !leading-20 '>Registering our footprints in India’s agrivolution.</h3>
                </div>
                <div className='lg:flex items-center justify-center mt-5'>
                    <div className='flex justify-between items-center border border-gray100 rounded-full px-3 py-2 mr-4 text-gray100'>
                        <div className='mr-10 font-medium'><span className='leading-5 font-crononsRegular'>Challenges</span></div>
                        <div className='w-4 h-4 bg-transparent rounded-full border border-gray100'></div>
                    </div>
                    <div className='flex justify-between items-center border border-white rounded-full px-3 py-2 text-white'>
                        <div className='mr-10 font-medium'><span className='leading-5 font-semibold'>Our Impact</span></div>
                        <div className='w-4 h-4 bg-[#489A4B] rounded-full border'></div>
                    </div>
                </div>
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full "
                >
                    <div className='mt-20'>
                        <div className='mb-10'>
                            <h6 className='text-2xl lg:text-4xl text-primary400 font-cronosSemiBold'>Our Impact</h6>
                        </div>
                        <div className='mb-7'>
                            <h6 className='text-2xl lg:text-4xl text-primary400 font-cronosSemiBold'>3-7x</h6>
                            <p className='text-xl text-white font-medium mt-1 leading-5'> increase in yield</p>
                        </div>
                        <div className='mb-7'>
                            <h6 className='text-2xl lg:text-4xl text-primary400 font-cronosSemiBold'>2-3x</h6>
                            <p className='text-xl text-white font-medium mt-1 leading-5'> increase in income</p>
                        </div>
                        <div className='mb-7'>
                            <h6 className='text-2xl lg:text-4xl text-primary400 font-cronosSemiBold'>Up to 90%</h6>
                            <p className='text-xl text-white font-medium mt-1 leading-5'> decrease in water usage</p>
                        </div>
                        <div className='mb-7'>
                            <h6 className='text-2xl lg:text-4xl text-primary400 font-cronosSemiBold'>Up to 90%</h6>
                            <p className='text-xl text-white font-medium mt-1 leading-5'> reduction in pest attacks</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Tab2