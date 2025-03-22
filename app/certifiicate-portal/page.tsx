"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ContentSection from "@/components/ContentSection"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
    <Navbar/>
      
      <iframe 
        src="http://127.0.0.1:5500/index.html" 
        width="100%" 
        height="600px" 
        style={{border: 'none'}}
        title="Embedded Website"
      />
      <Footer/>
    </main>

  )
}

