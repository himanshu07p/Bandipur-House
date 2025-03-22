"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ContentSection from "@/components/ContentSection"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import { ParallaxProvider } from "react-scroll-parallax"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <ParallaxProvider>
    <main className="bg-white overflow-x-hidden">
    <Navbar/>
      <Hero />
      <div id="about-section">
        <ContentSection
          title="About Bandipur House"
          content="Bandipur House is named after Bandipur National Park, a tiger reserve under Project Tiger. True to our namesake, we nurture a diverse array of fauna (cultivated individuals) and boast an ethereal collection of flora (creativity).
                  Much like the forest, we are in a constant state of motion, bustling with life and occupying new landscapes. We are an active community of aspiring data scientists and programmers honing our skills in the rigorous B.S. program at IIT Madras."
          imageUrl="https://i.pinimg.com/736x/26/ce/0d/26ce0d7b2f35a8f06a62894e4ac23e06.jpg"
        />
      </div>
      <ContentSection
        title="Our Diversity"
        content="The structure of our program enables us to span over all states of India, bringing vibrancies of culture and flexibility of reach within us. Our fraternity of 1040+ students is spread across 26 nodes across the country with 20-50 students at each node.

Clubs and societies of the house are spread across the student groups, so while some claim it, we are actually crossing boundaries of reach quite literally! 

Along with 24 Nodes in India, we also have 2 more nodes based in UAE who also take an active part in the various activities that are conducted in the House."
        imageUrl="https://i.pinimg.com/736x/e1/fa/18/e1fa18ac9c03c5d76c6eda658b4a749a.jpg"
        reverse={true}
      />
      <ContentSection
        title="Mission & Vision"
        content="The mission of the house is to foster all that we harbor and nourish the best of us. We promote strong leadership and initiative with activities organized within the house. 

Our elected representatives are enablers of an ecosystem of harmonized excellence, in that initiatives are led by self motivated individuals and their commitment & energy guide us to do better- Together. "
        imageUrl="https://i.pinimg.com/736x/e1/02/3c/e1023cfb39e58951f3fb330b3aeb97c3.jpg"
      />
      <ScrollToTopButton />
      <Footer/>
    </main>
    </ParallaxProvider>
  )
}

