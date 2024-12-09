'use client'

import { useState } from 'react'
import { 
  FaJs, FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaHtml5, FaCss3Alt 
} from 'react-icons/fa'
import { 
  SiTypescript, SiNextdotjs, SiExpress, SiMongodb, 
  SiPostgresql, SiKubernetes, SiTailwindcss 
} from 'react-icons/si'

const skills = [
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Docker', icon: FaDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'AWS', icon: FaAws },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Python', icon: FaPython },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className="group flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="relative">
              <skill.icon 
                size={32} 
                className={`text-blue-400 transition-all duration-500 ease-in-out transform ${
                  hoveredSkill === skill.name ? 'rotate-[720deg] scale-110' : 'rotate-0'
                }`}
              />
              <div 
                className={`absolute inset-0 bg-blue-400 rounded-full transition-all duration-300 ${
                  hoveredSkill === skill.name ? 'opacity-20 scale-150' : 'opacity-0 scale-0'
                }`}></div>
            </div>
            <span className={`mt-2 text-sm transition-all duration-300 ${
              hoveredSkill === skill.name ? 'text-white' : 'text-gray-300'
            }`}>
              {skill.name}
            </span>
            {/* Bright border on hover */}
            <div 
              className={`absolute inset-0 rounded-lg transition-all duration-300 transform ${
                hoveredSkill === skill.name 
                  ? 'border-2 border-purple-300 opacity-100' 
                  : 'border-1 border-transparent opacity-0'
              }`}>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
