import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "../../buttons";

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

const JoinUsSection = () => {
    return (
        <section className="py-20 h-[120vh] bg-[url(/assets/landing/join-us-bg.png)] bg-no-repeat bg-cover bg-bottom">
            <div className="container mx-auto px-5 lg:px-40">
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full lg:w-[55%]"
                >
                    <h3 className="font-semibold text-2xl lg:text-4xl !leading-20">
                    We can, we will… together!
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
                                    At Kheyti, we are on a mission to empower farmers with resilience to overcome climate change, achieve higher incomes, and restore their belief in farming as a thriving profession. This journey calls for partnerships driven by shared values and joint action.
                                    </p>
                                    <p className="leading-5 mt-2">
                                        <span className="text-primary400 font-semibold text-lg leading-6">
                                        Join us in strengthening India’s agrarian roots.
                                        </span>{" "}
                                    </p>
                                    <PrimaryButton name="Donate" className="mt-8 hover:border-white"/>
                                    <SecondaryButton name="Collabrate" className="lg:ml-4 mt-8 hover:text-primary hover:border-white"/>
                                </>
                            ) : (
                                <>
                                   
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JoinUsSection;
