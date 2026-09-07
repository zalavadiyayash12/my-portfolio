import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBriefcase, FaCode, FaSmile, FaEnvelope, FaUser, FaMapMarkerAlt, 
  FaLaptopCode, FaServer, FaPaintBrush, FaChartLine, FaExternalLinkAlt, 
  FaStar, FaAward, FaCheckCircle, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane, FaTimes, FaBars 
} from 'react-icons/fa';
import { portfolioData } from './data/portfolioData';
import yourPhoto from './assets/your-photo.jpg';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0a0e17] text-slate-100 font-sans min-h-screen selection:bg-blue-600 selection:text-white overflow-x-hidden relative">
      
      {/* --- LOADING SCREEN ANIMATION --- */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[99999] bg-[#070a10] flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-[2px] shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              <div className="w-full h-full bg-[#0a0e17] rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">YZ</span>
              </div>
            </div>
            <div className="text-slate-300 font-semibold tracking-widest text-xs uppercase animate-pulse mt-4">
              Loading Portfolio...
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ALL PROJECTS MODAL --- */}
      <AnimatePresence>
        {showAllProjects && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0f1523] border border-slate-800 rounded-3xl max-w-5xl w-full max-h-[85vh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative"
            >
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">COMPLETE ARCHIVE</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 mt-1">All Projects ({portfolioData.projects.length})</h3>
                </div>
                <button 
                  onClick={() => setShowAllProjects(false)}
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {portfolioData.projects.map((project, index) => (
                  <div key={index} className="bg-[#111622] rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between">
                    <div className="p-5 bg-slate-950/40 border-b border-slate-800/60 h-36 flex items-center justify-center relative">
                      <div className="text-center">
                        <h4 className="text-sm font-bold text-slate-200">{project.title} <span className="text-[10px] text-blue-400 font-normal ml-1">{project.tag}</span></h4>
                        <p className="text-[11px] text-slate-400 mt-1">{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <p className="text-slate-400 text-xs leading-relaxed mb-4">{project.description}</p>
                      <div className="flex justify-between items-center pt-3 border-t border-slate-800">
                        <span className="text-[10px] text-blue-400 font-medium">{project.tech}</span>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition">
                          <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Content */}
      <div className="relative z-10">
        
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* --- NAVBAR --- */}
        <nav className="flex items-center justify-between px-5 sm:px-12 py-4 border-b border-slate-800/80 sticky top-0 bg-[#0a0e17]/90 backdrop-blur-md z-40">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1.5px] shadow-md">
              <div className="w-full h-full bg-[#0a0e17] rounded-xl flex items-center justify-center">
                <span className="text-xs font-black bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">YZ</span>
              </div>
            </div>
            <span className="text-sm sm:text-base font-bold tracking-wide text-slate-200">{portfolioData.name}</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-slate-400 text-sm font-medium">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition">{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={portfolioData.cvUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              download 
              className="text-xs border border-slate-700 px-3.5 py-2 rounded-full hover:border-white transition font-medium hidden sm:inline-block"
            >
              Download CV ↓
            </a>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0f1523] border-b border-slate-800 px-6 py-4 space-y-3 sticky top-[69px] z-30 shadow-2xl"
            >
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Testimonials', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-slate-300 hover:text-blue-400 py-1.5 transition font-medium border-b border-slate-800/50 last:border-none"
                >
                  {item}
                </a>
              ))}
              <div className="pt-2">
                <a 
                  href={portfolioData.cvUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  download 
                  className="block text-center text-xs border border-slate-700 bg-slate-900 py-2.5 rounded-xl font-medium text-slate-200"
                >
                  Download CV ↓
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- HERO SECTION --- */}
        <section id="home" className="max-w-7xl mx-auto px-5 sm:px-12 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          <div className="max-w-2xl w-full text-center lg:text-left">
            <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase block mb-2">
              {portfolioData.role}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-5">
              I Build <span className="text-blue-500">Scalable</span><br />
              Web Solutions
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mb-8 leading-relaxed">
              {portfolioData.aboutBio}
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold transition text-xs sm:text-sm shadow-lg shadow-blue-600/30">
                View My Work →
              </a>
              <a href="#contact" className="border border-slate-700 hover:border-slate-500 text-slate-200 px-7 py-3 rounded-full font-semibold transition text-xs sm:text-sm flex items-center gap-2">
                Get In Touch <FaEnvelope className="text-slate-400 text-xs"/>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <span className="text-[11px] text-slate-500 font-bold tracking-wider">TECH I WORK WITH</span>
              <div className="flex items-center gap-4 text-lg">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-5 h-5 object-contain" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-5 h-5 object-contain invert" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-5 h-5 object-contain" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-5 h-5 object-contain" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-5 h-5 object-contain" />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center w-full lg:w-auto mt-4 lg:mt-0">
            <div className="absolute w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full bg-blue-500/20 blur-2xl pointer-events-none"></div>
            
            <div className="relative p-1.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-xl">
              <div className="bg-[#0a0e17] rounded-full">
                <img 
                  src={yourPhoto} 
                  alt={portfolioData.name} 
                  className="rounded-full w-60 h-60 sm:w-[340px] sm:h-[340px] object-cover object-top shadow-2xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6 w-full max-w-xs sm:max-w-sm">
              <div className="bg-[#111622] p-3 rounded-2xl border border-slate-800 text-center shadow">
                <FaBriefcase className="text-blue-400 text-base mx-auto mb-1.5"/>
                <div className="text-sm sm:text-base font-bold leading-tight">{portfolioData.stats[0].value}</div>
                <div className="text-[9px] text-slate-400 mt-0.5 uppercase tracking-wider">{portfolioData.stats[0].label}</div>
              </div>
              <div className="bg-[#111622] p-3 rounded-2xl border border-slate-800 text-center shadow">
                <FaCode className="text-blue-400 text-base mx-auto mb-1.5"/>
                <div className="text-sm sm:text-base font-bold leading-tight">{portfolioData.stats[1].value}</div>
                <div className="text-[9px] text-slate-400 mt-0.5 uppercase tracking-wider">{portfolioData.stats[1].label}</div>
              </div>
              <div className="bg-[#111622] p-3 rounded-2xl border border-slate-800 text-center shadow">
                <FaSmile className="text-blue-400 text-base mx-auto mb-1.5"/>
                <div className="text-sm sm:text-base font-bold leading-tight">{portfolioData.stats[2].value}</div>
                <div className="text-[9px] text-slate-400 mt-0.5 uppercase tracking-wider">{portfolioData.stats[2].label}</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT ME --- */}
        <section id="about" className="max-w-7xl mx-auto px-5 sm:px-12 py-16 border-t border-slate-800 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase block mb-2">ABOUT ME</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight mb-4">
                Building products with <span className="text-blue-500">clean code</span> and <span className="text-white">real impact.</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                {portfolioData.detailedBio}
              </p>
              <a href="#contact" className="border border-slate-700 bg-slate-900/50 hover:bg-slate-800 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition">
                More About Me <FaUser className="text-[10px] text-blue-400"/>
              </a>
            </div>

            <div className="bg-[#111622] p-6 sm:p-10 rounded-3xl border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-xl">
              <div className="flex items-start gap-3">
                <FaUser className="text-slate-600 text-lg mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-500 mb-0.5 uppercase tracking-wider">Name</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">{portfolioData.name}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-slate-600 text-lg mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-500 mb-0.5 uppercase tracking-wider">Email</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 break-all">{portfolioData.email}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-slate-600 text-lg mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-500 mb-0.5 uppercase tracking-wider">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">{portfolioData.location}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaBriefcase className="text-slate-600 text-lg mt-0.5 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-500 mb-0.5 uppercase tracking-wider">Availability</div>
                  <div className="text-xs sm:text-sm font-semibold text-emerald-400">{portfolioData.availability}</div>
                </div>
              </div>
            </div>
          </div>

          <div id="skills" className="mt-20">
            <div className="text-center mb-10">
              <span className="text-blue-400 text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-900/50">
                SKILLS & SERVICES
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {portfolioData.skills.map((skill, index) => (
                <div key={index} className="bg-[#111622] p-6 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-lg mb-4">
                    {index === 0 ? <FaLaptopCode /> : index === 1 ? <FaServer /> : index === 2 ? <FaPaintBrush /> : <FaChartLine />}
                  </div>
                  <h3 className="text-base font-bold mb-2 text-slate-100">{skill.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">{skill.description}</p>
                  <div className="text-blue-400 text-[11px] font-semibold tracking-wide">{skill.tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FEATURED PROJECTS --- */}
        <section id="projects" className="max-w-7xl mx-auto px-5 sm:px-12 py-16 border-t border-slate-800 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-3">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-900/50">
              FEATURED PROJECTS
            </span>
            <button 
              onClick={() => setShowAllProjects(true)}
              className="text-xs font-semibold text-slate-300 hover:text-blue-400 transition flex items-center gap-1 bg-slate-900/60 border border-slate-800 px-4 py-2 rounded-full cursor-pointer"
            >
              View All Projects ({portfolioData.projects.length}) →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioData.projects.slice(0, 3).map((project, index) => (
              <div key={index} className="bg-[#111622] rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between">
                <div className="p-5 bg-slate-950/40 border-b border-slate-800/60 h-40 flex items-center justify-center relative">
                  <div className="text-center">
                    <h4 className="text-sm font-bold text-slate-200">{project.title} <span className="text-[10px] text-blue-400 font-normal ml-1">{project.tag}</span></h4>
                    <p className="text-[11px] text-slate-400 mt-1">{project.subtitle}</p>
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <p className="text-slate-400 text-xs leading-relaxed mb-5">{project.description}</p>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-800">
                    <span className="text-[10px] text-blue-400 font-medium">{project.tech}</span>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition">
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- EXPERIENCE & EDUCATION --- */}
        <section id="experience" className="max-w-7xl mx-auto px-5 sm:px-12 py-16 border-t border-slate-800 relative z-10">
          <div className="text-center mb-12">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-900/50">
              EXPERIENCE & EDUCATION
            </span>
          </div>

          <div className="relative border-l-2 border-blue-600/30 ml-3 sm:ml-1/2 space-y-10 pl-5 sm:pl-8">
            {portfolioData.experience.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[27px] sm:-left-[41px] top-1 w-3.5 h-3.5 rounded-full bg-blue-600 border-4 border-[#0a0e17]"></div>
                <span className="text-[11px] font-semibold text-blue-400 tracking-wider">{item.period}</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-0.5">{item.role}</h3>
                <p className="text-xs font-medium text-slate-400 mb-1.5">{item.company}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- TESTIMONIALS & ACHIEVEMENTS --- */}
        <section id="testimonials" className="max-w-7xl mx-auto px-5 sm:px-12 py-16 border-t border-slate-800 relative z-10">
          <div className="text-center mb-12">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-900/50">
              TESTIMONIALS & ACHIEVEMENTS
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div className="bg-[#111622] p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between h-full">
              <div className="text-blue-400 text-3xl font-serif mb-2">“</div>
              <p className="text-slate-300 text-xs leading-relaxed mb-5">{portfolioData.testimonials[0].quote}</p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center font-bold text-blue-400 text-xs">{portfolioData.testimonials[0].initials}</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">{portfolioData.testimonials[0].name}</h4>
                    <p className="text-[10px] text-slate-400">{portfolioData.testimonials[0].role}</p>
                  </div>
                </div>
                <div className="flex text-amber-400 text-[10px] gap-0.5">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
              </div>
            </div>

            <div className="bg-[#111622] p-6 sm:p-8 rounded-3xl border border-slate-800 flex justify-around items-center text-center">
              {portfolioData.achievements.map((ach, index) => (
                <React.Fragment key={index}>
                  <div>
                    <div className="w-10 h-10 mx-auto rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-base mb-2">
                      {index === 1 ? <FaStar /> : index === 2 ? <FaCheckCircle /> : <FaAward />}
                    </div>
                    <h4 className="text-sm font-bold text-slate-100">{ach.title}</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">{ach.sub}</p>
                  </div>
                  {index < portfolioData.achievements.length - 1 && <div className="w-px h-12 bg-slate-800"></div>}
                </React.Fragment>
              ))}
            </div>

            <div className="bg-[#111622] p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col justify-between h-full">
              <div className="text-blue-400 text-3xl font-serif mb-2">“</div>
              <p className="text-slate-300 text-xs leading-relaxed mb-5">{portfolioData.testimonials[1].quote}</p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center font-bold text-purple-400 text-xs">{portfolioData.testimonials[1].initials}</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">{portfolioData.testimonials[1].name}</h4>
                    <p className="text-[10px] text-slate-400">{portfolioData.testimonials[1].role}</p>
                  </div>
                </div>
                <div className="flex text-amber-400 text-[10px] gap-0.5">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION (Formspree Working Action) --- */}
        <section id="contact" className="max-w-7xl mx-auto px-5 sm:px-12 py-16 border-t border-slate-800 relative z-10">
          <div className="text-center mb-12">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-900/50">
              GET IN TOUCH
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-100">Have a project in mind or want to work together?</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6">Feel free to reach out, I'll get back to you!</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-sm">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Email</div>
                    <div className="text-xs sm:text-sm text-slate-200 font-medium">{portfolioData.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-sm">
                    <FaPhone />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Phone</div>
                    <div className="text-xs sm:text-sm text-slate-200 font-medium">{portfolioData.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-sm">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">Location</div>
                    <div className="text-xs sm:text-sm text-slate-200 font-medium">{portfolioData.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Formspree Action Method (100% Reliable) */}
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="bg-[#111622] p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1.5">Your Name</label>
                  <input type="text" name="name" placeholder="John Doe" required className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500 transition" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1.5">Your Email</label>
                  <input type="email" name="email" placeholder="john@example.com" required className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500 transition" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1.5">Subject</label>
                <input type="text" name="subject" placeholder="Project Inquiry" className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500 transition" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1.5">Your Message</label>
                <textarea name="message" placeholder="Write your message here..." required className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-blue-500 transition h-28 resize-none block" />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer">
                Send Message <FaPaperPlane className="text-[10px]" />
              </button>
            </form>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="border-t border-slate-800 bg-[#070a10] py-12 px-5 sm:px-12 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1px]">
                  <div className="w-full h-full bg-[#0a0e17] rounded-lg flex items-center justify-center">
                    <span className="text-[10px] font-black text-blue-400">YZ</span>
                  </div>
                </div>
                <span className="text-sm font-semibold tracking-wide">{portfolioData.name}</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Building digital experiences that are fast, accessible and user-focused.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase mb-3">Quick Links</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
                <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase mb-3">Connect</h4>
              <div className="flex items-center gap-3 text-slate-400 text-base">
                <a href={portfolioData.socials.github} className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-blue-500 transition"><FaGithub /></a>
                <a href={portfolioData.socials.linkedin} className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-blue-500 transition"><FaLinkedin /></a>
                <a href={portfolioData.socials.twitter} className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-blue-500 transition"><FaTwitter /></a>
                <a href={portfolioData.socials.instagram} className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-blue-500 transition"><FaInstagram /></a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase mb-3">Newsletter</h4>
              <p className="text-[11px] text-slate-400 mb-3">Stay updated with my latest projects and articles.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-blue-500 w-full" />
                <button className="bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-xl text-white transition text-xs font-semibold">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500">
            <p>© 2026 {portfolioData.name}. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">
              Built with ❤️ and React
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}