import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TabNavs from "./components/tabNavs";
import Tab1 from "./components/tab1";
import Tab2 from "./components/tab2";
import Tab3 from "./components/tab3";
import Tab4 from "./components/tab4";

const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const GreenBoxScrollingSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !contentRef.current) return;

            const sectionTop = sectionRef.current.getBoundingClientRect().top;
            const sectionHeight = sectionRef.current.clientHeight;
            const viewportHeight = window.innerHeight;

            if (sectionTop <= 0 && Math.abs(sectionTop) < sectionHeight - viewportHeight) {
                const progress = Math.abs(sectionTop) / (sectionHeight - viewportHeight);
                const newIndex = Math.min(tabs.length - 1, Math.floor(progress * tabs.length));
                setActiveIndex(newIndex);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[400vh] bg-gradient-to-b from-[#FFFFFE] to-[#FFFFEA]">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center ">
                <div className="lg:absolute top-10 text-center mb-10 lg:mb-20">
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="w-full "
                    >
                        <h3 className='font-cronosRegular text-3xl lg:text-5xl !leading-20 '>Greenhouse-in-a-Box</h3>
                    </motion.div>
                </div>
                <div className="absolute top-1/2 left-4 lg:left-10 -translate-y-1/2 flex flex-col gap-4">
                    {tabs.map((tab, index) => (
                        <motion.div
                            key={index}
                            className={`cursor-pointer rounded-full transition-all ${index === activeIndex ? "bg-primary400 text-white w-4 h-10" : "bg-gray400 text-gray-300 w-4 h-4"
                                }`}
                        >
                        </motion.div>
                    ))}
                </div>

                <div className="container mx-auto lg:max-w-6xl px-5 ">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 items-center">
                        <div>
                            <TabNavs activeIndex={activeIndex} />
                        </div>
                        <div className="col-span-3">
                            <motion.div
                                ref={contentRef}
                                key={activeIndex}
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-center text-3xl font-semibold"
                            >
                                {
                                    activeIndex === 0 ?
                                        <Tab1 />
                                        :
                                        activeIndex === 1 ?
                                            <Tab2 />
                                            :
                                            activeIndex === 2 ?
                                                <Tab3 />
                                                :
                                                activeIndex === 3 ?
                                                    <Tab4 />
                                                    : null
                                }
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GreenBoxScrollingSection;
