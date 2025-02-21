import { motion } from "framer-motion";
import { PrimaryButton } from "../../buttons";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const GetInTouchSection = () => {
    return (
        <section className="relative py-20 h-screen bg-[url(/assets/landing/get-in-touch-bg.png)] bg-no-repeat bg-cover bg-bottom">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-[-0]"
                src="/assets/videos/get-in-touch.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute inset-0 flex items-center justify-center  bg-gradient-to-b from-[#F6F9F3] to-transparent bg-opacity-50 text-white text-center px-6">

            </div>
            <div className="w-full absolute top-0 left-0 z-9">
            <div className="container mx-auto px-5 lg:px-40 z-9">
                <motion.div
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full "
                >
                    <h3 className="text-center font-semibold text-3xl lg:text-4xl !leading-20">
                        Get In Touch
                    </h3>
                </motion.div>
                <div className="mt-20 mx-auto max-w-2xl ">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <input type="text" placeholder="First Name" className="w-full bg-white text-black500 py-3 lg:py-4 px-3 rounded-xl border border-gray500 placeholder-black500 focus:outline-primary400" />
                        </div>
                        <div>
                            <input type="text" placeholder="Last Name" className="w-full bg-white text-black500 py-3 lg:py-4 px-3 rounded-xl border border-gray500 placeholder-black500 focus:outline-primary400" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" className="w-full bg-white text-black500 py-3 lg:py-4 px-3 rounded-xl border border-gray500 placeholder-black500 focus:outline-primary400" />
                        </div>
                        <div>
                            <input type="number" placeholder="Contact Number" className="w-full bg-white text-black500 py-3 lg:py-4 px-3 rounded-xl border border-gray500 placeholder-black500 focus:outline-primary400" />
                        </div>
                        <div className="col-span-2">
                            <input type="text" placeholder="Subject" className="w-full bg-white text-black500 py-3 lg:py-4 px-3 rounded-xl border border-gray500 placeholder-black500 focus:outline-primary400" />
                        </div>
                        <div className="col-span-2">
                            <textarea rows={5} placeholder="Message" className="w-full bg-white text-black500 py-3 lg:py-4 px-3 rounded-xl border border-gray500 placeholder-black500 focus:outline-primary400"></textarea>
                        </div>
                    </div>
                    <div className="mt-7">
                        <PrimaryButton name="Submit"/>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default GetInTouchSection;
