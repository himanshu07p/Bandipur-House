"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const upcomingEvents = [
  
  {
    id: 3,
    title: "Transforming Development with AI: Full-Stack Development Workshop",
    date: "March 30, 2025",
    location: "Online",
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2F176cd4ee-c4d3-4bc4-9afc-292b9d52cac2%2F411e08ef-d69e-4044-a495-4a533d0f00bf%2FWhatsApp_Image_2025-03-22_at_15.23.11.jpeg/size/w=2000?exp=1742656685&sig=V-Cu7aVutZWfsBlSEBskMPBAbfFclPyNlAOSpV-vAsE",
  },
  {
    id: 4,
    title: "Night of Noob 2.0",
    date: "March 23, 2025",
    location: "Online",
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2F176cd4ee-c4d3-4bc4-9afc-292b9d52cac2%2F5440cda1-30c1-46c3-a8e4-166a342226ab%2FWhatsApp_Image_2025-03-22_at_17.56.51.jpeg/size/w=2000?exp=1742656970&sig=okc0VccOCKHsnytPTp7mPs6dhCAREQFVNYxCrnC2tBU",
  },
  {
    id: 5,
    title: "Nagpur Meetup",
    date: "March 23, 2025",
    location: "Khindsi Lake, Ramtek",
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2F176cd4ee-c4d3-4bc4-9afc-292b9d52cac2%2F5786af23-9d07-48d8-8f8e-c78956195a8d%2FIMG_5463.jpg/size/w=2000?exp=1742656933&sig=8oMOuadTB1_BU8gZJ3Er1-aE9YfpS75Bg2_KxtSrCSc",
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
              <div className="relative h-72">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
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

