import { motion } from "framer-motion";

const Tab2 = () => {
    const fadeUpZoomInVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        },
    };
    return (
        <div className='text-center'>
            <div className='grid grid-cols-1 lg:grid-cols-3 items-center'>
                <div className='text-center col-span-2'>
                <motion.div
                        variants={fadeUpZoomInVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full "
                    >
                        <img src="/assets/svg/greenhouse-box-state-2.svg" alt="Greenhouse Box" className="mx-auto w-[70%] lg:w-[65%]" />
                    </motion.div>
                </div>
                <div className='flex justify-center mt-10 lg:mt-0'>
                    <ul className='text-left w-[80%] lg:w-full justify-content-center lg:justify-content-left p-0'>
                        <li className='flex items-start mb-5'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>Knowledge sharing on greenhouses</span>
                        </li>
                        <li className='flex items-start mb-5'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>New crop research and development</span>
                        </li>
                        <li className='flex items-start'>
                            <img src="/assets/svg/green-checkmark.svg" alt="Green House Box" className="size-7 mr-2" />
                            <span className='font-cronosLight text-lg leading-5'>Educating about new methods and practices</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tab2