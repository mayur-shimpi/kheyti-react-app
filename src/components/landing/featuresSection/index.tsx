import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
    { id: 0, title: "Towards Climate-Smart Agriculture (CSA): Strategies, obstacles, and visions for a sustainable future", img: "/assets/features/img-1-min.png" },
    { id: 1, title: "Less Water, More Yield: Earthshot Prize Winning ‘Greenhouse-In-A-Box’ Is Helping Smallholder Farmers Mitigate The Effects Of Climate Change", img: "/assets/features/img-2-min.png" },
    { id: 2, title: "Mad4India’s Favorite 5 Organic Farming Startups In India That Will Make You Fall in Love with Green Living", img: "/assets/features/img-3-min.png" },
    { id: 3, title: "Towards Climate-Smart Agriculture (CSA): Strategies, obstacles, and visions for a sustainable future", img: "/assets/features/img-4-min.png" },
    { id: 4, title: "Mad4India’s Favorite 5 Organic Farming Startups In India That Will Make You Fall in Love with Green Living", img: "/assets/features/img-5-min.png" },
];

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FeaturesSection = () => {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = swiperRef.current;
            setProgress((1 / data.length) * 100);
            swiper.on("slideChange", () => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
                setProgress(((swiper.realIndex + 1) / data.length) * 100);
            });
        }
    }, []);

    return (
        <section className='bg-[#F6F9F3] py-10 px-6 lg:pb-20'>
            <div className="container mx-auto relative w-full overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div></div>
                    <div className="lg:col-span-4">
                        <motion.div
                            variants={fadeUpVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            className="w-full"
                        >
                            <h3 className="font-cronosSemiBold text-2xl lg:text-4xl !leading-20">
                                Features and spotlights
                            </h3>
                        </motion.div>
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            spaceBetween={20}
                            // slidesPerView={2.8}
                            loop={false}
                            breakpoints={{
                                0: { slidesPerView: 1 }, // Mobile (default) → 1 slide
                                768: { slidesPerView: 1 },
                                1024: { slidesPerView: 2 }, // iPad Pro → Still 1 slide
                                1280: { slidesPerView: 3 }, // Large screens (desktop) → 1.4 slides
                            }}
                            className="w-full mt-5 lg:mt-10"
                        >
                            {data.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative rounded-lg w-full ">
                                        <div>
                                            <div className="h-[270px] relative">
                                                <img src={review.img} className="h-full w-full rounded-2xl" alt="kheyti features" />
                                                <div className="absolute bottom-0 right-0 bg-white p-1 w-14 h-14 rounded-tl-xl rounded-br-xl">
                                                    <div className="h-full w-full flex items-center justify-center bg-primary400 rounded-lg rounded-br-2xl">
                                                        <ArrowUpIcon className="size-6 text-white rotate-45" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-[80%] mt-2 ">
                                                <p className="text-md lg:text-md text-left text-gray700 font-cronosRegular leading-5 lg:leading-5">{review.title}</p>
                                            </div>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="w-full flex items-center justify-between mt-5 lg:mt-10">
                            {/* Progress Bar */}
                            <div className="relative w-[65%] h-[3px] bg-gray500 overflow-hidden">
                                <div
                                    className="absolute left-0 h-[3px] bg-primary400 transition-all"
                                    style={{ width: `${Math.min(progress, 100)}%` }}
                                ></div>
                            </div>
                            {/* Prev/Next Buttons */}
                            <div className="flex items-center lg:ml-20 ml-3">
                                <button
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    disabled={isBeginning}
                                    className="mr-2 px-2 py-2 border bg-white text-primary rounded-xl disabled:opacity-50 hover:bg-primary400 hover:text-white"
                                >
                                    <ArrowLeftIcon className="size-5" />
                                </button>
                                <button
                                    onClick={() => swiperRef.current?.slideNext()}
                                    disabled={isEnd}
                                    className="ml-2 px-2 py-2 border bg-white text-primary rounded-xl disabled:opacity-50 hover:bg-primary400 hover:text-white"
                                >
                                    <ArrowRightIcon className="size-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
