'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [text, setText] = useState('')
  const fullText = 'Almoiz Khan'
  const [isTyping, setIsTyping] = useState(true)
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Typing animation effect
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1))
        }, 150) // Adjust typing speed here
        return () => clearTimeout(timeout)
      } else {
        // Start erasing after a pause
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Wait 2 seconds before starting to erase
        return () => clearTimeout(timeout)
      }
    } else {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, -1))
        }, 100) // Adjust erasing speed here
        return () => clearTimeout(timeout)
      } else {
        // Start typing again after a pause
        const timeout = setTimeout(() => {
          setIsTyping(true)
        }, 1000) // Wait 1 second before starting to type again
        return () => clearTimeout(timeout)
      }
    }
  }, [text, isTyping])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="group relative">
            <span className="text-xl font-bold text-blue-400">
              {text}
            </span>
            <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-blue-400 animate-blink"/>
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Home
            </a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Skills
            </a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Projects
            </a>
            <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Experience
            </a>
          </div>
          <button 
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-300" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-2 space-y-2">
            <a href="#" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Home
            </a>
            <a href="#skills" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Skills
            </a>
            <a href="#projects" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Projects
            </a>
            <a href="#experience" className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
              Experience
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}