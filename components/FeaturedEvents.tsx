"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, MapPin, Clock } from "lucide-react"

// Sample upcoming events data
const upcomingEvents = [
  {
    id: 1,
    title: "Nagpur Meet-Up (Bandipur X Nilgiri X boundless)",
    date: "March 23, 2025",
    time: "7:00 PM - 9:00 PM",
    location: "Nagpur Node",
    description: "Join us for an exciting meet-up where members from Bandipur, Nilgiri, and Boundless houses come together for networking and knowledge sharing.",
    registrationLink: "#"
  },
  {
    id: 2,
    title: "Movie Night",
    date: "March 10, 2025",
    time: "8:00 PM - 11:00 PM",
    location: "Online",
    description: "Relax and enjoy a movie night with fellow Bandipur House members. The movie will be selected through online voting.",
    registrationLink: "#"
  },
  {
    id: 3,
    title: "Startup Guidance Session",
    date: "March 6, 2025",
    time: "7:00 PM - 8:30 PM",
    location: "Online",
    description: "Get valuable insights on launching your startup from industry experts and successful entrepreneurs.",
    registrationLink: "#"
  }
]

export default function FeaturedEvents() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
            </div>
            <div className="px-6 py-4 bg-gray-50">
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{event.date}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">{event.time}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{event.location}</span>
              </div>
              <Link href={event.registrationLink}>
                <div className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-md text-center font-medium hover:from-blue-600 hover:to-indigo-700 transition-colors duration-300">
                  Register Now
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
