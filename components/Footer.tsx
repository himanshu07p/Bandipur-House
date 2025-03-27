"use client"

import Link from "next/link"
import { Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import CircularText from "./CircularText"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-wrap justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="w-full md:w-1/3 mb-6 md:mb-0 flex items-center" variants={itemVariants}>
            <CircularText />
            <div className="ml-4">
              <h2 className="text-2xl font-serif font-bold mb-2">Bandipur House</h2>
              <p className="text-gray-400">IIT Madras</p>
            </div>
          </motion.div>
          <motion.div className="w-full md:w-1/3 mb-6 md:mb-0" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400">
              Indian Institute of Technology
              <br />
              Madras IIT P.O., Chennai 600036
              <br />
              INDIA
            </p>
            <p className="mt-2">
              <a
                href="mailto: bandipur-webad@ds.study.iitm.ac.in"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                bandipur-webad@ds.study.iitm.ac.in
              </a>
            </p>
          </motion.div>
          <motion.div className="w-full md:w-1/3" variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href="https://www.instagram.com/bandipur_iitm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <Instagram size={24} />
                  <span className="sr-only">Instagram</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href="https://www.linkedin.com/company/bandipur-house-iit-madras-bs-degree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href="https://www.youtube.com/@bandipurhouseofficial5633"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <Youtube size={24} />
                  <span className="sr-only">YouTube</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href="https://whatsapp.com/channel/0029Vb3SNqU4dTnR1GXVcM3Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  <MessageCircle size={24} />
                  <span className="sr-only">WhatsApp</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-8 pt-8 border-t border-gray-800 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-400">Website developed by Victor Adhikary 
            24f3002659@ds.study.iitm.ac.in</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
