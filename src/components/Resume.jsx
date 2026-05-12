const education = [
  { year: '2018 — 2020', title: 'Intermediate / FSC', place: 'Govt College of Multan', desc: 'Specialized in IT and Web Technologies' },
]
const experience = [
  { year: '2024 to 2025', title: 'Frontend Developer Intern', place: 'KK IT Solutions PVT LTD ', desc: 'Built responsive UIs using React and Tailwind CSS' },
  { year: '2025 — Present', title: 'Front-end Developer', place: 'NS TECH Multan', desc: 'Delivered 10+ client projects across various industries' },
]

const skills = [
  { name: 'Javscript', percentage: 90 },
  { name: 'React.js', percentage: 80 },
  { name: 'Next.js', percentage: 85 },
  { name: 'Tailwind CSS', percentage: 95 },
]

function Timeline({ items }) {
  return (
    <div className="space-y-8">
      {items.map((item, i) => (
        <div key={i} className="relative pl-8 border-l-2 border-[#00c896]/30">
          <div className="absolute left-0 top-0 w-4 h-4 bg-[#00c896] rounded-full -translate-x-1/2"></div>
          <div className="text-[#00c896] text-sm mb-1 font-[Inter]">{item.year}</div>
          <h4 className="text-xl font-bold text-white mb-1 font-[Poppins]">{item.title}</h4>
          <div className="text-[#00c896] text-sm mb-2 font-[Inter]">{item.place}</div>
          <p className="text-[#8b949e] text-sm font-[Inter]">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00c896] uppercase tracking-widest text-xs font-semibold font-[Poppins]">Resume</span>
          <h2 className="text-4xl font-bold font-[Poppins] text-white mt-3 mb-2">Education & Experience</h2>
          <div className="w-12 h-1 bg-[#00c896] mx-auto mt-2 mb-12"></div>
        </div>

        <div className="flex justify-center mb-12">
          <a
            href="/Asad Malik Frontend developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00c896] text-[#0d1117] rounded-lg font-bold hover:bg-[#00c896]/90 transition-colors font-[Poppins]"
          >
            <i className="fas fa-download"></i>
            Download MY Resume
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 font-[Poppins] text-[#00c896]">Education</h3>
            <Timeline items={education} />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 font-[Poppins] text-[#00c896]">Experience</h3>
            <Timeline items={experience} />
          </div>
        </div>

        <div className="bg-[#161b22] rounded-2xl border border-[#1f2937] p-8">
          <h3 className="text-2xl font-bold mb-8 font-[Poppins] text-white">Skills</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium font-[Inter]">{skill.name}</span>
                  <span className="text-[#00c896] font-medium font-[Inter]">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-[#0d1117] rounded-full h-2">
                  <div
                    className="bg-[#00c896] rounded-full h-2 transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
