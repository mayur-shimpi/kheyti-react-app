import { FC, useState } from "react";
import { motion } from "framer-motion";
import PlayButton from "../../../icons/PlayButton";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ActiveIndexProps {
  activeIndex: number;
}

const visionImages = [
  "/assets/our-vision/our-vision-1-min.png",
  "/assets/our-vision/our-vision-2-min.png",
  "/assets/our-vision/our-vision-3-min.png",
  "/assets/our-vision/our-vision-4-min.png",
  "/assets/our-vision/our-vision-5-min.png",
];

const visionVideos = [
  "/assets/videos/hero.mp4",
  "/assets/videos/hero.mp4",
  "/assets/videos/hero.mp4",
  "/assets/videos/hero.mp4",
  "/assets/videos/hero.mp4",
];

const animationVariants = (delay: number) => ({
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: delay, ease: "easeOut" } },
});

const VisionImage: FC<{
  src: string;
  size: string;
  extraClasses?: string;
  showPlayButton?: boolean;
  isPlaying?: boolean;
  onPlay?: () => void;
  onClose?: () => void;
  videoSrc?: string;
}> = ({
  src,
  size,
  extraClasses = "",
  showPlayButton = false,
  isPlaying,
  onPlay,
  onClose,
  videoSrc,
}) => (
  <div className={`relative ${size} flex justify-center items-center ${extraClasses}`}>
    {isPlaying && videoSrc ? (
      <div className="relative w-full h-full flex justify-center items-center">
        <video className="mx-auto h-full" controls autoPlay>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
          onClick={onClose}
        >
          <XMarkIcon className="text-white bg-primary size-8 rounded-full p-1" />
        </button>
      </div>
    ) : (
      <>
        <img src={src} alt="Our Vision" className="mx-auto h-full" />
        {showPlayButton && (
          <PlayButton
            className="size-20 absolute text-white rounded-full p-1 pt-2 z-[999] cursor-pointer hover:bg-primary"
            onClick={onPlay}
          />
        )}
      </>
    )}
  </div>
);

const Tab1: FC<ActiveIndexProps> = ({ activeIndex }) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    setPlayingIndex((prev) => (prev === index ? null : index)); // Toggle video play state
  };

  const handleClose = () => {
    setPlayingIndex(null);
  };

  return (
    <div className="relative h-[400px] flex items-center justify-center">
      {[0.1, 0.2, 0.3, 0.5, 0.6].map((delay, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={animationVariants(delay)}
          className={`absolute ${
            index === 0
              ? "left-10"
              : index === 1
              ? "left-40 z-5"
              : index === 2
              ? "left-auto z-5"
              : index === 3
              ? "right-40 z-[-1]"
              : "right-10 z-[-10]"
          }`}
        >
          <VisionImage
            src={visionImages[(activeIndex + index) % visionImages.length]}
            size={["h-[250px]", "h-[350px]", "h-[450px]", "h-[350px]", "h-[250px]"][index]}
            showPlayButton={index === 2}
            isPlaying={playingIndex === activeIndex && index === 2}
            onPlay={() => handlePlay(activeIndex)}
            onClose={handleClose}
            videoSrc={visionVideos[activeIndex]}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Tab1;
