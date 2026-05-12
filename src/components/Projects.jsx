const projects = [
  {
    title: 'Mobile App UI',
    tags: ['UI Design', 'Mobile App'],
    view: '#',
    case: '#',
  },
  {
    title: 'Dashboard Design',
    tags: ['UI/UX', 'Web App'],
    view: '#',
    case: '#',
  },
  {
    title: 'Brand Identity',
    tags: ['Branding', 'Graphic Design'],
    view: '#',
    case: '#',
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00c896] uppercase tracking-widest text-xs font-semibold font-[Poppins]">Portfolio</span>
          <h2 className="text-4xl font-bold font-[Poppins] text-white mt-3 mb-2">Recent Projects</h2>
          <div className="w-12 h-1 bg-[#00c896] mx-auto mt-2 mb-12"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#161b22] rounded-2xl border border-[#1f2937] overflow-hidden hover:border-[#00c896]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 bg-[#0d1117] flex items-center justify-center">
                <div className="border-2 border-[#1f2937] rounded-3xl w-20 h-36 flex items-center justify-center text-[#8b949e]">
                  <i className="fas fa-mobile-alt text-3xl"></i>
                </div>
              </div>

              <div className="p-5">
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#00c896]/10 text-[#00c896] rounded-full text-xs font-semibold font-[Inter]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-white font-semibold font-[Poppins] text-lg mb-4">{project.title}</h3>

                <div className="flex gap-3">
                  <a
                    href={project.view}
                    className="flex-1 px-4 py-2 border border-[#1f2937] text-white rounded-lg text-sm font-medium hover:border-[#00c896] hover:text-[#00c896] transition-all text-center font-[Poppins]"
                  >
                    View
                  </a>
                  <a
                    href={project.case}
                    className="flex-1 px-4 py-2 border border-[#1f2937] text-white rounded-lg text-sm font-medium hover:border-[#00c896] hover:text-[#00c896] transition-all text-center font-[Poppins]"
                  >
                    Case
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00c896]"></div>
          <div className="w-2 h-2 rounded-full bg-[#1f2937]"></div>
          <div className="w-2 h-2 rounded-full bg-[#1f2937]"></div>
        </div>
      </div>
    </div>
  )
}
