import { useState } from 'react';
import { motion } from "framer-motion";
import CorpratePartners from "../../icons/CorpratePartners";
import NonProfitPartner from "../../icons/NonProfitPartner";
import InternationalSupportor from "../../icons/InternationalSupportor";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const tabVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const tabs = [
    {
        id: 0, title: "Institutional and corporate partners", icon: CorpratePartners, content: [
            { image: "/assets/collabration/img-1.png" },
            { image: "/assets/collabration/img-2.png" },
            { image: "/assets/collabration/img-3.png" },
            { image: "/assets/collabration/img-4.png" },
            { image: "/assets/collabration/img-5.png" },
        ]
    },
    {
        id: 1, title: "Non-profit and government partners", icon: NonProfitPartner, content: [
            { image: "/assets/collabration/img-6.png" },
            { image: "/assets/collabration/img-7.png" },
            { image: "/assets/collabration/img-8.png" },
            { image: "/assets/collabration/img-9.png" },

        ]
    },
    {
        id: 2, title: "International supporters", icon: InternationalSupportor, content: [
            { image: "/assets/collabration/img-1.png" },
            { image: "/assets/collabration/img-2.png" },
            { image: "/assets/collabration/img-3.png" },
            { image: "/assets/collabration/img-4.png" },
            { image: "/assets/collabration/img-5.png" },
            { image: "/assets/collabration/img-6.png" },
            { image: "/assets/collabration/img-7.png" },
            { image: "/assets/collabration/img-8.png" },
            { image: "/assets/collabration/img-9.png" },
        ]
    }
];

const CollaborationSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className='bg-gray200 py-10 lg:py-20'>
            <div className='container mx-auto lg:max-w-6xl px-4'>
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="w-full"
                    >
                        <h3 className="font-semibold text-2xl lg:text-4xl !leading-20">
                            Driving enablement with the force of collaboration
                        </h3>
                    </motion.div>
                </div>
                <div className="lg:flex justify-start lg:justify-center lg:space-x-4 space-y-4 lg:space-y-0 my-12 ">
                    {tabs.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={item.id} className='flex items-center justify-start'>
                                <div>
                                    <IconComponent className={`size-10 mr-1 ${activeTab === index ? " text-primary400" : "text-black500"}`} />
                                </div>
                                <button

                                    onClick={() => setActiveTab(item.id)}
                                    className={`w-full lg:w-auto flex items-center text-sm lg:text-md px-5 py-2 bg-white font-semibold border rounded-full whitespace-nowrap  transition-all ${activeTab === item.id ? "border-primary400 text-primary400" : "border-gray500 text-black500"}`}
                                >

                                    {item.title}
                                </button>
                            </div>
                        )
                    })}
                </div>
                <motion.div
                    key={activeTab}
                    variants={tabVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full flex flex-wrap justify-center gap-2 lg:gap-4"
                >
                    {tabs[activeTab].content.map((card, index) => (
                        <div key={index} className="p-4 rounded-lg text-center bg-white rounded-lg text-center">
                            <img src={card.image} alt='Partners' className="w-auto h-10 lg:h-16 mx-auto object-cover rounded-md mb-2" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CollaborationSection;