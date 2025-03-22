"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin, Clock, Users, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would typically come from an API or database
const eventData = {
  1: {
    title: "Tech Conference 2023",
    date: "September 15-17, 2023",
    time: "9:00 AM - 6:00 PM",
    location: "San Francisco Convention Center, CA",
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "Join us for the biggest tech conference of the year. Featuring keynote speakers from leading tech companies, hands-on workshops, and networking opportunities.",
    speakers: ["Elon Musk", "Satya Nadella", "Susan Wojcicki"],
    ticketPrice: "$599",
    capacity: 5000,
  },
  // Add more events as needed
}

export default function EventPage() {
  const params = useParams()
  const eventId = params.id as string
  const event = eventData[eventId as keyof typeof eventData]

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="relative h-96 md:h-[70vh]">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-center px-4">{event.title}</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold mb-4">About the Event</h2>
              <p className="text-gray-300 mb-6">{event.description}</p>

              <h3 className="text-2xl font-semibold mb-4">Speakers</h3>
              <ul className="list-disc list-inside mb-6">
                {event.speakers.map((speaker, index) => (
                  <li key={index} className="text-gray-300 mb-2">
                    {speaker}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  <span>Capacity: {event.capacity} attendees</span>
                </div>
                <div className="flex items-center">
                  <Ticket className="w-6 h-6 mr-2" />
                  <span>Ticket Price: {event.ticketPrice}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Register Now</h3>
                <p className="text-gray-300 mb-4">Secure your spot at this amazing event!</p>
                <Button className="w-full mb-4">Buy Tickets</Button>
                <p className="text-sm text-gray-400 mb-4">Only {event.capacity} spots available. Don't miss out!</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Tech</Badge>
                  <Badge variant="secondary">Conference</Badge>
                  <Badge variant="secondary">Networking</Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

