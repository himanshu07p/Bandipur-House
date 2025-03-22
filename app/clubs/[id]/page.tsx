"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would typically come from an API or database
const clubData = {
  1: {
    name: "Photography Club",
    description:
      "Capture moments and share your vision with fellow photography enthusiasts. Our club offers workshops, photo walks, and exhibitions to help you improve your skills and showcase your talent.",
    category: "Arts",
    members: 120,
    foundedYear: 2015,
    meetingLocation: "Art Building, Room 101",
    image: "/placeholder.svg?height=600&width=1200",
    activities: ["Weekly photo challenges", "Monthly exhibitions", "Photography workshops", "Photo walks"],
    equipmentProvided: ["DSLR cameras", "Lighting equipment", "Editing software"],
  },
  2: {
    name: "Chess Club",
    description:
      "Capture moments and share your vision with fellow photography enthusiasts. Our club offers workshops, photo walks, and exhibitions to help you improve your skills and showcase your talent.",
    category: "Arts",
    members: 120,
    foundedYear: 2015,
    meetingLocation: "Art Building, Room 101",
    image: "/placeholder.svg?height=600&width=1200",
    activities: ["Weekly photo challenges", "Monthly exhibitions", "Photography workshops", "Photo walks"],
    equipmentProvided: ["DSLR cameras", "Lighting equipment", "Editing software"],
  },
  3: {
    name: "Cinecraft Club",
    description:
      "Capture moments and share your vision with fellow photography enthusiasts. Our club offers workshops, photo walks, and exhibitions to help you improve your skills and showcase your talent.",
    category: "Arts",
    members: 120,
    foundedYear: 2015,
    meetingLocation: "Art Building, Room 101",
    image: "/placeholder.svg?height=600&width=1200",
    activities: ["Weekly photo challenges", "Monthly exhibitions", "Photography workshops", "Photo walks"],
    equipmentProvided: ["DSLR cameras", "Lighting equipment", "Editing software"],
  },
  4: {
    name: "EUREKA Club",
    description:
      "Capture moments and share your vision with fellow photography enthusiasts. Our club offers workshops, photo walks, and exhibitions to help you improve your skills and showcase your talent.",
    category: "Arts",
    members: 120,
    foundedYear: 2015,
    meetingLocation: "Art Building, Room 101",
    image: "/placeholder.svg?height=600&width=1200",
    activities: ["Weekly photo challenges", "Monthly exhibitions", "Photography workshops", "Photo walks"],
    equipmentProvided: ["DSLR cameras", "Lighting equipment", "Editing software"],
  },
  5: {
    name: "Igniters CP Club",
    description:
      "Capture moments and share your vision with fellow photography enthusiasts. Our club offers workshops, photo walks, and exhibitions to help you improve your skills and showcase your talent.",
    category: "Arts",
    members: 120,
    foundedYear: 2015,
    meetingLocation: "Art Building, Room 101",
    image: "/placeholder.svg?height=600&width=1200",
    activities: ["Weekly photo challenges", "Monthly exhibitions", "Photography workshops", "Photo walks"],
    equipmentProvided: ["DSLR cameras", "Lighting equipment", "Editing software"],
  },
  6: {
    name: "Nexora Club",
    description:
      "Capture moments and share your vision with fellow photography enthusiasts. Our club offers workshops, photo walks, and exhibitions to help you improve your skills and showcase your talent.",
    category: "Arts",
    members: 120,
    foundedYear: 2015,
    meetingLocation: "Art Building, Room 101",
    image: "/placeholder.svg?height=600&width=1200",
    activities: ["Weekly photo challenges", "Monthly exhibitions", "Photography workshops", "Photo walks"],
    equipmentProvided: ["DSLR cameras", "Lighting equipment", "Editing software"],
  },
  7: {
    name: "Samvaah Club",
    description:
      "Capture moments and share your vision with fellow photography enthusiasts. Our club offers workshops, photo walks, and exhibitions to help you improve your skills and showcase your talent.",
    category: "Arts",
    members: 120,
    foundedYear: 2015,
    meetingLocation: "Art Building, Room 101",
    image: "/placeholder.svg?height=600&width=1200",
    activities: ["Weekly photo challenges", "Monthly exhibitions", "Photography workshops", "Photo walks"],
    equipmentProvided: ["DSLR cameras", "Lighting equipment", "Editing software"],
  },
  8: {
    name: "Sportzeria Club",
    description:
      "Capture moments and share your vision with fellow photography enthusiasts. Our club offers workshops, photo walks, and exhibitions to help you improve your skills and showcase your talent.",
    category: "Arts",
    members: 120,
    foundedYear: 2015,
    meetingLocation: "Art Building, Room 101",
    image: "/placeholder.svg?height=600&width=1200",
    activities: ["Weekly photo challenges", "Monthly exhibitions", "Photography workshops", "Photo walks"],
    equipmentProvided: ["DSLR cameras", "Lighting equipment", "Editing software"],
  },
  // Add more clubs as needed
}

export default function ClubPage() {
  const params = useParams()
  const clubId = params.id as string
  const club = clubData[clubId as keyof typeof clubData]

  if (!club) {
    return <div>Club not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="relative h-96 md:h-[70vh]">
          <Image
            src={club.image || "/placeholder.svg"}
            alt={club.name}
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-center px-4">{club.name}</h1>
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
              <h2 className="text-3xl font-semibold mb-4">About the Club</h2>
              <p className="text-gray-300 mb-6">{club.description}</p>

              <h3 className="text-2xl font-semibold mb-4">Activities</h3>
              <ul className="list-disc list-inside mb-6">
                {club.activities.map((activity, index) => (
                  <li key={index} className="text-gray-300 mb-2">
                    {activity}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Equipment Provided</h3>
              <ul className="list-disc list-inside mb-6">
                {club.equipmentProvided.map((equipment, index) => (
                  <li key={index} className="text-gray-300 mb-2">
                    {equipment}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Club Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  <span>{club.members} members</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 mr-2" />
                  <span>Founded in {club.foundedYear}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>{club.meetingLocation}</span>
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
                <h3 className="text-2xl font-semibold mb-4">Join Our Club</h3>
                <p className="text-gray-300 mb-4">Become a part of our vibrant community!</p>
                <Button className="w-full mb-4">Apply to Join</Button>
                <p className="text-sm text-gray-400 mb-4">
                  Open to all skill levels. We welcome enthusiasts and professionals alike!
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{club.category}</Badge>
                  <Badge variant="secondary">Creative</Badge>
                  <Badge variant="secondary">Community</Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

