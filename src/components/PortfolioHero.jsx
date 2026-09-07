import React from 'react';
import { FaBriefcase, FaCode, FaSmile, FaEnvelope } from 'react-icons/fa';
import yourPhoto from '../assets/your-photo.jpg'; // Agar photo ka naam kuch aur hai toh yahan change kar lena

export default function PortfolioHero() {
  return (
    <section id="home" className="bg-[#0a0e17] text-white font-sans min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-blue-500">YZ</span>
          <span className="text-lg font-semibold">Yash Zalavadiya</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-gray-400 text-sm font-medium">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Testimonials', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition">{item}</a>
          ))}
        </div>
        <a href="#contact" className="text-sm border border-gray-700 px-4 py-2 rounded-full hover:border-white transition">
          Download CV ↓
        </a>
      </nav>

      {/* Hero Content */}
      <div className="flex-grow flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 py-12 gap-12 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          <span className="text-blue-400 text-xs md:text-sm font-semibold tracking-widest uppercase block mb-3">
            SOFTWARE DEVELOPER
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            I Build <span className="text-blue-500">Scalable</span><br />Web Solutions
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
            Hi, I'm Yash Zalavadiya — a passionate computer science student who loves turning ideas into powerful, user-friendly digital experiences.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
              View My Work →
            </a>
            <a href="#contact" className="border border-gray-700 px-8 py-3 rounded-full font-semibold hover:border-white transition flex items-center gap-2">
              Get In Touch <FaEnvelope className="text-gray-400"/>
            </a>
          </div>

          {/* Tech Stack Icons - Fixed size */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-800/80">
            <span className="text-xs text-gray-500 font-bold tracking-wider mr-2">TECH I WORK WITH</span>
            <div className="flex items-center gap-4">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6 object-contain" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-6 h-6 object-contain invert" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6 object-contain" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6 object-contain" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-6 h-6 object-contain" />
            </div>
          </div>
        </div>

        {/* Photo + Stats Box */}
        <div className="relative flex justify-center items-center w-full lg:w-auto">
          {/* Glowing Ring Background */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none"></div>
          
          <div className="relative">
            <img 
              src={yourPhoto} 
              alt="Yash Zalavadiya" 
              className="relative rounded-full w-72 h-72 md:w-[400px] md:h-[400px] object-cover border-4 border-gray-800 shadow-2xl"
            />

            {/* Stats Card Overlay (Desktop) */}
            <div className="hidden sm:flex flex-col absolute -left-20 lg:-left-32 top-1/2 -translate-y-1/2 bg-[#111622]/90 backdrop-blur-md p-5 rounded-2xl border border-gray-800 shadow-2xl space-y-4 w-52">
              <div className="flex items-center gap-3">
                <FaBriefcase className="text-blue-400 text-2xl shrink-0"/>
                <div>
                  <div className="text-xl font-bold leading-none">1+</div>
                  <div className="text-xs text-gray-400 mt-1">Years Learning</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaCode className="text-blue-400 text-2xl shrink-0"/>
                <div>
                  <div className="text-xl font-bold leading-none">10+</div>
                  <div className="text-xs text-gray-400 mt-1">Projects Built</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaSmile className="text-blue-400 text-2xl shrink-0"/>
                <div>
                  <div className="text-xl font-bold leading-none">100%</div>
                  <div className="text-xs text-gray-400 mt-1">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}