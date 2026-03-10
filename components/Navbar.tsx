"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Navbar({ setSection }: any) {

  const [active, setActive] = useState("")

  const links = [
    { name: "Home", value: "" },
    { name: "About", value: "about" },
    { name: "Value", value: "value" },
    { name: "Projects", value: "projects" },
    { name: "Experience", value: "experience" },
    { name: "Skills", value: "skills" },
    { name: "Teaching", value: "teaching" },
    { name: "Education", value: "education" },
    { name: "Achievements", value: "achievements" },
    { name: "Contact", value: "contact" }
  ]

  const handleMove = (e: any) => {

    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    e.currentTarget.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`

  }

  const handleLeave = (e: any) => {
    e.currentTarget.style.transform = "translate(0px,0px)"
  }

  return (

    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

      <div className="backdrop-blur-lg bg-black/60 border border-gray-800 rounded-full px-10 py-4 shadow-xl">

        <nav className="flex items-center gap-8 text-sm">

          {links.map((link) => (

            <motion.button
              key={link.name}
              onClick={() => {
                setSection(link.value)
                setActive(link.value)
              }}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              className="relative text-gray-300 hover:text-white transition"
            >

              {link.name}

              {active === link.value && (

                <motion.div
                  layoutId="navIndicator"
                  className="absolute left-0 -bottom-2 h-[2px] w-full bg-red-500"
                />

              )}

            </motion.button>

          ))}

        </nav>

      </div>

    </header>
  )
}