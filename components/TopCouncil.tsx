"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const topMembers = [
  { 
    name: "Deependra Pratap Singh", 
    role: "Secretary", 
    image: "https://i.ibb.co/sQNWPN8/Whats-App-Image-2025-01-27-at-4-30-03-PM.jpg",
    email: "bandipur-sec@ds.study.iitm.ac.in"
  },
  { 
    name: "Yuvraj Bhadauriya", 
    role: "Deputy Secretary", 
    image: "https://i.ibb.co/wpTwBfS/Yuvraj-Bhadauriya-web-Admin.jpg",
    email: "bandipur-ds@ds.study.iitm.ac.in"
  },
  { 
    name: "Saima Zainab", 
    role: "Web Admin", 
    image: "/assets/Saima Zainab.jpg",
    email: "bandipur-webad@ds.study.iitm.ac.in"
  },
]

export default function TopCouncil() {
  return (
    <section id="top-council" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 pb-2 leading-relaxed"
        >
          Upper House Council
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {topMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="mb-6 relative group">
                <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-black flex items-end justify-center pb-4"
                  >
                    <span className="text-white text-lg font-semibold">{member.role}</span>
                  </motion.div>
                </div>
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-1">{member.name}</h3>
              {member.email ? (
                <p className="text-gray-300 mb-2 text-sm">{member.email}</p>
              ) : (
                <p className="text-yellow-500 mb-2 text-sm italic">Email not available</p>
              )}
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

