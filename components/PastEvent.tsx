"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const pastEvents = [
  {
    id: 14,
    title: "Nagpur Meet-Up (Bandipur X Nilgiri X boundless)",
    date: "March 23, 2025",
    location: "Khindsi Lake, Ramtek",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//nagpur-meetup.jpg",
  },
  {
    id: 13,
    title: "Night of noobs 2.0",
    date: "March 23, 2025",
    location: "Online",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//Nightofnoobs2.jpeg",
  },
  {
    id: 12,
    title: "Movie Night",
    date: "March 10, 2025",
    location: "Online",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//movie-night1.png",
  },
  {
    id: 11,
    title: "Startup Guidance Session",
    date: "March 6, 2025",
    location: "Online",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//startup-guidence-session.jpeg",
  },
  {
    id: 10,
    title: "Dubai Meet-Up",
    date: "February 2, 2025",
    location: "Dubai",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//dubai-meetup.jpeg",
  },
  {
    id: 9,
    title: "Bakkhali Meet-UP(Bandipur X Nature Nurture",
    date: "January 28, 2025",
    location: "Bakkhali",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//bakkhali-meetup.jpg",
  },
  {
    id: 8,
    title: "Lucknow Meet-Up",
    date: "January 19, 2025",
    location: "Lucknow",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//lucknow-meetup.jpg",
  },
  {
    id: 7,
    title: "Chennai Meetup",
    date: "January 12, 2025",
    location: "Chennai",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//chennai-meetup.jpeg",
  },
  {
    id: 6,
    title: "Guntur Meet-Up",
    date: "January 12, 2025",
    location: "Guntur",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//Guntur-meetup.jpeg",
  },
  {
    id: 5,
    title: "Varnasi Meet-Up",
    date: "January 12, 2025",
    location: "Varanasi",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//Varanasi-meetup.jpeg",
  },
  {
    id: 4,
    title: "Crack The Code",
    date: "December 29, 2024",
    location: "Online",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//CTC1.jpeg",
  },
  {
    id: 3,
    title: "Bandipur House Orientation",
    date: "November 10, 2024",
    location: "Online",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//orientation10-10-24.jpg",
  },
  {
    id: 2,
    title: "Howrah Meet-Up (Bandipur x Nilgiri)",
    date: "November 2, 2024",
    location: "Howrah",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//Howrah_Meetup.png",
  },
  {
    id: 1,
    title: "Delhi Meet-Up",
    date: "October 19, 2024",
    location: "Delhi",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//delhi-meetup.jpg",
  },

]

export default function PastEvents() {
  return (
    <section className="py-20 bg-gradient-to-t from-black to-gray-900">
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
        >
          Past Events
        </motion.h2>
        <div className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide">
          {pastEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg min-w-[300px]"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="transition-transform duration-300 transform hover:scale-110 filter grayscale hover:grayscale-0 object-contain bg-gray-900"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{event.date}</p>
                <p className="text-gray-400 text-sm">{event.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

