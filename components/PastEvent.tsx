"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const pastEvents = [
  {
    id: 10,
    title: "Night of noobs",
    date: "Februery 24, 2025",
    location: "Online",
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2F176cd4ee-c4d3-4bc4-9afc-292b9d52cac2%2F8d6cb91b-1974-4b4b-a90a-25a40c65b61b%2FNight-of-noobs.jpg/size/w=2000?exp=1741883078&sig=CsJ3Gh_TWyquCp6xCvhzu_KYaTz9-XmkG7g5-whfszk",
  },
  {
    id: 9,
    title: "Bakkhali Meet-UP(Bandipur X Nature Nurture",
    date: "January 28, 2025",
    location: "Online",
    image: "https://img.notionusercontent.com/s3/prod-files-secure/176cd4ee-c4d3-4bc4-9afc-292b9d52cac2/5f98d207-5230-4d94-95bc-a3bb45965b5a/WhatsApp_Image_2025-03-15_at_10.15.43_PM.jpeg?table=block&id=91049999-5592-4efb-b999-983effa58558&spaceId=176cd4ee-c4d3-4bc4-9afc-292b9d52cac2&width=2000&name=WhatsApp%20Image%202025-03-15%20at%2010.15.43%20PM.jpeg",
  },
  {
    id: 8,
    title: "Lucknow Meet-Up",
    date: "January 19, 2025",
    location: "Online",
    image: "https://img.notionusercontent.com/s3/prod-files-secure/176cd4ee-c4d3-4bc4-9afc-292b9d52cac2/ff6e2108-f46b-486c-8308-2c031b12752c/WhatsApp_Image_2025-03-15_at_10.15.42_PM_(1).jpeg?table=block&id=91049999-5592-4efb-b999-983effa58558&spaceId=176cd4ee-c4d3-4bc4-9afc-292b9d52cac2&width=2000&name=WhatsApp%20Image%202025-03-15%20at%2010.15.42%20PM%20(1).jpeg",
  },
  {
    id: 7,
    title: "Chennai Meetup",
    date: "January 12, 2025",
    location: "Online",
    image: "https://img.notionusercontent.com/s3/prod-files-secure/176cd4ee-c4d3-4bc4-9afc-292b9d52cac2/5a803753-12ad-4dfd-9611-68e360a44483/WhatsApp_Image_2025-03-15_at_10.10.41_PM_(2).jpeg?table=block&id=91049999-5592-4efb-b999-983effa58558&spaceId=176cd4ee-c4d3-4bc4-9afc-292b9d52cac2&width=2000&name=WhatsApp%20Image%202025-03-15%20at%2010.10.41%20PM%20(2).jpeg",
  },
  {
    id: 6,
    title: "Guntur Meet-Up",
    date: "January 12, 5",
    location: "Online",
    image: "/placeholder.svg?height=500&width=400",
  },
  {
    id: 5,
    title: "Varnasi Meet-Up",
    date: "January 12, 2025",
    location: "Online",
    image: "/placeholder.svg?height=500&width=400",
  },
  {
    id: 4,
    title: "Crack The Code",
    date: "December 29, 2024",
    location: "Online",
    image: "https://img.notionusercontent.com/s3/prod-files-secure/176cd4ee-c4d3-4bc4-9afc-292b9d52cac2/aeaf5a71-3c38-407a-944a-dc49a872c733/WhatsApp_Image_2025-03-15_at_10.10.41_PM_(1).jpeg?table=block&id=91049999-5592-4efb-b999-983effa58558&spaceId=176cd4ee-c4d3-4bc4-9afc-292b9d52cac2&width=2000&name=WhatsApp%20Image%202025-03-15%20at%2010.10.41%20PM%20(1).jpeg",
  },
  {
    id: 3,
    title: "Bandipur House Orientation",
    date: "November 10, 2024",
    location: "Online",
    image: "https://img.notionusercontent.com/s3/prod-files-secure/176cd4ee-c4d3-4cfe-966d-3ae3a9d337bb/WhatsApp_Image_2025-03-15_at_10.10.41_PM.jpeg?table=block&id=91049999-5592-4efb-b999-983effa58558&spaceId=176cd4ee-c4d3-4bc4-9afc-292b9d52cac2&width=2000&name=WhatsApp%20Image%202025-03-15%20at%2010.10.41%20PM.jpeg",
  },
  {
    id: 2,
    title: "Howrah Meet-Up (Bandipur x Nilgiri)",
    date: "November 2, 2024",
    location: "Online",
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2F176cd4ee-c4d3-4bc4-9afc-292b9d52cac2%2Fce141a1c-90fd-4c8d-9831-e95239e4b7c3%2FHowrah_Meetup_Poster(1)_(1).png/size/w=2000?exp=1742656193&sig=m6E7qMiIZyxFrLH5-3aJ4jigOWh5Muztpg2a7awD-PE",
  },
  {
    id: 1,
    title: "Delhi Meet-Up",
    date: "October 19, 2024",
    location: "Online",
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2F176cd4ee-c4d3-4bc4-9afc-292b9d52cac2%2F1e7b4a76-e1f2-42bf-b83c-c857156d2675%2FWhatsApp_Image_2025-03-15_at_10.10.40_PM.jpeg/size/w=2000?exp=1742655962&sig=rlcxXTE6OWLKbnnyJO7BqWzh1OlPMPPNLALJvFC4p6s",
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
              <div className="relative h-[375px]">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110 filter grayscale hover:grayscale-0"
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

