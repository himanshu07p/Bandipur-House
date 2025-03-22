import { motion } from "framer-motion"
import Image from "next/image"

interface ContentCardProps {
  title: string
  content: string
  imageUrl: string
  reverse?: boolean
}

const ContentCard: React.FC<ContentCardProps> = ({ title, content, imageUrl, reverse = false }) => {
  return (
    <div className={`min-h-screen flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <motion.div
        className="md:w-1/2 h-[50vh] md:h-screen relative"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </motion.div>
      <motion.div
        className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white"
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-gray-600 leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {content}
        </motion.p>
      </motion.div>
    </div>
  )
}

export default ContentCard

