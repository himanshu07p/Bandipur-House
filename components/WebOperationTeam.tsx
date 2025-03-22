"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  { 
    name: "Aadarsh Maurya", 
    role: "Web Developer", 
    image: "/assets/Aadarsh Maurya -Web developer.jpg",
    tagline: "Turning complex problems into elegant code solutions with passion and precision."
  },
  { 
    name: "Nidhi Tiwari", 
    role: "Social Media Manager", 
    image: "/assets/Nidhi_Tiwari_Social_media_manager.jpg",
    tagline: "Crafting engaging stories and building vibrant online communities across platforms."
  },
  { 
    name: "Srilekha Dendukuri", 
    role: "Content Writer", 
    image: "/assets/Srilekha Dendukuri.jpg",
    tagline: "Weaving words that inspire, inform, and create meaningful connections with our audience."
  },
  { 
    name: "Titiksha Agarwal", 
    role: "Research & Content Lead", 
    image: "/assets/Titiksha Agarwal- Research & content lead.jpg",
    tagline: "Diving deep into data to uncover insights that drive our content strategy and direction."
  },
  { 
    name: "Victor Adhikary", 
    role: "Web Developer", 
    image: "/assets/Victor_adhikari -web_developer.jpg",
    tagline: "Creating seamless user experiences through innovative front-end development."
  },
];

// Container variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

// Item variants for smoother animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export default function WebOps() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-t from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 pb-2 leading-relaxed"
        >
          WebOps Team
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden"
              style={{ minHeight: '380px' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="p-6 flex flex-col items-center"
              >
                <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                    priority={index < 3} 
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="text-center"
                    >
                      <p className="text-sm text-gray-300">
                        {member.tagline}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

