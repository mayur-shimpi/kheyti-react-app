"use client";
import React from 'react';
import { motion } from "framer-motion";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Tab1 = () => {
    return (
        <section className='relative h-screen py-5 lg:py-10 bg-gradient-to-b from-[#1B7D4E] to-[#134A15]'>
            <div className="container mx-auto px-5 lg:px-40 max-w-8xl">
                <div className="text-center">
                    <h3 className='text-white text-center font-semibold text-2xl lg:text-4xl !leading-20 '>Registering our footprints in India’s agrivolution.</h3>
                </div>
                <div className='lg:flex items-center justify-center mt-5'>
                    <div className='flex justify-between items-center border border-white rounded-full px-3 py-2 mr-4 text-white'>
                        <div className='mr-10 font-medium'><span className='leading-5 font-semibold'>Challenges</span></div>
                        <div className='w-4 h-4 bg-[#489A4B] rounded-full border'></div>
                    </div>
                    <div className='flex justify-between items-center border border-gray100 rounded-full px-3 py-2 text-gray100'>
                        <div className='mr-10 font-medium'><span className='leading-5 font-crononsRegular'>Our Impact</span></div>
                        <div className='w-4 h-4 bg-transparent rounded-full border border-gray100'></div>
                    </div>
                </div>
                <div className='mt-5 grid grid-cols-1 lg:grid-cols-4 gap-5'>
                    <div>
                        <h6 className='text-3xl text-white font-cronosSemiBold'>60% drop </h6>
                        <p className='text-xl text-white font-medium leading-5'> in groundwater levels this decade</p>
                    </div>
                    <div className='col-span-2'></div>
                    <div className='lg:pl-6'>
                        <h6 className='text-3xl text-white font-cronosSemiBold'>10% reduction </h6>
                        <p className='text-xl text-white font-medium leading-5'> in yields per year due
                            to heat extremes</p>
                    </div>
                </div>
                <div className='mt-5 grid grid-cols-1 lg:grid-cols-4 gap-5'>
                    <div >
                        <h6 className='text-3xl text-white font-cronosSemiBold'>$7 billion</h6>
                        <p className='text-xl text-white font-cronosLight leading-5 lg:w-[80%]'> lost to pest attacks every year</p>
                    </div>
                    <div className='col-span-2'></div>
                    <div className='lg:pl-6'>
                        <h6 className='text-3xl text-white font-cronosSemiBold'>8 million </h6>
                        <p className='text-xl text-white font-cronosLight leading-5'> livelihoods lost in just
                            one bad rain</p>
                    </div>
                </div>
            </div>

            <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="w-full absolute bottom-0 left-auto text-center"
            >
                <img src='/assets/landing/earth-cut.png' alt="Registering our footprints in India’s agrivolution." className='mx-auto ' />
            </motion.div>
        </section>
    )
}

export default Tab1