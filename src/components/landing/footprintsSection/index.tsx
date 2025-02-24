import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Tab1 from "./components/tab1";
import Tab2 from "./components/tab2";
import Tab3 from "./components/tab3";

const tabs = ["Tab 1", "Tab 2", "Tab 3"];

const FootPrintSection: React.FC = () => {
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
        <section ref={sectionRef} className="relative h-[300vh] ">
            <div className="sticky top-0 lg:top-0 h-screen flex items-center justify-center">
                <motion.div
                    ref={contentRef}
                    key={activeIndex}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0 }}
                     className="w-full"
                >
                   {activeIndex === 0 && <Tab1 />}
                    {activeIndex === 1 && <Tab2 />}
                    {activeIndex === 2 && <Tab3 />}
                </motion.div>
            </div>
        </section>
    );
};

export default FootPrintSection;
