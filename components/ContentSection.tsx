import { motion } from "framer-motion";

interface ContentSectionProps {
  title: string;
  content: string;
  position: "top" | "left" | "right" | "center";
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content, position }) => {
  return (
    <div className="container mx-auto">
      <div className="md:w-3/4 lg:w-2/3 relative mx-auto">
        {/* NEW: Small decorative accent dots */}
        <motion.div
          className="absolute -left-4 top-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-70 hidden md:block"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute -right-4 top-1/3 w-2 h-2 bg-blue-300 rounded-full opacity-60 hidden md:block"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        
        <motion.div
          className="p-8 md:p-12 rounded-2xl bg-white shadow-xl relative overflow-hidden backdrop-blur-sm border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            boxShadow: "0 20px 60px rgba(30, 58, 138, 0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-blue-900"></span>
          
          {/* Abstract decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full -z-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-50 rounded-tr-full -z-10"></div>
          
          {/* NEW: Enhanced decorative elements */}
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 overflow-hidden pointer-events-none">
            <svg className="absolute bottom-0 right-0" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="50" fill="rgba(30, 58, 138, 0.3)" />
              <circle cx="100" cy="100" r="35" fill="rgba(30, 58, 138, 0.2)" />
              <circle cx="100" cy="100" r="20" fill="rgba(30, 58, 138, 0.1)" />
            </svg>
          </div>
          
          <div className="absolute top-10 left-10 opacity-10 pointer-events-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="rgba(30, 58, 138, 0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17l5-5-5-5" stroke="rgba(30, 58, 138, 0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12H9" stroke="rgba(30, 58, 138, 0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* NEW: Dotted grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array(12).fill(0).map((_, colIndex) => (
                Array(12).fill(0).map((_, rowIndex) => (
                  <div key={`${colIndex}-${rowIndex}`} className="w-1 h-1 rounded-full bg-blue-800"></div>
                ))
              ))}
            </div>
          </div>
          
          {/* NEW: Enhanced animated background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <motion.div 
              className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(30,58,138,0.1)_25%,rgba(30,58,138,0.1)_50%,transparent_50%,transparent_75%,rgba(30,58,138,0.1)_75%,rgba(30,58,138,0.1))]"
              style={{ backgroundSize: "20px 20px" }}
              animate={{ 
                backgroundPosition: ["0px 0px", "20px 20px"],
              }}
              transition={{ 
                duration: 20, 
                ease: "linear", 
                repeat: Infinity 
              }}
            />
          </div>
          
          <motion.h2
            className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8 text-gray-900 ${position === 'center' ? 'text-center' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {title}
            <motion.div
              className={`h-1 w-16 bg-gradient-to-r from-blue-800 to-blue-900 mt-4 ${position === 'center' ? 'mx-auto' : ''} rounded-full`}
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "4rem", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </motion.h2>

          {/* Text fades in with character-by-character animation for extra polish */}
          <motion.p
            className={`text-gray-700 leading-relaxed text-lg md:text-xl ${position === 'center' ? 'text-center' : ''}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {content.split(' ').map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.4 + (i * 0.01), 
                  duration: 0.3,
                  ease: "easeOut"
                }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.p>
          
          <motion.div
            className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-blue-50 opacity-50"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContentSection;

