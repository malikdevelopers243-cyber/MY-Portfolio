import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
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
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d1117] border-t border-[#1f2937] px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? 'text-[#00c896] font-medium text-sm' : 'text-[#8b949e] text-sm hover:text-white'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
