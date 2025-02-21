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
        <section className="relative h-[117vh] py-20 lg:py-10 bg-[url('/assets/landing/our-goal-bg.png')] bg-no-repeat bg-cover bg-top ">
            <div className='container mx-auto max-w-5xl px-5 lg:px-20 '>
                <div className="text-center">
                    <motion.div
                        variants={fadeDownVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="w-full z-8"
                    >
                        <h3 className='text-black500 text-center font-semibold text-2xl lg:text-5xl !leading-20 '>Our Goal</h3>
                    </motion.div>
                </div>

                <div className="text-center w-full absolute left-0 top-28">
                    <motion.div
                        variants={fadeDownVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="w-full z-8"
                    >
                        <h3 className='text-gray800 text-center font-semibold text-2xl lg:text-4xl !leading-20 '>Make <span className='text-primary500'>1 million</span> farmers successful with <br/> climate-resilient innovations by</h3>
                    </motion.div>
                    <motion.div
                        variants={fadeDownVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="w-full z-1 mt-20"
                    >
                        <h3 className='text-gray800 text-center font-medium text-4xl lg:text-[260px] !leading-20 '>2033</h3>
                    </motion.div>
                </div>

                <motion.div
                        variants={fadeInVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="w-full absolute left-0 bottom-0 z-8"
                    >
                        <img src='/assets/landing/family.png' className='w-full' />
                    </motion.div>
             
            </div>
        </section>
    )
}

export default OurGoalSection