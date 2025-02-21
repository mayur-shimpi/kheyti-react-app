import { motion } from "framer-motion";
import { PrimaryButton } from "../../buttons";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: index * 0.2 },
    }),
};

const InnovationSection = () => {
    return (
        <section className="py-20 h-[130vh] bg-[url(/assets/landing/innovation-bg.png)] bg-no-repeat bg-cover bg-bottom">
            <div className="container mx-auto px-5 lg:px-40">
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full lg:w-[55%]"
                >
                    <h3 className="font-semibold text-2xl lg:text-4xl !leading-20">
                        From ground realities to <br />
                        <span className="text-primary400">greenhouse innovation</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-60 mt-10">
                    {[0, 1].map((index) => (
                        <motion.div
                            key={index}
                            variants={columnVariants}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            className="text-justify text-xl text-black500"
                        >
                            {index === 0 ? (
                                <>
                                    <p className="leading-6">
                                        Established in 2015 by four climate enthusiasts, Kheyti is an India-based agritech social enterprise. It empowers smallholder farmers in combatting climate change and unpredictable yields through affordable, climate-resilient innovations.
                                    </p>
                                    <p className="leading-5 mt-5">
                                    Kheyti was founded to address the critical challenges of India’s smallholder farmers, leading to the development of its flagship innovation — 
                                        <span className="ml-2 text-primary400 font-semibold text-lg leading-6">
                                        the Greenhouse-in-a-Box.
                                        </span>{" "}
                                    </p>
                                    <PrimaryButton name="About Us" className="mt-8"/>
                                </>
                            ) : (
                                <>
                                    <p className="leading-6">
                                    Trusted by farmers, philanthropists, governments, and institutions globally, Kheyti drives <span className="text-primary400 font-semibold text-lg leading-6">long-term profitability and stability </span> for farmers, while championing their success and environmental well-being.
                                    </p>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InnovationSection;
