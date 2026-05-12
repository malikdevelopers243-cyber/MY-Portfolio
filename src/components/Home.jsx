import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 25, 50 50 T 100 50' stroke='%2300c896' fill='none' stroke-width='0.5'/%3E%3Cpath d='M0 60 Q 25 35, 50 60 T 100 60' stroke='%2300c896' fill='none' stroke-width='0.5'/%3E%3Cpath d='M0 70 Q 25 45, 50 70 T 100 70' stroke='%2300c896' fill='none' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        <div className="space-y-6">
          <div className="animate-fadeInUp" style={{animationDelay:'0.1s'}}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00c896]/10 border border-[#00c896]/30 text-[#00c896] rounded-full text-sm mb-4">
              Hello !
            </span>
          </div>
          
          <h1 className="animate-fadeInUp text-6xl md:text-7xl font-black font-[Poppins] text-white leading-tight mb-2" style={{animationDelay:'0.2s'}}>
            I am Asad Malik
          </h1>
          
          <p className="animate-fadeInUp text-[#00c896] font-semibold text-xl mb-4 font-[Poppins]" style={{animationDelay:'0.3s'}}>
            Frontend Developer/React.js
          </p>
          
          <p className="animate-fadeInUp text-[#8b949e] text-sm leading-relaxed max-w-md mb-8 font-[Inter]" style={{animationDelay:'0.3s'}}>
            I craft beautiful, user-centered digital experiences that combine stunning design with powerful functionality. Let's build something amazing together.
          </p>
          
          <div className="animate-fadeInUp flex flex-col sm:flex-row gap-4" style={{animationDelay:'0.4s'}}>
            <Link
              to="/contact"
              className="px-8 py-3 bg-[#00c896] text-[#0d1117] font-bold rounded-lg hover:bg-[#00c896]/90 hover:scale-105 transition-all duration-300 text-sm font-[Poppins]"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        <div className="flex justify-center animate-fadeInUp" style={{animationDelay:'0.6s'}}>
          <div className="relative w-64 h-72 md:w-72 md:h-80">
            <div 
              className="absolute inset-0 bg-[#00c896]/20"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                filter: 'drop-shadow(0 0 20px rgba(0,200,150,0.3))',
              }}
            ></div>
            <div 
              className="absolute inset-0 flex items-center justify-center overflow-hidden"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
              <img 
                src="/My Photo.jpeg" 
                alt="Asad Malik" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
