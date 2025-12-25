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
                className="rounded-full mx-auto border-4 border-blue-500 shadow-lg shadow-blue-500/50 transition-all duration-300"
              />
              <div
                className={`absolute inset-0 rounded-full transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  boxShadow: isHovered ? '0 0 15px 5px rgba(96, 165, 250, 0.7)' : '0 0 15px 5px rgba(255, 255, 255, 0.7)',
                  filter: 'blur(5px)',
                }}
              ></div>
            </div>
            <div className="flex justify-center space-x-8 mt-6">
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
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 relative group"
                >
                  <div className="relative p-2 rounded-lg bg-gray-700/50 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Icon size={24} className="transition-transform duration-300 ease-in-out group-hover:scale-110" />
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></span>
                  </div>
                </Link>
              ))}
            </div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold mt-6 transition-all duration-300 transform hover:scale-105">
              <Link 
                href="https://bharatniti.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors relative group inline-block"
              >
                Founding Engineer at BharatNiti AI
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </h1>
            <h3 className="text-base sm:text-lg font-medium mt-3 text-gray-300 leading-relaxed">
              End-to-End System Architecture & Production Scalability
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mt-3 leading-relaxed">
              Hyderabad, India<br />
              Development | System Design | DevOps
            </p>
          </div>

          <div className="flex flex-col space-y-4 mt-8">
            <StaticPokemon />
            {/* bout to add a rotating cat here  */}
            {/* <Cat /> */}
            <Link
              href="/resume/Almoiz_Khan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 py-3 px-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 flex items-center justify-center space-x-2 font-medium overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <FileText size={20} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">View Resume</span>
              <span className="absolute inset-0 border-2 border-blue-300 opacity-0 group-hover:opacity-50 rounded-xl transition-opacity duration-300 animate-pulse"></span>
            </Link>
            <Link
              href="mailto:almoizkhan907@gmail.com"
              className="group relative bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-600 hover:to-gray-700 border-2 border-gray-600 hover:border-blue-400 py-3 px-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500/30 flex items-center justify-center space-x-2 font-medium overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <Mail size={20} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 border-2 border-blue-400 opacity-0 group-hover:opacity-50 rounded-xl transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}