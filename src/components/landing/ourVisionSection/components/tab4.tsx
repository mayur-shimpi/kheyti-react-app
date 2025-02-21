import { motion } from "framer-motion";

const slideLeftVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Tab4 = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='h-[200px]'>
                <img src='/assets/our-vision/our-vision-4-min.png' alt="Our Vision" className='mx-auto h-full' />
            </div>
            <div className='h-[300px]'>
                <img src='/assets/our-vision/our-vision-5-min.png' alt="Our Vision" className='mx-auto h-full' />
            </div>
            <motion.div
                 initial="hidden" 
                 whileInView="visible" 
                 viewport={{ once: true, amount: 0.2 }}
                 variants={slideLeftVariants}
                className="h-[400px]"
            >
                <img src='/assets/our-vision/our-vision-1-min.png' alt="Our Vision" className='mx-auto h-full' />
            </motion.div>
            <div className='h-[300px]'>
                <img src='/assets/our-vision/our-vision-2-min.png' alt="Our Vision" className='mx-auto h-full' />
            </div>
            <div className='h-[200px]'>
                <img src='/assets/our-vision/our-vision-3-min.png' alt="Our Vision" className='mx-auto h-full' />
            </div>
        </div>
    )
}

export default Tab4