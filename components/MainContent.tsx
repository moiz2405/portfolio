"use client";
import { useEffect } from 'react'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'

export default function MainContent() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'

    // Optional: Add scroll padding for fixed header
    document.documentElement.style.scrollPaddingTop = '80px'

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
      document.documentElement.style.scrollPaddingTop = '0'
    }
  }, [])

  return (
    <main
  className="lg:w-2/3 space-y-24 h-screen overflow-y-auto p-6 custom-scroll rounded-xl"
  style={{
    backgroundImage: "url('/images/wall.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.9,
  }}
>
  <section id="skills">
    <Skills />
  </section>
  <section id="projects">
    <Projects />
  </section>
  <section id="experience">
    <Experience />
  </section>
</main>

  )
}