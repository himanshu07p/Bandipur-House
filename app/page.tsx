"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ContentSection from "@/components/ContentSection"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import { ParallaxProvider } from "react-scroll-parallax"
import Footer from "@/components/Footer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.2]);
  const rotateBackground = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const moveUpElements = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scaleHeroElements = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  // Add state for screen width to handle window object safely
  const [screenWidth, setScreenWidth] = useState(1000); // Default fallback value

  // Set up window width detection on the client side only
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    
    // Initial value
    setScreenWidth(window.innerWidth);
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ParallaxProvider>
      <main className="bg-gradient-to-b from-gray-50 via-white to-blue-50 overflow-x-hidden" ref={containerRef}>
        {/* Background styling elements */}
        <div className="fixed inset-0 bg-[url('/assets/noise.png')] opacity-[0.02] pointer-events-none z-10"></div>
        
        {/* Grid pattern */}
        <div className="fixed inset-0 bg-[url('/assets/grid.svg')] bg-repeat opacity-[0.03] pointer-events-none z-5"></div>
        
        {/* Radial gradient background */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(219,234,254,0.3)_0%,transparent_70%)] pointer-events-none z-0"></div>
        
        {/* Vertical lines background */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05]">
          <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-800 to-transparent"></div>
          <div className="absolute left-2/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-800 to-transparent"></div>
          <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-800 to-transparent"></div>
        </div>
        
        {/* NEW: Animated Floating Elements */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-900/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                opacity: [0.1, Math.random() * 0.3 + 0.1, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
        
        <Navbar/>
        <Hero />
        
        {/* Diagonal divider with enhanced styling */}
        <div className="relative h-32 md:h-48 -mt-16">
          <div className="absolute w-full h-full bg-white skew-y-3 transform origin-top-right shadow-sm"></div>
          <div className="absolute w-full h-full bg-blue-50 skew-y-3 transform origin-top-right opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        </div>
        
        <div className="relative pt-20 pb-32">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <svg className="absolute left-0 w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dotPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="rgba(30, 58, 138, 0.2)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>
          </div>
          
          {/* Floating decorative elements */}
          <motion.div 
            className="hidden lg:block absolute top-[20%] right-[5%] w-96 h-96 rounded-full opacity-20 -z-10"
            style={{
              background: "radial-gradient(circle, rgba(30,58,138,0.3) 0%, rgba(30,58,138,0) 70%)"
            }}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.25, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div
            className="absolute top-[10%] left-[5%] w-72 h-72 -z-10"
            style={{
              background: "linear-gradient(135deg, rgba(30,58,138,0.1) 0%, rgba(30,58,138,0.2) 100%)",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
            }}
            animate={{
              borderRadius: [
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 70% 70% 30% / 30% 30% 70% 70%"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* NEW: Abstract floating geometric shapes */}
          <motion.div
            className="absolute bottom-[20%] right-[15%] w-24 h-24 opacity-20 -z-10"
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(30,58,138,0.3) 100%)",
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
            }}
            animate={{
              rotate: [0, 15, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
          
          <motion.div
            className="absolute top-[40%] left-[25%] w-16 h-16 rounded-full bg-blue-200 opacity-15 -z-10"
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
          />
          
          <motion.div
            className="absolute top-[60%] right-[20%] w-40 h-40 opacity-10 -z-10"
            style={{
              background: "linear-gradient(135deg, rgba(79,70,229,0.2) 0%, rgba(59,130,246,0.3) 100%)",
              clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)"
            }}
            animate={{
              rotate: [0, -15, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          />
          
          {/* NEW: Wave pattern */}
          <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 -z-10 overflow-hidden">
            <motion.div
              className="absolute bottom-[-10px] left-0 w-[200%] h-32"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(30,58,138,0.2) 50%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, transparent, black)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black)"
              }}
              animate={{
                x: [0, -screenWidth, 0], // Use the state variable instead of direct window access
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Main content area with angled sections */}
          <div className="container mx-auto relative z-10">
            {/* Intro section with rotating 3D card */}
            <div className="mb-20 md:mb-32 px-4 relative overflow-hidden">
              <motion.div 
                className="relative bg-white p-8 md:p-12 rounded-2xl overflow-hidden border border-blue-200 shadow-[0_10px_50px_rgba(30,58,138,0.1)]"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ 
                  boxShadow: "0 20px 60px rgba(30,58,138,0.15)", 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Decorative card elements */}
                <motion.div 
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 opacity-60"
                  animate={{ 
                    x: [0, 10, 0],
                    y: [0, 10, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                
                {/* NEW: Additional card decorations */}
                <motion.div 
                  className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-gradient-to-tr from-blue-50 to-blue-100 opacity-40"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                
                <div className="absolute right-10 top-10">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-100">
                    <rect x="0" y="0" width="16" height="16" fill="currentColor" />
                    <rect x="24" y="0" width="16" height="16" fill="currentColor" />
                    <rect x="0" y="24" width="16" height="16" fill="currentColor" />
                    <rect x="24" y="24" width="16" height="16" fill="currentColor" />
                  </svg>
                </div>
                
                <div className="text-center max-w-3xl mx-auto">
                  <div className="inline-block mb-3 px-4 py-1 bg-blue-50 text-blue-900 rounded-full text-sm font-medium tracking-wide">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-800 mr-2 relative top-[-1px]"></span>
                    Nurturing Excellence
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900 tracking-tight">
                    Welcome to <span className="text-blue-900">Bandipur</span> House
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg md:text-xl mb-10">
                    Discover the spirit of innovation, diversity, and excellence that defines our unique community and shapes tomorrow's leaders.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <motion.a 
                      href="#about" 
                      className="px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-full transition-all shadow-md hover:shadow-lg"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px -5px rgba(30, 58, 138, 0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore
                    </motion.a>
                    <motion.a 
                      href="#mission" 
                      className="px-8 py-3 bg-white text-blue-900 font-medium rounded-full border border-blue-200 transition-all shadow-sm hover:shadow-md"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px -10px rgba(30, 58, 138, 0.25)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Our Mission
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Section 1: About Bandipur House with diagonal layout */}
            <div id="about" className="mb-32 relative">
              <div className="absolute left-0 top-1/3 w-screen h-[300px] bg-blue-50 -z-5 transform -rotate-3 -translate-x-16"></div>
              
              {/* NEW: Small floating dots */}
              <motion.div 
                className="absolute top-40 left-10 w-6 h-6 rounded-full bg-blue-200 opacity-40 z-0"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-20 right-10 w-4 h-4 rounded-full bg-blue-300 opacity-30 z-0"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative z-10 px-4">
                <ContentSection
                  title="About Bandipur House"
                  content="Bandipur House is named after Bandipur National Park, a tiger reserve under Project Tiger. True to our namesake, we nurture a diverse array of fauna (cultivated individuals) and boast an ethereal collection of flora (creativity). Much like the forest, we are in a constant state of motion, bustling with life and occupying new landscapes."
                  position="center"
                />
              </div>
            </div>
            
            {/* Section 2: Our Diversity */}
            <div className="mb-32 relative">
              <div className="absolute -right-20 top-1/3 w-56 h-56 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
              
              {/* NEW: Line decoration */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 h-16 w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-50"
                animate={{ 
                  height: [40, 80, 40],
                  opacity: [0.3, 0.5, 0.3]  
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* NEW: Dashed circle */}
              <svg className="absolute -right-20 top-20 w-40 h-40 opacity-10 -z-10" viewBox="0 0 100 100">
                <circle
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="rgba(30, 58, 138, 0.3)" 
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>
              
              <div className="relative z-10 px-4">
                <ContentSection
                  title="Our Diversity"
                  content="Our program continues to expand, now encompassing over 4000 students across 10 regions, including an International Region. Each region is overseen by a Regional Coordinator, ensuring seamless coordination and engagement. With this evolution, our fraternity has grown stronger, fostering a diverse and interconnected community."
                  position="center"
                />
              </div>
            </div>
            
            {/* Section 3: Mission & Vision with highlights */}
            <div id="mission" className="mb-16 relative">
              <div className="absolute right-0 top-1/3 w-screen h-[300px] bg-gradient-to-r from-blue-50/0 to-blue-100/30 -z-5 transform rotate-3 translate-x-16"></div>
              <div className="relative z-10">
                <ContentSection
                  title="Mission & Vision"
                  content="The mission of the house is to foster all that we harbor and nourish the best of us. We promote strong leadership and initiative with activities organized within the house. Our elected representatives are enablers of an ecosystem of harmonized excellence, in that initiatives are led by self motivated individuals and their commitment & energy guide us to do better- Together."
                  position="center"
                />
                
                <motion.div 
                  className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  {["Leadership", "Innovation", "Excellence"].map((item, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white p-6 rounded-xl border border-blue-100 shadow-lg transition-all relative overflow-hidden"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                      whileHover={{ 
                        y: -10,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {/* NEW: Animated particle effects on hover */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                        whileHover={{ opacity: 1 }}
                      >
                        {Array.from({ length: 10 }).map((_, j) => (
                          <motion.div
                            key={j}
                            className="absolute w-1 h-1 rounded-full bg-blue-500/20"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                              opacity: [0, 0.5, 0],
                              scale: [0, 1, 0],
                              x: [0, (Math.random() - 0.5) * 100],
                              y: [0, (Math.random() - 0.5) * 100],
                              transition: {
                                duration: 1 + Math.random(),
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeOut",
                                delay: Math.random() * 2,
                              }
                            }}
                            style={{
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                            }}
                          />
                        ))}
                      </motion.div>

                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 relative">
                        <span className="text-blue-600 text-xl font-bold">{i+1}</span>
                        
                        {/* NEW: Animated ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.1, 0.3]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item}</h3>
                      <p className="text-gray-600">
                        Our commitment to {item.toLowerCase()} shapes every aspect of our community, driving us to reach greater heights together.
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            
            {/* Stats Section with enhanced animation */}
            <motion.div 
              className="container mx-auto mt-24 mb-16 px-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl shadow-xl text-white">
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />
                  </svg>
                </div>
                
                {/* NEW: Animated particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-white"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.3 + 0.1,
                      }}
                      animate={{
                        y: [0, Math.random() * 30 - 15],
                        x: [0, Math.random() * 30 - 15],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
                  {[[4000, "Students"], [10, "Regions"], [1, "Community"]].map(([value, label], i) => (
                    <div key={i} className="text-center p-8 md:p-12 relative overflow-hidden">
                      <div className="relative z-10">
                        <motion.h3 
                          className="text-6xl md:text-7xl font-bold mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.6 }}
                        >
                          {value}{value === 4000 ? <span className="text-white/80">+</span> : ""}
                        </motion.h3>
                        <motion.p 
                          className="text-white/90 uppercase tracking-wide text-sm font-medium"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                        >
                          {label}
                        </motion.p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <ScrollToTopButton />
        <Footer/>
      </main>
    </ParallaxProvider>
  )
}

