'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-xl font-bold text-blue-400">Almoiz Khan</a>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors">Experience</a>
          </div>
          <button className="md:hidden text-gray-300 hover:text-blue-400 transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-2 space-y-2">
            <a href="#" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors">Home</a>
            <a href="#skills" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
            <a href="#Experience" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors">Experience</a>
          </div>
        )}
      </div>
    </nav>
  )
}

