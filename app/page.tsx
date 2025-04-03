"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ContentSection from "@/components/ContentSection"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import Footer from "@/components/Footer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.2]);

  return (
    <ParallaxProvider>
      <main className="bg-white overflow-x-hidden" ref={containerRef}>
        <Navbar/>
        <Hero />
        
        <div className="relative">
          {/* Animated background elements */}
          <motion.div 
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
            style={{ opacity: bgOpacity }}
          >
            <div className="absolute w-full h-full bg-pattern opacity-10"></div>
          </motion.div>
          
          {/* Animated decorative elements */}
          <motion.div 
            className="hidden md:block absolute top-40 left-0 w-64 h-64 bg-amber-100 rounded-full opacity-30 -z-10 blur-3xl"
            animate={{ 
              x: [0, 20, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
          
          <motion.div 
            className="hidden md:block absolute top-96 right-10 w-80 h-80 bg-blue-100 rounded-full opacity-40 -z-10 blur-3xl"
            animate={{ 
              x: [0, -30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          ></motion.div>
          
          <div id="about-section">
            <ContentSection
              title="About Bandipur House"
              content="Bandipur House is named after Bandipur National Park, a tiger reserve under Project Tiger. True to our namesake, we nurture a diverse array of fauna (cultivated individuals) and boast an ethereal collection of flora (creativity). Much like the forest, we are in a constant state of motion, bustling with life and occupying new landscapes. We are an active community of aspiring data scientists and programmers honing our skills in the rigorous B.S. program at IIT Madras."
              imageUrl="https://i.ytimg.com/vi/mxEfII2q98A/maxresdefault.jpg"
              bgColor="bg-white"
              animationDirection="left"
            />
          </div>
          
          <Parallax speed={-5} className="py-10">
            <div className="container mx-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="flex justify-center"
              >
                <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </motion.div>
            </div>
          </Parallax>
          
          <ContentSection
            title="Our Diversity"
            content="Our program continues to expand, now encompassing over 4000 students across 10 regions, including an International Region. Each region is overseen by a Regional Coordinator, ensuring seamless coordination and engagement.
            With this evolution, our fraternity has grown stronger, fostering a diverse and interconnected community. The clubs and societies within the House remain integral to student groups, truly crossing geographical and cultural boundaries. While others may claim outreach, we embody it—spanning across the nation and beyond with an inclusive and dynamic presence.The International Region actively hosts meetups and activities, further strengthening our global connections and fostering a vibrant exchange of ideas."
            imageUrl="https://organikos.net/wp-content/uploads/2014/01/601900_526219520770457_559699340_n.jpg"
            reverse={true}
            bgColor="bg-gray-50"
            animationDirection="right"
          />
          
          <Parallax speed={-5} className="py-10">
            <div className="container mx-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="flex justify-center"
              >
                <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              </motion.div>
            </div>
          </Parallax>
          
          <ContentSection
            title="Mission & Vision"
            content="The mission of the house is to foster all that we harbor and nourish the best of us. We promote strong leadership and initiative with activities organized within the house. Our elected representatives are enablers of an ecosystem of harmonized excellence, in that initiatives are led by self motivated individuals and their commitment & energy guide us to do better- Together."
            imageUrl="https://www.newindian.in/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-31-at-3.58.12-PM.jpeg"
            bgColor="bg-white"
            animationDirection="left"
          />
        </div>
        
        <ScrollToTopButton />
        <Footer/>
      </main>
    </ParallaxProvider>
  )
}

