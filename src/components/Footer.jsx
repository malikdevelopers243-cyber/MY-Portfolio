import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-yellow border-t border-gray-200 py-2 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-sm font-[Inter]">
            Started my Career from 2024
          </div>

          <div className="flex gap-11">
            <a href="/" className="text-red-600 hover:text-[#00c896] transition-colors text-sm font-[Poppins]">Home</a>
            <a href="/projects" className="text-gray-600 hover:text-[#00c896] transition-colors text-sm font-[Poppins]">Projects</a>
            <a href="/resume" className="text-blue-600 hover:text-[#00c896] transition-colors text-sm font-[Poppins]">Resume</a>
            <a href="/contact" className="text-gray-600 hover:text-[#00c896] transition-colors text-sm font-[Poppins]">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/malikdevelopers243-cyber" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/malik-developers21" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-blue-600 hover:text-blue-600 transition-all">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.tiktok.com/@asad_malik205?_r=1&_t=ZS-96BOHkEKC8o" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-black hover:text-black transition-all">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://www.instagram.com/asad_malik054?igsh=aXFpM2gxbXlsMWt2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-pink-600 hover:text-pink-600 transition-all">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/share/1ByP8zbPFS/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-blue-800 hover:text-blue-800 transition-all">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
