import { motion } from "framer-motion";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: index * 0.2 },
  }),
};

const FarmingResolutionSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
        {/* Title Section */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full lg:w-2/3"
        >
          <h3 className="font-cronosRegular text-3xl md:text-3xl lg:text-4xl leading-9 xl:leading-10 text-center md:text-left">
            A smart farming revolution that emerged by thinking inside the box
          </h3>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-40 mt-10">
          {[0, 1].map((index) => (
            <motion.div
              key={index}
              variants={columnVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="text-lg md:text-xl text-black500 font-cronosLight text-justify"
            >
              {index === 0 ? (
                <>
                  <p className="leading-7">
                    Climate change has left India’s smallholder farmers more vulnerable than ever.
                    Their security and stability demand a more climate-sensitive approach to
                    agriculture.
                  </p>
                  <p className="leading-7 mt-4">
                    Kheyti’s{" "}
                    <span className="text-primary400 font-cronosRegular text-lg md:text-xl">
                      Greenhouse-in-a-Box
                    </span>{" "}
                    addresses climate change as the most{" "}
                    <span className="text-primary400 font-cronosRegular text-lg md:text-xl">
                      reliable and affordable
                    </span>{" "}
                    climate-smart farming ecosystem.
                  </p>
                </>
              ) : (
                <>
                  <p className="leading-7">
                    The modular greenhouse shields the crops against ongoing climate uncertainties
                    and maintains optimal growing conditions. It also comes with a complimentary
                    year-long{" "}
                    <span className="text-primary400 font-cronosRegular text-lg md:text-xl">
                      agri advisory support service
                    </span>
                    .
                  </p>
                  <p className="leading-7 mt-4">
                    This holistic ecosystem ensures{" "}
                    <span className="text-primary400 font-cronosRegular text-lg md:text-xl">
                      protection
                    </span>{" "}
                    and{" "}
                    <span className="text-primary400 font-cronosRegular text-lg md:text-xl">
                      profitability
                    </span>{" "}
                    for farmers by delivering high-quality, bountiful yields and long-term climate
                    resilience.
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmingResolutionSection;
