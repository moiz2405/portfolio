'use client'

import Image from 'next/image';
import { Github, Linkedin, Twitter, FileText, Mail } from 'lucide-react';
import { useState } from 'react';
import StaticPokemon from './StaticPokemon';
import Link from 'next/link';
// import Cat from '../components/Cat';
export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      className="lg:w-1/3 md:w-1/2 w-full min-h-screen bg-gray-800 
      p-2 sm:p-0  shadow-2xl flex flex-col transform transition-all duration-500 ease-in-out 
      hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full rounded-lg bg-gray-800 p-4 sm:p-6">
        <div className="box absolute inset-0 rounded-lg"></div>

        <div className="flex-grow space-y-6 relative z-10">
          <div className="text-center relative">
            <div
              className={`relative inline-block rounded-full transition-all duration-300 ${isHovered ? 'animate-in' : 'animate-out'}`}
            >
              <Image
                src="/images/personal/moiz.jpg"
                alt="Almoiz Khan"
                width={200}
                height={200}
                className="rounded-full mx-auto border-2 border-blue-500 transition-all duration-300"
              />
              <div
                className={`absolute inset-0 rounded-full transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  boxShadow: isHovered ? '0 0 15px 5px rgba(96, 165, 250, 0.7)' : '0 0 15px 5px rgba(255, 255, 255, 0.7)',
                  filter: 'blur(5px)',
                }}
              ></div>
            </div>
            <div className="flex justify-center space-x-6 mt-6">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/almoiz-khan/', label: 'LinkedIn' },
                { Icon: Github, href: 'https://github.com/moiz2405', label: 'GitHub' },
                { Icon: Twitter, href: 'https://x.com/Almoiz_Khan', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-125 hover:rotate-12 relative group"
                >
                  <Icon size={28} className="transition-transform duration-300 ease-in-out group-hover:scale-110" />
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></span>
                </Link>
              ))}
            </div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mt-4 text-blue-400 transition-all duration-300 transform hover:scale-110 hover:text-white">
              Full Stack Developer
            </h1>
            <h3 className="text-base sm:text-lg font-medium mt-2 text-white">
              Building Responsive, Functional, and Detail-Focused Websites
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mt-2">
              Based In Hyderabad, India<br />
              Computer Science UnderGrad<br />
              Web Development | DevOps | Open Source
            </p>
          </div>

          <div className="flex flex-col space-y-6 mt-6">
            <StaticPokemon />
            {/* bout to add a rotating cat here  */}
            {/* <Cat /> */}
            <Link
              href="/resume/AlmoizKhan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-gray-900 hover:bg-blue-500 py-2 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FileText size={20} />
              <span>View Resume</span>
            </Link>
            <Link
              href="mailto:almoizkhan907@gmail.com"
              className="bg-blue-400 text-gray-900 hover:bg-blue-500 py-2 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}