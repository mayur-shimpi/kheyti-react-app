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
    <section className="py-20 bb-0">
      <div className="container mx-auto lg:max-w-6xl px-5">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="w-full lg:w-[65%]"
        >
          <h3 className="font-cronosRegular text-2xl lg:text-4xl !leading-20">
            A smart farming revolution that emerged by thinking inside the box
          </h3>
        </motion.div>

        {/* Animated Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-40 mt-10">
          {[0, 1].map((index) => (
            <motion.div
              key={index}
              variants={columnVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="text-justify text-xl text-black500 font-light"
            >
              {index === 0 ? (
                <>
                  <p className="leading-6">
                    Climate change has left India’s smallholder farmers more vulnerable than ever.
                    Their security and stability demand a more climate-sensitive approach to
                    agriculture.
                  </p>
                  <p className="leading-5 mt-5">
                    Kheyti’s{" "}
                    <span className="text-primary400 font-cronosRegular text-lg leading-6">
                      Greenhouse-in-a-Box
                    </span>{" "}
                    addresses climate change as the most{" "}
                    <span className="text-primary400 font-cronosRegular text-lg leading-6">
                      reliable and affordable
                    </span>{" "}
                    climate-smart farming ecosystem.
                  </p>
                </>
              ) : (
                <>
                  <p className="leading-6">
                    The modular greenhouse shields the crops against ongoing climate uncertainties
                    and maintains optimal growing conditions. It also comes with a complimentary
                    year-long{" "}
                    <span className="text-primary400 font-cronosRegular text-lg leading-6">
                      agri advisory support service
                    </span>
                    . With crop-specific recommendations, farmers make the right decisions
                    throughout.
                  </p>
                  <p className="leading-5 mt-5">
                    This holistic ecosystem ensures{" "}
                    <span className="text-primary400 font-cronosRegular text-lg leading-6">
                      protection
                    </span>{" "}
                    and{" "}
                    <span className="text-primary400 font-cronosRegular text-lg leading-6">
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
