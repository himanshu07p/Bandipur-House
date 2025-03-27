import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.2 } }
};

// Add new animation variants
const parallaxScroll = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const textReveal = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Contentrandom: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div 
      style={{ y: parallaxY }}
      initial="initial"
      animate="animate"
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto">
        {/* Header section */}
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-16 hover:scale-[1.01] transition-transform duration-300"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-navy-800 mb-4">About Bandipur House</h1>
          <div className="w-24 h-1 bg-navy-600 mx-auto mb-8"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Nurturing talent and fostering community within the IIT Madras BS Program
          </p>
        </motion.div>
        
        {/* First section - right image */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="flex flex-col md:flex-row items-center mb-24 hover:bg-white/50 rounded-xl transition-all duration-500"
        >
          <motion.div 
            variants={fadeInUp}
            className="md:w-1/2 p-8 md:pr-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-navy-800">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Bandipur House is named after Bandipur National Park, a tiger reserve under Project Tiger. True to our namesake, we nurture a diverse array of fauna (cultivated individuals) and boast an ethereal collection of flora (creativity).
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Much like the forest, we are in a constant state of motion, bustling with life and occupying new landscapes. We are an active community of aspiring data scientists and programmers honing our skills in the rigorous B.S. program at IIT Madras.
            </p>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="md:w-1/2 h-80 relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 animate-spin-slow reverse-spin silver-ring rounded-full"></div>
              <div className="absolute inset-[24px]">
                <div className="absolute inset-0 animate-spin-slow golden-ring rounded-full"></div>
                <div className="absolute inset-[12px] bg-gray-50 rounded-full flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <Image
                      src="/assets/logo.png"
                      alt="Bandipur House Logo"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Second section - Our Diversity with Map */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="flex flex-col md:flex-row-reverse items-center mb-24 hover:bg-white/50 rounded-xl transition-all duration-500"
        >
          <motion.div 
            variants={fadeInUp}
            className="md:w-1/2 p-8 md:pl-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-navy-800">Our Diversity</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our program continues to expand, now encompassing over 4000 students across 10 regions, including an International Region. Each region is overseen by a Regional Coordinator, ensuring seamless coordination and engagement.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With this evolution, our fraternity has grown stronger, fostering a diverse and interconnected community. The clubs and societies within the House remain integral to student groups, truly crossing geographical and cultural boundaries.
            </p>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="md:w-1/2 h-80 relative bg-navy-800/10 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/assets/map.png"
              alt="Bandipur House Regional Map"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>
        
        {/* Third section - right image */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="flex flex-col md:flex-row items-center hover:bg-white/50 rounded-xl transition-all duration-500"
        >
          <motion.div 
            variants={fadeInUp}
            className="md:w-1/2 p-8 md:pr-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-navy-800">Mission & Vision</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The mission of the house is to foster all that we harbor and nourish the best of us. We promote strong leadership and initiative with activities organized within the house.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our elected representatives are enablers of an ecosystem of harmonized excellence, in that initiatives are led by self-motivated individuals and their commitment & energy guide us to do better - Together.
            </p>
            <blockquote className="border-l-4 border-navy-600 pl-4 italic text-gray-600 mb-6">
              "Fostering excellence through collaborative leadership and empowering students to achieve their highest potential."
            </blockquote>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="md:w-1/2 h-80 relative bg-navy-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 z-10">
              <h3 className="text-3xl font-bold mb-6 text-center">Our Core Values</h3>
              <motion.div className="grid grid-cols-2 gap-6 w-full">
                {[
                  { 
                    title: "Collaboration", 
                    icon: "M9.5 12c0 .632-.002 1.142-.02 1.524-.02.399-.063.661-.125.844a1.5 1.5 0 01-.652.652c-.183.062-.445.105-.844.125-.382.018-.892.02-1.524.02h-2.67c-.632 0-1.142-.002-1.524-.02-.399-.02-.661-.063-.844-.125a1.5 1.5 0 01-.652-.652c-.062-.183-.105-.445-.125-.844C.502 13.142.5 12.632.5 12c0-.632.002-1.142.02-1.524.02-.399.063-.661.125-.844a1.5 1.5 0 01.652-.652c.183-.062.445-.105.844-.125C2.523 8.837 3.033 8.835 3.665 8.835h2.67c.632 0 1.142.002 1.524.02.399.02.661.063.844.125a1.5 1.5 0 01.652.652c.062.183.105.445.125.844.018.382.02.892.02 1.524zM13.25 12c0 .632-.002 1.142-.02 1.524-.02.399-.063.661-.125.844a1.5 1.5 0 01-.652.652c-.183.062-.445.105-.844.125-.382.018-.892.02-1.524.02h-2.67c-.632 0-1.142-.002-1.524-.02-.399-.02-.661-.063-.844-.125a1.5 1.5 0 01-.652-.652c-.062-.183-.105-.445-.125-.844-.018-.382-.02-.892-.02-1.524 0-.632.002-1.142.02-1.524.02-.399.063-.661.125-.844a1.5 1.5 0 01.652-.652c.183-.062.445-.105.844-.125.382-.018.892-.02 1.524-.02h2.67c.632 0 1.142.002 1.524.02.399.02.661.063.844.125a1.5 1.5 0 01.652.652c.062.183.105.445.125.844.018.382.02.892.02 1.524z"
                  },
                  { 
                    title: "Innovation", 
                    icon: "M12 6c0-1.657-4.03-3-9-3S3 4.343 3 6s4.03 3 9 3 9-1.343 9-3M3 6v6c0 1.657 4.03 3 9 3s9-1.343 9-3V6M12 6v6m-9 0c0 1.657 4.03 3 9 3s9-1.343 9-3"
                  },
                  { 
                    title: "Excellence", 
                    icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  },
                  { 
                    title: "Leadership", 
                    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center text-center group"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    >
                      <svg 
                        className="w-8 h-8 text-navy-800 group-hover:text-navy-600 transition-colors duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d={value.icon}
                        />
                      </svg>
                    </motion.div>
                    <span className="text-lg font-medium group-hover:text-white transition-colors duration-300">
                      {value.title}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contentrandom;
