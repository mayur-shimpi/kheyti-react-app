import { motion } from "framer-motion";

const milestoneVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const data = [
    {
        img: "/assets/svg/milestone-1.svg",
        title: "Elevate Prize 2021",
        desc: "for its innovative ‘Greenhouse-in-a-Box’ solution",
    },
    {
        img: "/assets/svg/milestone-2.svg",
        title: "Elevate Prize 2022",
        desc: "to Protect and Restore Nature",
    },
    {
        img: "/assets/svg/milestone-3.svg",
        title: "Acumen Emerging Entrepreneurs Award 2017",
        desc: "for driving change and innovation in farmer communities",
    },
];

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const MilestonesSection = () => {
    return (
        <section className="bg-gray200 py-20 lg:py-40">
            <div className="container mx-auto px-5 lg:px-40 max-w-6xl">
                <div className="text-center">
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="w-full "
                    >
                        <h3 className='font-cronosRegular text-2xl lg:text-5xl !leading-20 '>Milestones of change anchored in gratitude</h3>
                    </motion.div>
                </div>
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={milestoneVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ delay: index * 0.2 }}
                            className="text-left"
                        >
                            <img src={item.img} alt="milestone" className="mx-auto w-full" />
                            <div className="py-2 pl-2">
                                <h6 className="font-cronosRegular text-xl leading-6">{item.title}</h6>
                                <p className="text-gray600 font-light text-lg leading-5 w-full mt-2">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MilestonesSection;
