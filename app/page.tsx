"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import { ParallaxProvider } from "react-scroll-parallax"
import Footer from "@/components/Footer"
import HomeContent from "@/components/HomeContent"
import  Contentrandom from "@/components/Contentrandom"


export default function Home() {
  return (
    <ParallaxProvider>
      <main className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <HomeContent />
        <Contentrandom />
        <ScrollToTopButton />
        <Footer />
      </main>
    </ParallaxProvider>
  )
}

