"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {

  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "naveengandham0404@gmail.com",
      link: "mailto:naveengandham0404@gmail.com",
      clickable: true
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 9866128148",
      link: "",
      clickable: false
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "www.linkedin.com/in/naveen-gandham-83372b184",
      link: "https://www.linkedin.com/in/naveen-gandham-83372b184",
      clickable: true
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/naveen-gandham",
      link: "https://github.com/naveen-gandham",
      clickable: true
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Mantada, Andhra Pradesh",
      link: "https://maps.google.com/?q=16.355764225954907,80.87578125996473",
      clickable: true
    }
  ]

  return (

    <section className="py-28 px-6 max-w-6xl mx-auto text-center">

      <h2 className="text-4xl font-bold mb-6">
        Contact
      </h2>

      <p className="text-gray-400 mb-14">
        Interested in collaboration, hiring, or discussing technology?  
        Feel free to reach out.
      </p>

      {/* Contact Cards */}

      <div className="grid md:grid-cols-2 gap-8 mb-16">

        {contacts.map((item, i) => {

          const Card = (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="group flex items-center gap-6 bg-[#0b1625] border border-gray-800 rounded-xl p-6 shadow-lg hover:border-red-500 transition"
            >

              <div className="text-red-400 text-2xl group-hover:scale-110 transition">
                {item.icon}
              </div>

              <div className="text-left">

                <p className="text-gray-400 text-sm">
                  {item.title}
                </p>

                <p className="font-semibold">
                  {item.value}
                </p>

              </div>

            </motion.div>
          )

          return item.clickable ? (
            <a key={i} href={item.link} target="_blank">
              {Card}
            </a>
          ) : (
            <div key={i}>
              {Card}
            </div>
          )

        })}

      </div>

      {/* Interactive Map */}

      <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-800 shadow-lg">

        <iframe
          src="https://maps.google.com/maps?q=16.355764225954907,80.87578125996473&z=15&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0"
        />

      </div>

    </section>
  )
}