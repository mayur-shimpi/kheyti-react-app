
const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden text-center">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                poster="/assets/landing/hero-preview.png"
                src="/assets/videos/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-[#00000078] bg-opacity-50 bg-opacity-50 text-white text-center px-6">

            </div>
            <h1 className="w-full absolute mx-auto bottom-[150px] lg:bottom-28 font-cronosExtraLight font-normal text-white text-2xl md:text-5xl mt-4 leading-2 lg:!leading-[55px] z-10">
                Ushering smallholder farmers to a secure, <br /> <span className="font-cronosMedium">profitable and climate-smart future.</span>
            </h1>
        </section>
    );
};

export default Hero;
