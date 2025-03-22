import ContentCard from "@/components/ContentCard"
import { motion } from "framer-motion"

interface ContentSectionProps {
  title: string
  content: string
  imageUrl: string
  reverse?: boolean
  animationDirection?: "left" | "right"
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  title, 
  content, 
  imageUrl, 
  reverse = false,
  animationDirection
}) => {
  const animationProps = animationDirection ? {
    initial: { 
      opacity: 0, 
      x: animationDirection === "left" ? -50 : 50 
    },
    whileInView: { 
      opacity: 1, 
      x: 0 
    },
    viewport: { once: true },
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  } : {};

  return (
    <section className="w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"> {/* Removed container class */}
      <motion.div {...animationProps}>
        <ContentCard title={title} content={content} imageUrl={imageUrl} reverse={reverse} />
      </motion.div>
    </section>
  )
}

export default ContentSection

