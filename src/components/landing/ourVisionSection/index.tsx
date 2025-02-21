import { useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { motion } from "framer-motion";
import Tab1 from "./components/tab1";

const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"];

const fadeUpVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const OurVisionSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.clientHeight;
            const viewportHeight = window.innerHeight;

            // Calculate progress (0 to 1)
            const progress = Math.min(1, Math.max(0, -sectionTop / (sectionHeight - viewportHeight)));

            // Determine new index based on progress
            const newIndex = Math.min(tabs.length - 1, Math.floor(progress * tabs.length));

            setActiveIndex(newIndex);
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
        <section ref={sectionRef} className="relative min-h-[500vh] bg-gradient-to-b from-[#FFFFFE] to-[#FFFFEA]">
            <div className="sticky h-screen top-0 flex flex-col items-center justify-center min-h-screen">

                <div className="container mx-auto lg:max-w-7xl px-5 md:px-10 lg:px-40">
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h3 className="font-cronosRegular text-3xl lg:text-5xl leading-8">
                            Our vision for change, translated into voices of impact
                        </h3>
                    </motion.div>

                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0, ease: "easeOut" }}
                        className="text-center text-3xl font-semibold mt-10 lg:mt-20"
                    >
                        <Tab1 activeIndex={activeIndex} />
                    </motion.div>


                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center mt-8 md:mt-16 lg:mt-16">
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
                                className={`mx-1 rounded-full transition-all ${index === activeIndex
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
