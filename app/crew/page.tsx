"use client"
import { motion } from "framer-motion"
import Hero from "@/components/crewhero"
import TopCouncil from "@/components/TopCouncil"
import WebOps from "@/components/WebOperationTeam"
import TeamList from "@/components/TeamList"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white overflow-hidden"
    >
      <Navbar/>
      <Hero />
      <TopCouncil />
      <TeamList />
      <WebOps/>
      <Footer/>
    </motion.main>
  )
}

