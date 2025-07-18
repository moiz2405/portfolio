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
    title: " ML & Deep Learning Intern",
    company: "Shell India",
    period: "May-2025 - Jun-2025",
    description: "Improved accuracy of 3 ML models, Analyzed over 100K rows",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Numpy", "Matplotlib"]
  },
  {
    title: "AI/ML Intern",
    company: "Google India(via AICTE)",
    period: "Mar-2024 - Jun-2024",
    description: "Completed project-based learning on supervised and unsupervised ML algorithms",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "Numpy", "Matplotlib"]
  }
]

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Card
              className={`relative overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-lg border border-white border-opacity-25 transition-all duration-200 ${hoveredIndex === index ? "transform scale-[1.01] border-blue-400/50 shadow-lg shadow-blue-400/10" : ""
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="relative z-10 p-5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-100">{exp.title}</h3>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <p className="text-blue-400 mb-2 font-medium">{exp.company}</p>
                <p className="text-gray-300 mb-4 text-sm">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-blue-400/20 text-blue-200 border border-blue-400/30 transition-all duration-200 hover:bg-blue-400/30 hover:scale-105"
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