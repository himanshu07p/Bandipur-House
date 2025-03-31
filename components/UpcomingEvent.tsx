"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const upcomingEvents = [
  {
    id: 1,
    title: "Upcoming Event",
    date: "Stay Tuned",
    location: "Online",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//upevent.jpg",
  },
  {
    id: 2,
    title: "Upcoming Event ",
    date: "Stay Tuned",
    location: "Online",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//upevent.jpg",
  },
  {
    id: 3,
    title: "Upcoming Event",
    date: "Stay Tuned",
    location: "Online",
    image: "https://dfxufezovqsrqrksreed.supabase.co/storage/v1/object/public/events//upevent.jpg",
  },
]

export default function UpcomingEvents() {
  return (
    <section id="upcoming-events" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
        >
          Upcoming Events
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative w-full pt-[133%]">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  className="transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-2">{event.date}</p>
                <p className="text-gray-400">{event.location}</p>
              </div>
              <div className="px-6 pb-4">
                <Link href={`/event/${event.id}`} passHref>
                  <button className="w-full bg-white text-black py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

