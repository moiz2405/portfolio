'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: 'CodeNexus | Skill Development Platform',
    description: 'Full Stack Web Application | A platform for developers to learn and improve their skills',
    technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Auth0'],
    image: '/images/project-sc/codenexus.png',
    github: 'https://github.com/moiz2405/CODENEXUS',
    demo: 'https://code-nexus-delta.vercel.app/?__vercel_draft=1',
  },
  {
    title: 'MetaMint | NFT Marketplace',
    description: 'Full Stack Web Application | A platform for creators to mint, sell, and buy NFTs.',
    technologies: ['React', 'Next.js', 'Express', 'Supabase', 'Tailwind CSS', 'Next-Auth'],
    image: '/images/project-sc/metamint.png',
    github: 'https://github.com/moiz2405/Decentralized-Marketplace',
    demo: 'https://decentralized-marketplace-delta.vercel.app/',
  },
  {
    title: 'Fluent.AI | AI based Language Learning Platform',
    description: 'Full Stack Web Application | AI based English Learning Platform built Using Gemini-API',
    technologies: ['React', 'Next.js', 'Gemini-API', 'Express', 'Supabase', 'Tailwind CSS', 'Next-Auth'],
    image: '/images/project-sc/fluentai.png',
    github: 'https://github.com/moiz2405/Fluent.ai',
    demo: 'https://fluent-ai-three.vercel.app/',
  },
  {
    title: 'PortFolio | Personal Portfolio Website',
    description: 'Responsive Web Application | Personal Portfolio Website built using Next.js and Tailwind CSS',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'ShadCN-UI'],
    image: '/images/project-sc/portfolio.png', // Image fallback
    github: 'https://github.com/moiz2405/portfolio',
    demo: 'https://almoiz-khan-portfolio.vercel.app/',
  },
  {
    title: 'Custom-AI | AI Components based on Chrome Built-In AI',
    description: 'Different AI Components | Translator, Language Detector, Summarizer, Writer, Rewriter',
    technologies: ['React', 'Next.js', 'Chrome Built-in APIs', 'Tailwind CSS'],
    image: '/placeholder.svg', // Image fallback
    github: 'https://github.com/moiz2405/Custom-AI',
  },
  {
    title: 'AWS Usage Monitor | Cost Management Tool',
    description: 'Shell Script | A tool to monitor and manage AWS usage and costs',
    technologies: ['Shell Script', 'AWS CLI'],
    image: '/placeholder.svg', // Image fallback
    github: 'https://github.com/moiz2405/Aws-Montitor',
  },
  {
    title: 'Coal Mine Visualizer | Data Visualization Tool',
    description: 'Python Script | Visualize Coal Mines Carbon Footprints using Pandas and Matplotlib',
    technologies: ['Python', 'Pandas', 'Matplotlib'],
    image: '/placeholder.svg', // Image fallback
    github: 'https://github.com/moiz2405/coal-mine-visualizer',
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="projects" className="scroll-mt-20 relative">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.title} 
            className="relative group h-full transition-transform transform hover:scale-105" // Add smooth scaling transition
            onMouseEnter={() => setHoveredProject(project.title)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Hover Image Window (only if image and demo exist) */}
            {hoveredProject === project.title && project.image && project.demo && (
              <div className="absolute top-[-150px] left-0 w-full h-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="relative w-full h-full">
                  <Image 
                    src={project.image} 
                    alt={`${project.title} screenshot`} 
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-500" // Smooth transition for image opacity
                  />
                </div>
              </div>
            )}

            {/* Project Card */}
            <Card 
              className="bg-gray-800 border-gray-700 hover:shadow-lg transition-all duration-300 ease-in-out h-full"
            >
              <CardHeader>
                <CardTitle className="text-blue-400">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <Button asChild variant="outline" className="w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-colors">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">View Code</a>
                </Button>

                {/* Conditionally render Live Project button if demo link exists */}
                {project.demo && (
                  <Button asChild className="w-full sm:w-auto bg-blue-400 text-gray-900 hover:bg-blue-500 transition-colors relative overflow-hidden">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="relative z-10">
                    Live Project
                    <span className="absolute inset-0 border-2 border-blue-500 animate-border-effect"></span>
                  </a>
                </Button>
                
                )}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
