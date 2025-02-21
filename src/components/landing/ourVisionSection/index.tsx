import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { motion } from "framer-motion";
import Tab1 from "./components/tab1";

const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"];

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const OurVisionSection: React.FC = () => {
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

    const handlePrev = () => {
        setActiveIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => Math.min(tabs.length - 1, prevIndex + 1));
    };

    return (
        <section ref={sectionRef} className="relative h-[500vh]">
            <div className="sticky top-0 h-screen py-10 lg:py-10 bg-gradient-to-b from-[#FFFFFE] to-[#FFFFEA]">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="w-full"
                    >
                        <h3 className="font-cronosRegular text-2xl lg:text-5xl !leading-20">
                            Our vision for change, translated into voices of impact
                        </h3>
                    </motion.div>
                </div>

                <div className="container mx-auto lg:max-w-7xl  mt-20 lg:mt-26 px-5 md:lg:px-20 lg:px-40">
                    {/* Changing Content */}
                    <div className="grid grid-cols-4">
                        <div className="col-span-4">
                            <motion.div
                                ref={contentRef}
                                key={activeIndex}
                                initial={{ opacity: 1, x: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 1, y: -20 }}
                                transition={{ duration: 0 }}
                                className="text-center text-3xl font-semibold"
                            >
                                {/* Dynamic Tab Content */}
                                <Tab1 activeIndex={activeIndex}/>
                            </motion.div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center mt-8">
                        <button
                            onClick={handlePrev}
                            className="mr-4 px-2 py-2 border bg-white text-primary rounded-xl disabled:opacity-50 hover:bg-primary400 hover:text-white"
                            disabled={activeIndex === 0} 
                        >
                            <ArrowLeftIcon className="size-5" />
                        </button>

                        {tabs.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`mx-1 rounded-full transition-all ${
                                    index === activeIndex
                                        ? "bg-primary400 text-white w-10 h-4"
                                        : "bg-gray400 text-gray-300 w-4 h-4"
                                }`}
                            />
                        ))}

                        <button
                            onClick={handleNext}
                            className="ml-4 px-2 py-2 border bg-white text-primary rounded-xl disabled:opacity-50 hover:bg-primary400 hover:text-white"
                            disabled={activeIndex === tabs.length - 1} 
                        >
                            <ArrowRightIcon className="size-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurVisionSection;
