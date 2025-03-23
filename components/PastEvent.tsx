"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const pastEvents = [
  {
    id: 10,
    title: "Night of noobs",
    date: "Februery 24, 2025",
    location: "Online",
    image: "https://i.ibb.co/zTxY1S9j/igniters.png",
  },
  {
    id: 9,
    title: "Bakkhali Meet-UP(Bandipur X Nature Nurture",
    date: "January 28, 2025",
    location: "Bakkhali",
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2F176cd4ee-c4d3-4bc4-9afc-292b9d52cac2%2F5f98d207-5230-4d94-95bc-a3bb45965b5a%2FWhatsApp_Image_2025-03-15_at_10.15.43_PM.jpeg/size/w=2000?exp=1742659328&sig=4-w_18f435tSa4PM1Q-Mt43vOvNiofGyyFpvaL8iWls",
  },
  {
    id: 8,
    title: "Lucknow Meet-Up",
    date: "January 19, 2025",
    location: "Lucknow",
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2F176cd4ee-c4d3-4bc4-9afc-292b9d52cac2%2Fff6e2108-f46b-486c-8308-2c031b12752c%2FWhatsApp_Image_2025-03-15_at_10.15.42_PM_(1).jpeg/size/w=2000?exp=1742659382&sig=z-K14YR9KHyIB8Cypsy00aGHGzLqcRM7mkbRtDfZzN0",
  },
  {
    id: 7,
    title: "Chennai Meetup",
    date: "January 12, 2025",
    location: "Chennai",
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2F176cd4ee-c4d3-4bc4-9afc-292b9d52cac2%2F5a803753-12ad-4dfd-9611-68e360a44483%2FWhatsApp_Image_2025-03-15_at_10.10.41_PM_(2).jpeg/size/w=600?exp=1742659420&sig=yL-d9h7GOVnOXNcK9oKmCdKmP4c1arOh4RSkyt5oOc0",
  },
  {
    id: 6,
    title: "Guntur Meet-Up",
    date: "January 12, 5",
    location: "Guntur",
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2F176cd4ee-c4d3-4bc4-9afc-292b9d52cac2%2F9c909cf1-b004-43a1-af2f-085b0722da57%2FWhatsApp_Image_2025-03-22_at_17.45.37.jpeg/size/w=2000?exp=1742659481&sig=TBpsUTyFtAZIJGXLKz5PUbN_yB-nbEi6xLthibQedTc",
  },
  {
    id: 5,
    title: "Varnasi Meet-Up",
    date: "January 12, 2025",
    location: "Varanasi",
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2F176cd4ee-c4d3-4bc4-9afc-292b9d52cac2%2Fd6aebf8a-add3-47fc-abb7-b9ca6ac01964%2FWhatsApp_Image_2025-03-22_at_17.45.37_(1).jpeg/size/w=2000?exp=1742659505&sig=VC4znNFQoxJRvpNURRThMsKSk-ZJ4-2zRL1lOSb2oSU",
  },
  {
    id: 4,
    title: "Crack The Code",
    date: "December 29, 2024",
    location: "Online",
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2F176cd4ee-c4d3-4bc4-9afc-292b9d52cac2%2Fabd684f0-96ba-4936-97a2-b038043ed291%2FWhatsApp_Image_2025-03-22_at_17.42.49.jpeg/size/w=2000?exp=1742659673&sig=DwynB7q-q5w0kAJSWW8n4wRxEV2WwhGlmULF_do_uJ0",
  },
  {
    id: 3,
    title: "Bandipur House Orientation",
    date: "November 10, 2024",
    location: "Online",
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2F176cd4ee-c4d3-4bc4-9afc-292b9d52cac2%2F573fad00-c24a-4cfe-966d-3ae3a9d337bb%2FWhatsApp_Image_2025-03-15_at_10.10.41_PM.jpeg/size/w=600?exp=1742659572&sig=OZAMF9a16e_CY0SdCi3drIErikNy2FWRD7eWtX04YlQ",
  },
  {
    id: 2,
    title: "Howrah Meet-Up (Bandipur x Nilgiri)",
    date: "November 2, 2024",
    location: "Howrah",
    image: "https://img.notionusercontent.com/s3/prod-files-secure%2F176cd4ee-c4d3-4bc4-9afc-292b9d52cac2%2Fce141a1c-90fd-4c8d-9831-e95239e4b7c3%2FHowrah_Meetup_Poster(1)_(1).png/size/w=2000?exp=1742656193&sig=m6E7qMiIZyxFrLH5-3aJ4jigOWh5Muztpg2a7awD-PE",
  },
  {
    id: 1,
    title: "Delhi Meet-Up",
    date: "October 19, 2024",
    location: "Delhi",
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

