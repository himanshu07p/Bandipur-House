import { motion } from "framer-motion";
import { BookOpen, Users, Target } from "lucide-react";

const HomeContent = () => {
  return (
    <div className="w-full">
      {/* Header section with gradient background */}
      <div className="bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 py-20">
        <div className="container mx-auto text-center px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-extrabold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Discover Bandipur House
          </motion.h1>
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-10 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-lg md:text-xl font-medium text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Nurturing talent and fostering community within the IIT Madras BS Program
          </motion.p>
        </div>
      </div>

      {/* About Section with elegant design */}
      <section id="about-section" className="py-24 relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-100 rounded-full opacity-30 blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Left Column - Icon and Title */}
            <motion.div 
              className="md:w-1/3 flex flex-col items-center md:items-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="p-5 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full mb-8 shadow-md">
                <BookOpen className="w-10 h-10 text-amber-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-5 text-center md:text-left leading-tight">About Bandipur House</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-8" />
            </motion.div>
            
            {/* Right Column - Content with styled paragraphs */}
            <motion.div 
              className="md:w-2/3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="prose prose-lg max-w-none">
                <motion.p 
                  className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Bandipur House is named after Bandipur National Park, a tiger reserve under Project Tiger. True to our namesake, we nurture a diverse array of fauna (cultivated individuals) and boast an ethereal collection of flora (creativity).
                </motion.p>
                <motion.p 
                  className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Much like the forest, we are in a constant state of motion, bustling with life and occupying new landscapes. We are an active community of aspiring data scientists and programmers honing our skills in the rigorous B.S. program at IIT Madras.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diversity Section with elegant gradient background */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-green-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-teal-200 rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-200 rounded-full opacity-30 blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            {/* Right Column - Icon and Title */}
            <motion.div 
              className="md:w-1/3 flex flex-col items-center md:items-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="p-5 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full mb-8 shadow-md">
                <Users className="w-10 h-10 text-teal-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-5 text-center md:text-right leading-tight">Our Diversity</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mb-8" />
            </motion.div>
            
            {/* Left Column - Enhanced Content */}
            <motion.div 
              className="md:w-2/3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="prose prose-lg max-w-none">
                <motion.p 
                  className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Our program continues to expand, now encompassing over 4000 students across 10 regions, including an International Region. Each region is overseen by a Regional Coordinator, ensuring seamless coordination and engagement.
                </motion.p>
                <motion.p 
                  className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  With this evolution, our fraternity has grown stronger, fostering a diverse and interconnected community. The clubs and societies within the House remain integral to student groups, truly crossing geographical and cultural boundaries.
                </motion.p>
              </div>
              
              {/* Enhanced visual representation of regions */}
              <motion.div 
                className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {['North', 'South', 'East', 'West', 'International'].map((region, index) => (
                  <motion.div 
                    key={region}
                    className="bg-white p-4 rounded-lg shadow-md text-center text-teal-800 font-medium hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 transition-transform"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    {region}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with subtle design */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-100 rounded-full opacity-30 blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Left Column - Icon and Title */}
            <motion.div 
              className="md:w-1/3 flex flex-col items-center md:items-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="p-5 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mb-8 shadow-md">
                <Target className="w-10 h-10 text-purple-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-5 text-center md:text-left leading-tight">Mission & Vision</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mb-8" />
            </motion.div>
            
            {/* Right Column - Content with styled elements */}
            <motion.div 
              className="md:w-2/3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="prose prose-lg max-w-none">
                <motion.p 
                  className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  The mission of the house is to foster all that we harbor and nourish the best of us. We promote strong leadership and initiative with activities organized within the house.
                </motion.p>
                <motion.p 
                  className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Our elected representatives are enablers of an ecosystem of harmonized excellence, in that initiatives are led by self-motivated individuals and their commitment & energy guide us to do better - Together.
                </motion.p>
              </div>
              
              {/* Enhanced mission statement callout */}
              <motion.div 
                className="mt-10 p-8 border-l-4 border-purple-500 bg-gradient-to-r from-purple-50 to-purple-100 rounded-r-xl shadow-md"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="italic text-purple-800 font-medium text-lg md:text-xl">
                  "Fostering excellence through collaborative leadership and empowering students to achieve their highest potential."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
