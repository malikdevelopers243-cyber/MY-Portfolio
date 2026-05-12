import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const activeClass = 'text-[#00c896] border-b-2 border-[#00c896]'
  const baseClass = 'text-[#8b949e] hover:text-white transition-colors duration-300 text-sm font-medium pb-0.5'

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0d1117]/80 backdrop-blur-md border-b border-[#1f2937]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-[#00c896] rounded-full"></div>
          <h1 className="text-white text-xl font-bold font-[Poppins]">Welcome to my Portfolio</h1>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/projects', label: 'Projects' },
            { to: '/resume', label: 'Resume' },
            { to: '/contact', label: 'Contact' },
          ].map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? 'bg-[#00c896] text-[#0d1117] shadow-lg shadow-[#00c896]/30'
                    : 'text-[#8b949e] hover:text-white hover:bg-[#1f2937]'
                }`
              }
              style={{
                animationDelay: `${index * 0.08}s`,
                animation: 'slideInRight 0.6s ease forwards',
                opacity: 0,
              }}
            >
              <span className="relative z-10">{link.label}</span>
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-white text-2xl p-2 rounded-lg hover:bg-[#1f2937] transition-colors"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </button>
      </div>

      <div className={`md:hidden fixed top-0 right-0 w-1/2 h-full bg-red-600 z-40 transition-transform duration-300 ease-in-out shadow-2xl ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-red-700">
            <h2 className="text-white text-xl font-bold font-[Poppins]">Menu</h2>
            <button
              className="text-white text-2xl p-3 rounded-full hover:bg-red-700 transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-4 px-4">
            {links.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-semibold transition-all duration-300 w-full text-center py-3 px-4 rounded-lg ${
                    isActive
                      ? 'text-white bg-red-700 scale-105 shadow-lg'
                      : 'text-white hover:bg-red-700'
                  }`
                }
                style={{
                  animationDelay: `${index * 0.08}s`,
                  animation: open ? 'slideInRight 0.5s ease forwards' : 'none',
                  opacity: open ? 0 : 1,
                  transform: open ? 'translateX(-50px)' : 'translateX(0)',
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="p-6 border-t border-red-700">
            <p className="text-white/80 text-sm text-center font-[Inter]">© 2024 Asad Malik</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
