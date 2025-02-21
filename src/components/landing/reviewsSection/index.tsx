import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const reviews = [
    {
        title: "We have been farming for 35-40 years. Usually we plant rice, cotton, and chilli. Most of the time we plant chilli crop. Last year, we planted a 100 packets of chilli seeds. But due to untimely rains, our entire farm was destroyed. That's why last year we bought a Kheyti greenhouse.",
        author: "Paadi Jyothi",
        text: "We planted 70 packets of chilli seeds inside, and the growth is very good. We also planted 10 packets of chilli seeds outside, but those were damaged. Kheyti's services are also very good, they come once a week, and are available on phone, too. If I have any doubts, I send videos them of the crops and they advise me with a voice message on what to apply. The greenhouse has been very helpful to us.",
        img: "/assets/reviews/review-1-min.png"
    },
    {
        title: "We have been farming for 35-40 years. Usually we plant rice, cotton, and chilli. Most of the time we plant chilli crop. Last year, we planted a 100 packets of chilli seeds. But due to untimely rains, our entire farm was destroyed. That's why last year we bought a Kheyti greenhouse.",
        author: "Paadi Jyothi",
        text: "We planted 70 packets of chilli seeds inside, and the growth is very good. We also planted 10 packets of chilli seeds outside, but those were damaged. Kheyti's services are also very good, they come once a week, and are available on phone, too. If I have any doubts, I send videos them of the crops and they advise me with a voice message on what to apply. The greenhouse has been very helpful to us.",
        img: "/assets/reviews/review-1-min.png"
    },
    {
        title: "We have been farming for 35-40 years. Usually we plant rice, cotton, and chilli. Most of the time we plant chilli crop. Last year, we planted a 100 packets of chilli seeds. But due to untimely rains, our entire farm was destroyed. That's why last year we bought a Kheyti greenhouse.",
        author: "Paadi Jyothi",
        text: "We planted 70 packets of chilli seeds inside, and the growth is very good. We also planted 10 packets of chilli seeds outside, but those were damaged. Kheyti's services are also very good, they come once a week, and are available on phone, too. If I have any doubts, I send videos them of the crops and they advise me with a voice message on what to apply. The greenhouse has been very helpful to us.",
        img: "/assets/reviews/review-1-min.png"
    },
    {
        title: "We have been farming for 35-40 years. Usually we plant rice, cotton, and chilli. Most of the time we plant chilli crop. Last year, we planted a 100 packets of chilli seeds. But due to untimely rains, our entire farm was destroyed. That's why last year we bought a Kheyti greenhouse.",
        author: "Paadi Jyothi",
        text: "We planted 70 packets of chilli seeds inside, and the growth is very good. We also planted 10 packets of chilli seeds outside, but those were damaged. Kheyti's services are also very good, they come once a week, and are available on phone, too. If I have any doubts, I send videos them of the crops and they advise me with a voice message on what to apply. The greenhouse has been very helpful to us.",
        img: "/assets/reviews/review-1-min.png"
    },
]

const ReviewsSlider = () => {

    return (
        <div className="relative w-full overflow-hidden ">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1.4}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                    1024: { slidesPerView: 1.4 },
                }}
                className="w-full"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid grid-cols-2 bg-white rounded-lg shadow-sm border border-gray300 w-full ">
                            <div>
                                <img src={review.img} className="h-full rounded-lg" alt="kheyti review" />
                            </div>
                            <div className="p-5 py-16 relative lg:w-[80%]">
                                <img src="/assets/reviews/icon.png" className="w-20 h-16 absolute top-10 left-[-30px]" alt="kheyti review" />
                                <div className="pl-5">
                                <p className="text-sm font-semibold leading-5">{review.title}</p>
                                <p className="text-xs text-gray600 font-medium mt-2">{review.text}</p>
                                <p className="mt-4 text-left font-bold">- {review.author}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ReviewsSlider;
