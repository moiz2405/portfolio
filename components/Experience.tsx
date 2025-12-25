'use client'

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Founding Engineer & Lead Developer",
    company: "BharatNiti AI",
    period: "Dec 2025 - Present",
    description: "Owning end-to-end system architecture, development, deployment, and production scalability across the platform",
    skills: ["Next.js", "FastAPI", "AWS", "Docker"]
  },
  {
    title: "Full Stack Developer Intern",
    company: "BharatNiti AI",
    period: "Sep 2025 - Dec 2025",
    description: "Reduced cloud costs by ~90% ($300K to $20K/year), decomposed monolith to microservices, optimized APIs reducing 40-50% calls",
    skills: ["Next.js", "FastAPI", "Docker", "Kubernetes"]
  }
]

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
        Professional Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Card
              className={`relative overflow-hidden bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-xl border-2 border-gray-700 transition-all duration-300 ${hoveredIndex === index ? "transform scale-[1.02] border-blue-400 shadow-2xl shadow-blue-400/20" : "hover:border-gray-600"
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="relative z-10 p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-gray-100">{exp.title}</h3>
                  <span className="text-sm text-gray-400 font-medium">{exp.period}</span>
                </div>
                <p className="text-blue-400 mb-3 font-semibold text-lg">{exp.company}</p>
                <p className="text-gray-300 mb-5 text-sm leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-blue-500/20 text-blue-300 border border-blue-400/40 transition-all duration-200 hover:bg-blue-500/30 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/30 px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}