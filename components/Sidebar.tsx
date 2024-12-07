"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function Sidebar() {
  const [borderColor, setBorderColor] = useState('blue') // Initial border color is blue
  const [isHovered, setIsHovered] = useState(false) // Track hover state

  const handleImageHover = () => {
    if (!isHovered) { // Only toggle if not already hovered
      setBorderColor((prevColor) => (prevColor === 'blue' ? 'white' : 'blue')) // Toggle between blue and white
      setIsHovered(true) // Mark as hovered
    }
  }

  const handleImageLeave = () => {
    setIsHovered(false) // Reset hover state when mouse leaves
  }

  return (
    <aside className="lg:w-1/3 md:w-1/2 w-full space-y-6 first-line:h-screen bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="text-center">
        <Image
          src="/images/personal/moiz.jpg"
          alt="Almoiz Khan"
          width={200}
          height={200}
          className={`rounded-full mx-auto border-4 transition-all duration-300 ${borderColor === 'blue' ? 'border-blue-400' : 'border-white'}`}
          onMouseEnter={handleImageHover} // Change border color on hover
          onMouseLeave={handleImageLeave} // Reset hover state on mouse leave
        />
        <h1 className="text-2xl font-bold mt-4 text-blue-400">Almoiz Khan</h1>
        <h1 className="text-xl font-medium mt-2 text-white">Full Stack Developer</h1>
        <h1 className="text-lg font-medium mt-2 text-white">Building Responsive, Functional, and Detail-Focused Websites</h1>
        <p className="text-gray-400 mt-2">
          Based In Hyderabad, India<br />
          Computer Science UnderGrad<br />
          Web Development | DevOps | Open Source  
        </p>
      </div>
      <div className="flex justify-center space-x-6 mt-6">
        {[ 
          { Icon: Linkedin, href: 'https://www.linkedin.com/in/almoiz-khan/', label: 'LinkedIn' },
          { Icon: Github, href: 'https://github.com/moiz2405', label: 'GitHub' },
          { Icon: Twitter, href: 'https://x.com/Almoiz_Khan', label: 'Twitter' },
        ].map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-125"
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={24} />
          </a>
        ))}
      </div>
      <div className="flex flex-col space-y-4 mt-6">
        <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-colors">
          View Resume
        </Button>
        <Button className="bg-blue-400 text-gray-900 hover:bg-blue-500 transition-colors relative overflow-hidden">
  <span className="relative z-10">Contact Me</span>
  <span className="absolute inset-0 border-2 border-blue-500 animate-border-effect"></span>
</Button>

      </div>
    </aside>
  )
}
