"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function EventLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-4 z-10"
      >
        <Link href="/" passHref>
          <button className="bg-white text-black px-4 py-2 rounded-full flex items-center hover:bg-gray-200 transition duration-300">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </button>
        </Link>
      </motion.div>
      {children}
    </div>
  )
}

