import Clubhero from "@/components/ClubsHero"
import FeaturedClubs from "@/components/FeaturedClubs"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function ClubsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar/>
      <Clubhero />
      <FeaturedClubs />
      <Footer/>
    </main>
  )
}

