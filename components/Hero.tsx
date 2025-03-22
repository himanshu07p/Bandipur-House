import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import VideoBackground from "./VideoBackground";

const Hero = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById("about-section");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <VideoBackground
        videoSrc="./assets/tiger.mp4"
        overlayColor="black"
        overlayOpacity={0.5}
        visibleOverlayOpacity={0.3}
        playbackRate={0.75}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Add centered logo */}
            <motion.img
              src="./assets/logo.png"
              alt="Logo"
              className="w-24 h-24 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            {/* Heading */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to Bandipur House
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl font-sans text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              IIT Madras
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={scrollToContent}
                className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300"
              >
                Discover More
              </button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <ArrowDown className="text-white" size={32} />
        </motion.div>
      </VideoBackground>
    </div>
  );
};

export default Hero;
