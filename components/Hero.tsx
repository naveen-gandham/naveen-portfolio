"use client"

import { useState } from "react"
import { Typewriter } from "react-simple-typewriter"
import Image from "next/image"

export default function Hero() {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center px-10 overflow-hidden"
    >

      {/* Mouse spotlight */}
      <div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 bg-red-600"
        style={{
          left: position.x - 300,
          top: position.y - 300
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT SIDE */}
        <div>

          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Naveen Kumar Gandham
          </h1>

          <h2 className="text-xl text-red-500 mb-6">

            <Typewriter
              words={[
                "Software Engineer",
                "AI Trainer",
                "Full Stack Developer"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />

          </h2>

          <p className="text-gray-400 max-w-lg leading-relaxed mb-10">
            Trained 3000+ engineering students and worked as Associate
            Software Engineer at Bosch Global Software Technologies.
            I combine industry experience with practical training
            to build industry-ready developers.
          </p>

          {/* Stats */}
          <div className="flex gap-12">

            <div>
              <h3 className="text-2xl font-bold text-red-500">3000+</h3>
              <p className="text-gray-400 text-sm">Students Trained</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-500">4.6 / 5</h3>
              <p className="text-gray-400 text-sm">Student Rating</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-500">3+</h3>
              <p className="text-gray-400 text-sm">Industry Roles</p>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <div className="relative w-[380px] h-[380px] flex items-center justify-center">

            {/* Glow */}
            <div className="absolute w-72 h-72 bg-red-600 blur-3xl opacity-30 rounded-full"></div>

            {/* React */}
            <Image
              src="/react.png"
              alt="react"
              width={42}
              height={42}
              className="absolute top-0 left-1/2 -translate-x-1/2 float1"
            />

            {/* Python */}
            <Image
              src="/python.png"
              alt="python"
              width={42}
              height={42}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 float2"
            />

            {/* Angular */}
            <Image
              src="/angular.png"
              alt="angular"
              width={42}
              height={42}
              className="absolute left-0 top-1/2 -translate-y-1/2 float3"
            />

            {/* Node */}
            <Image
              src="/node.png"
              alt="node"
              width={42}
              height={42}
              className="absolute right-0 top-1/2 -translate-y-1/2 float4"
            />

            {/* Profile Photo */}
            <Image
              src="/passport.jpg"
              alt="Naveen Kumar Gandham"
              width={220}
              height={220}
              className="rounded-xl relative z-10"
            />

          </div>

        </div>

      </div>

    </section>
  )
}