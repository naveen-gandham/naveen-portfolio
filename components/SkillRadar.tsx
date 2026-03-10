"use client"

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer
} from "recharts"

const data = [
  { skill: "Java", value: 90 },
  { skill: "Python", value: 85 },
  { skill: "Frontend", value: 80 },
  { skill: ".NET", value: 75 },
  { skill: "Databases", value: 80 },
  { skill: "AI / ML", value: 70 }
]

export default function SkillRadar() {
  return (
    <section className="py-32">

      <h2 className="text-4xl font-bold text-center mb-16">
        Skill Overview
      </h2>

      <div className="max-w-3xl mx-auto h-[420px]">

        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>

            <PolarGrid stroke="#333" />

            <PolarAngleAxis
              dataKey="skill"
              stroke="#aaa"
            />

            <Radar
              name="Skills"
              dataKey="value"
              stroke="#ef4444"
              fill="#ef4444"
              fillOpacity={0.6}
            />

          </RadarChart>
        </ResponsiveContainer>

      </div>

    </section>
  )
}