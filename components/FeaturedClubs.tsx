"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const featuredClubs = [
  {
    id: 2,
    name: "Chess Club",
    description: "Engage in thought-provoking discussions and improve your public speaking skills.",
    members: 85,
    image: "https://i.ibb.co/FLNM10NB/2.jpg",
  },
  {
    id: 3,
    name: "Eureka Club",
    description: "Learn, code, and build amazing projects with like-minded tech enthusiasts.",
    members: 150,
    image: "https://i.ibb.co/ksSZnZWK/Eureka.png",
  },
  {
    id: 5,
    name: "Igniters CP Club",
    description: "Learn, code, and build amazing projects with like-minded tech enthusiasts.",
    members: 150,
    image: "https://i.ibb.co/zTxY1S9j/igniters.png",
  },
  {
    id: 7,
    name: "Samvaah Club",
    description: "Learn, code, and build amazing projects with like-minded tech enthusiasts.",
    members: 150,
    image: "https://i.ibb.co/vC7NPQPx/1.jpg",
  },
]

export default function FeaturedClubs() {
  return (
    <section id="featured-clubs" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
        >
          Featured Clubs
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredClubs.map((club) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative aspect-w-1 aspect-h-1 w-full">
                <div className="relative" style={{ paddingTop: '100%' }}>
                  <Image
                    src={club.image || "/placeholder.svg"}
                    alt={club.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-110 absolute inset-0"
                  />
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold mb-2">{club.name}</h3>
                <p className="text-gray-400 mb-4">{club.description}</p>
              </div>
              <div className="px-6 pb-4">
                <Link href={`/club/${club.id}`} passHref>
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

