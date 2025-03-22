import UpcomingEvents from "@/components/UpcomingEvent"
import PastEvents from "@/components/PastEvent"
import Event from "@/components/EventHero"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function EventPage() {
  return (
    <main className="min-h-screen bg-black text-white">
        <Navbar/>
      <Event/>
      <UpcomingEvents />
      <PastEvents />
      <Footer/>
    </main>
  )
}

