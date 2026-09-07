import React from 'react';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaBriefcase } from 'react-icons/fa';

export default function PortfolioAbout() {
  return (
    <section id="about" className="bg-[#0a0e17] text-white font-sans px-8 md:px-16 py-24 border-t border-gray-800">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Side Text */}
        <div>
          <span className="text-blue-400 text-sm font-medium tracking-wider block mb-3">ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-10">
            Building products with <span className="text-blue-500">clean code</span> and <span className="text-white">real impact.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at the intersection of design and technology.
            {/* Yahan apna detailed About Me likho */}
          </p>
          <button className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-2">
            More About Me →
          </button>
        </div>

        {/* Right Side Details */}
        <div className="bg-[#111622] p-12 rounded-3xl border border-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
          <div className="flex items-start gap-4">
            <FaUser className="text-gray-600 text-2xl mt-1" />
            <div>
                <div className="text-sm text-gray-500 mb-1">Name</div>
                <div className="font-semibold">Abdullah Tariq</div> {/* Apna Naam */}
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-gray-600 text-2xl mt-1" />
            <div>
                <div className="text-sm text-gray-500 mb-1">Email</div>
                <div className="font-semibold break-all">abdullahtariq.dev@gmail.com</div> {/* Apna Email */}
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-gray-600 text-2xl mt-1" />
            <div>
                <div className="text-sm text-gray-500 mb-1">Location</div>
                <div className="font-semibold">Lahore, Pakistan</div> {/* Apna Sheher */}
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaBriefcase className="text-gray-600 text-2xl mt-1" />
            <div>
                <div className="text-sm text-gray-500 mb-1">Availability</div>
                <div className="font-semibold text-green-400">Open for opportunities</div> {/* Availability Status */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}