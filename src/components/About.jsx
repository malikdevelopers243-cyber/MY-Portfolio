export default function About() {
  const services = [
    {
      icon: 'profile',
      title: 'Frontend Development',
      desc: 'Creating modern, responsive, and interactive user interfaces using React, JavaScript, and cutting-edge web technologies to deliver exceptional user experiences.',
      highlight: true,
    },
    {
      icon: 'profile',
      title: 'WordPress SEO',
      desc: 'Optimizing WordPress websites for search engines, improving visibility, and driving organic traffic through effective SEO strategies and best practices.',
      highlight: false,
    },
    {
      icon: 'profile',
      title: 'Business Development',
      desc: 'Helping businesses grow through strategic planning, market analysis, and implementing effective digital solutions for sustainable growth.',
      highlight: false,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0d1117] text-white pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00c896] uppercase tracking-widest text-xs font-semibold font-[Poppins]">My Services</span>
          <h2 className="text-4xl font-bold font-[Poppins] text-white mt-3 mb-2">What I Do</h2>
          <div className="w-12 h-1 bg-[#00c896] mx-auto mt-2 mb-12"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-[#161b22] rounded-2xl border p-6 hover:-translate-y-2 transition-all duration-300 group ${
                service.highlight ? 'border-[#00c896]' : 'border-[#1f2937] hover:border-[#00c896]/50'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#00c896]/10 border border-[#00c896]/30 flex items-center justify-center text-[#00c896] text-xl mb-4 group-hover:bg-[#00c896]/20 transition-colors overflow-hidden">
                {service.icon === 'profile' ? (
                  <img src="/My Photo.jpeg" alt="Profile" className="w-full h-full object-cover rounded-xl" />
                ) : (
                  <i className={`fas ${service.icon}`}></i>
                )}
              </div>
              <h3 className="text-white font-semibold font-[Poppins] text-lg mb-2">{service.title}</h3>
              <p className="text-[#8b949e] text-sm font-[Inter] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
