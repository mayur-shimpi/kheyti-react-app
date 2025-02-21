const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden text-center">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://s3-figma-videos-production-sig.figma.com/video/1427644921295469162/TEAM/ac07/589f/-3105-4bcf-bba2-55b3eb98c6b5?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Y~eiWwQZ~es8mAvrp6cQ6OU8lYQi8fTzutL~llIp71JV3Pv7GMzQ3XLWM8lHG~SRmUoxrRKbVq4~Pxgnhw55QVZ-3F~bDNaAFUlGiidD2w6lGpGsP9uiHO9uHUg~xaLjc4m-f7Zjro0yW~YRpfbSfOs-D9alKJo0fqQB~Qi-XhCAArgYdlAZXd58tY91Iz7y6de0DbO8uR5aPMwixfLAYSkiT-3vMsfjYKbygA~F~s6u1L1mF03lFLn~MoE6ZfL8jlPrm-PSoaFagNUkSv3t6zd6I~HYsN4RPyp5Xds6y7XAEaKxb-PsTZoGxxXVKTMRL~kFNLo9~g~WvgNlXcRE4A__"
                autoPlay
                loop
                muted
                playsInline
            />

            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-[#00000078] bg-opacity-50 bg-opacity-50 text-white text-center px-6">

            </div>
            <h1 className="w-full absolute mx-auto bottom-28 font-cronosExtraLight font-normal text-white text-3xl md:text-5xl mt-4 leading-2 lg:!leading-[55px] z-10">
                Ushering smallholder farmers to a secure, <br /> <span className="font-cronosMedium">profitable and climate-smart future.</span>
            </h1>
        </section>
    );
};

export default Hero;
