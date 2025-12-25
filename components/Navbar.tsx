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
      isScrolled 
        ? 'bg-gray-800/95 backdrop-blur-xl shadow-lg shadow-blue-500/10 border-b border-gray-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="group relative ml-4">
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-300 hover:to-blue-500 transition-all duration-300">
              {text}
            </span>
            <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-gradient-to-b from-blue-400 to-blue-600 animate-blink shadow-lg shadow-blue-500/50"/>
          </a>
          <div className="hidden md:flex space-x-8 mr-4">
            <a href="#" className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 group py-1">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 group py-1">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 group py-1">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#experience" className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 group py-1">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <button 
            className="md:hidden text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-90 p-2 rounded-lg hover:bg-blue-500/10" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 space-y-1 bg-gray-800/95 backdrop-blur-xl rounded-b-xl border-t border-gray-700/50 shadow-lg animate-in slide-in-from-top duration-300">
            <a href="#" className="block py-3 px-4 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300">
              Home
            </a>
            <a href="#skills" className="block py-3 px-4 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300">
              Skills
            </a>
            <a href="#projects" className="block py-3 px-4 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300">
              Projects
            </a>
            <a href="#experience" className="block py-3 px-4 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300">
              Experience
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}