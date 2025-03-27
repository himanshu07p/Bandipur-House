"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  { 
    name: "Aarushi", 
    role: "Regional Coordinator Bengaluru", 
    image: "/assets/Aarushi_Bengaluru-RC.jpg",
    email: "22f1001128@ds.study.iitm.ac.in",
    fullName: "Aarushi Singh Ahlawat",
    tagline: "Connecting the vibrant tech community of Bengaluru with innovative events and networking opportunities."
  },
  { 
    name: "Aman", 
    role: "Regional Coordinator Patna", 
    image: "/assets/Aman_Patna-RC.jpg",
    email: "23f3002457@ds.study.iitm.ac.in",
    fullName: "Aman Sachin Kujur",
    tagline: "Bridging educational gaps and fostering academic excellence in the Patna region."
  },
  { 
    name: "Azhaan", 
    role: "Regional Coordinator International", 
    image: "/assets/Azhaan_International-RC.jpg",
    email: "23f2005121@ds.study.iitm.ac.in",
    fullName: "Azhaan Pary",
    tagline: "Building global connections and representing our community on the international stage."
  },
  { 
    name: "Debayan", 
    role: "Regional Coordinator Kolkata", 
    image: "/assets/Debayan_Kolkata-RC.jpg",
    email: "24f1002231@ds.study.iitm.ac.in",
    fullName: "Debayan Khan",
    tagline: "Promoting cultural exchange and academic collaboration in the City of Joy."
  },
  { 
    name: "Lalit", 
    role: "Regional Coordinator Hyderabad", 
    image: "/assets/Lalit_Hyderabad-RC.jpg",
    email: "23f2001498@ds.study.iitm.ac.in",
    fullName: "Dodleti Lalit Sri Datta",
    tagline: "Merging tradition with technology in the Pearl City's educational landscape."
  },
  { 
    name: "Marmik", 
    role: "Regional Coordinator Mumbai", 
    image: "/assets/Marmik_Mumbai-RC.jpg",
    email: "24f2003057@ds.study.iitm.ac.in",
    fullName: "Marmik Gajbhiye",
    tagline: "Driving innovation and creating opportunities in the bustling metropolis of Mumbai."
  },
  { 
    name: "Shagun", 
    role: "Regional Coordinator Delhi", 
    image: "/assets/Shagun_Delhi-RC.jpg",
    email: "24f3001524@ds.study.iitm.ac.in",
    fullName: "Shagun Tyagi",
    tagline: "Orchestrating impactful initiatives in the national capital with passion and dedication."
  },
  { 
    name: "Suhani", 
    role: "Regional Coordinator Chandigarh", 
    image: "/assets/Suhani_Chandigarh-RC.jpg",
    email: "23f3003502@ds.study.iitm.ac.in",
    fullName: "Suhani Thakur",
    tagline: "Creating a thriving educational ecosystem in the beautiful planned city of Chandigarh."
  },
  { 
    name: "Vimal", 
    role: "Regional Coordinator Chennai", 
    image: "/assets/Vimal_RC-Chennai.jpg",
    email: "24f2100213@es.study.iitm.ac.in",
    fullName: "Vimal Prakashan S",
    tagline: "Fostering academic excellence and cultural diversity in the heart of Tamil Nadu."
  },
  { 
    name: "Shailesh", 
    role: "Regional Coordinator Lucknow", 
    image: "/assets/Shailesh_Lucknow-RC.jpg", 
    email: "23f2004090@ds.study.iitm.ac.in",
    fullName: "Shailesh Kumar Ojha",
    tagline: "Preserving heritage while promoting educational advancement in the City of Nawabs."
  }
];


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


const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

export default function TeamList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-t from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
        >
          Lower House Council
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
              style={{ minHeight: '400px' }}
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
                    priority={index < 6} 
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-1">{member.fullName || member.name}</h3>
                {member.email ? (
                  <p className="text-gray-300 mb-2 text-sm">
                    <a href={`mailto:${member.email}`} className="hover:text-blue-400 transition-colors">
                      {member.email}
                    </a>
                  </p>
                ) : (
                  <p className="text-yellow-500 mb-2 text-sm italic">Email not available</p>
                )}
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
                        {member.tagline || `${member.fullName || member.name} is an essential part of our team, bringing expertise and innovation to their role as ${member.role}.`}
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

