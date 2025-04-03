import { motion } from "framer-motion"
import Image from "next/image"

interface ContentSectionProps {
  title: string
  content: string
  imageUrl: string
  reverse?: boolean
  animationDirection?: "left" | "right"
  bgColor?: string
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  title, 
  content, 
  imageUrl, 
  reverse = false,
  animationDirection,
  bgColor = "bg-white"
}) => {
  // Enhanced animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0
    },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      x: animationDirection === "left" ? -20 : animationDirection === "right" ? 20 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleChars = title.split("");

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto">
        <motion.div 
          className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="w-full md:w-1/2" variants={itemVariants}>
            <div className="relative overflow-hidden rounded-lg">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "tween", duration: 0.5 }}
              >
                <Image 
                  src={imageUrl} 
                  alt={title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="w-full md:w-1/2">
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold mb-8 relative"
              variants={itemVariants}
            >
              <div className="overflow-hidden inline-block">
                <div className="flex">
                  {titleChars.map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: 30 }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.03 * index,
                        ease: "easeOut"
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
              </div>
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-amber-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              ></motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 leading-relaxed"
              variants={itemVariants}
            >
              {content}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContentSection

