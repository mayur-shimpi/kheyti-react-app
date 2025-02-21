import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const reviews = [
    {
        id:0,
        title: "We have been farming for 35-40 years.",
        img: "/assets/stories/img-1.png"
    },
    {
        id:1,
        title: "We have been farming for 35-40 years.",
        img: "/assets/stories/img-2.png"
    },
    {
        id:2,
        title: "We have been farming for 35-40 years.",
        img: "/assets/stories/img-1.png"
    },
    {
        id:3,
        title: "We have been farming for 35-40 years.",
        img: "/assets/stories/img-2.png"
    },
    {
        id:4,
        title: "We have been farming for 35-40 years.",
        img: "/assets/stories/img-1.png"
    },
    {
        id:5,
        title: "We have been farming for 35-40 years.",
        img: "/assets/stories/img-2.png"
    },
    
]
const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const StoriesSection = () => {

    return (
        <section className='bg-gray200 py-10 lg:pb-20'>
            <div className="relative w-full overflow-hidden ">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="w-full"
                    >
                        <h3 className="font-semibold text-2xl lg:text-4xl !leading-20">
                            The stories and memories of success
                        </h3>
                    </motion.div>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3.4}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        1024: { slidesPerView: 4 },
                    }}
                    className="w-full"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative bg-white rounded-lg shadow-sm border border-gray300 w-full ">
                                <div>
                                    <div className="h-[300px]">
                                    <img src={review.img} className="h-full w-full rounded-lg" alt="kheyti review" />
                                    </div>
                                    <div className="w-full absolute left-0 bottom-0 py-8 px-2">
                                        <p className="text-sm text-center text-white font-semibold leading-5">{review.title}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default StoriesSection;
