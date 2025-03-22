"use client";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import VideoBackground from "./VideoBackground";

export default function Chero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <VideoBackground
        videoSrc="./assets/crew.mp4"
        overlayOpacity={0.5}
        visibleOverlayOpacity={0.3}
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1], 
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-black/50 opacity-50"
          style={{ zIndex: 1 }}
        />

        {/* Content - Keep exact positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 10 }}
        >
          <div>
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            >
              <TypeAnimation
                sequence={[
                  "Meet Our Exceptional Team",
                  1000,
                  "Discover Our Talents",
                  1000,
                  "Explore Our Expertise",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl mb-8 text-gray-300"
            >
              Dedicated professionals driving innovation and success
            </motion.p>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                to="top-council"
                smooth={true}
                duration={500}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition duration-300 cursor-pointer inline-block relative overflow-hidden group"
              >
                <span className="relative z-10">Discover Our Team</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </VideoBackground>
    </section>
  );
}
