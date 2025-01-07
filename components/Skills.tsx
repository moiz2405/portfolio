'use client'

import { useState, useRef, useEffect } from 'react'
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
  { name: 'Tailwind', icon: SiTailwindcss },
]

function SkillItem({
  name,
  Icon,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  playSound,
}: {
  name: string
  Icon: React.ComponentType<{ size: number; className?: string }>
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  playSound: () => void
}) {
  return (
    <div
      className="group relative flex flex-col items-center p-4 bg-gray-800 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 border border-white border-opacity-30"
      onMouseEnter={() => {
        onMouseEnter()
        playSound()
      }}
      onMouseLeave={onMouseLeave}
    >
      <Icon
        size={32}
        className={`text-blue-400 transition-transform duration-700 ${isHovered ? 'rotate-[720deg] scale-110' : ''
          }`}
      />
      <span
        className={`mt-2 text-sm transition-colors duration-300 ${isHovered ? 'text-white' : 'text-gray-300'
          }`}
      >
        {name}
      </span>
      <div
        className={`absolute inset-0 rounded-lg transition-transform duration-300 ${isHovered ? 'border-2 border-purple-300 opacity-100' : 'opacity-0'
          }`}
      />
    </div>
  )
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // Create a ref to the audio element
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Set the volume of the audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2 // Set volume to 20%
    }
  }, [])

  // Function to play the sound when hovering over a skill
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0 // Reset the audio to the start
      audioRef.current.play().catch((error) => {
        console.error('Error playing sound:', error)
      })
    } else {
      console.error('Audio reference is null')
    }
  }

  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-6 text-blue-400 shadow-2xl shadow-blue-600">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            Icon={skill.icon}
            isHovered={hoveredSkill === skill.name}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            playSound={playSound}
          />
        ))}
      </div>
      <audio ref={audioRef} src="/sounds/pokemon_sound.mp3" preload="auto" />
    </section>
  )
}