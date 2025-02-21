import { motion } from "framer-motion";

const fadeDownVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const OurGoalSection = () => {
    return (
        <section className="relative h-[100vh] lg:h-[100vh] py-10 lg:py-10 bg-[url('/assets/landing/our-goal-bg.png')] bg-no-repeat bg-cover bg-top ">
            <div className='container mx-auto max-w-5xl px-10 lg:px-20 '>
                <div className="text-center">
                    <motion.div
                        variants={fadeDownVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="w-full z-8"
                    >
                        <h3 className='text-black500 text-center font-semibold text-4xl lg:text-5xl'>Our Goal</h3>
                    </motion.div>
                </div>

                <div className="text-center w-full absolute left-0 top-24 lg:top-28 px-6 lg:px-0">
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            variants={fadeDownVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            className="m-0 z-8 mx-auto"
                        >
                            <h3 className='text-gray800 text-center font-semibold text-lg lg:text-4xl leading-5 '>Make <span className='text-primary500'>1 million</span> farmers successful with climate-resilient innovations by</h3>
                        </motion.div>
                        <motion.div
                            variants={fadeDownVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            className="w-full z-1"
                        >
                            <h3 className='text-gray800 text-center font-medium text-[60px] lg:text-[260px] mt-[-20px] lg:mt-[-100px]'>2033</h3>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    variants={fadeInVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full absolute left-0 bottom-0 z-8 hidden lg:block"
                >
                    <img src='/assets/landing/family-crop.png' className='w-full' />
                </motion.div>

            </div>
        </section>
    )
}

export default OurGoalSection