const projects = [
  {
    title: 'PulseFit',
    business: 'Fitness App',
    tags: ['Health', 'Mobile'],
    image: '/gym photo.png',
    view: '#',
    case: '#',
  },
  {
    title: 'ShopEase',
    business: 'E-commerce Platform',
    tags: ['Retail', 'Web'],
    image: '/projects/project2.svg',
    view: '#',
    case: '#',
  },
  {
    title: 'Evently',
    business: 'Event Booking',
    tags: ['Events', 'UI'],
    image: '/projects/project3.svg',
    view: '#',
    case: '#',
  },
  {
    title: 'TravelMate',
    business: 'Travel Planner',
    tags: ['Travel', 'Planning'],
    image: '/projects/project4.svg',
    view: '#',
    case: '#',
  },
  {
    title: 'EduWave',
    business: 'eLearning Portal',
    tags: ['Education', 'Platform'],
    image: '/projects/project5.svg',
    view: '#',
    case: '#',
  },
  {
    title: 'FoodFlow',
    business: 'Food Delivery',
    tags: ['Food', 'Delivery'],
    image: '/projects/project6.svg',
    view: '#',
    case: '#',
  },
  {
    title: 'GreenHome',
    business: 'Eco Services',
    tags: ['Sustainability', 'Service'],
    image: '/projects/project7.svg',
    view: '#',
    case: '#',
  },
  {
    title: 'CryptoCube',
    business: 'Crypto Tracker',
    tags: ['Finance', 'Dashboard'],
    image: '/projects/project8.svg',
    view: '#',
    case: '#',
  },
  {
    title: 'MediaHub',
    business: 'Streaming Service',
    tags: ['Media', 'Streaming'],
    image: '/projects/project9.svg',
    view: '#',
    case: '#',
  },
  {
    title: 'BuildSpace',
    business: 'Construction CRM',
    tags: ['Construction', 'B2B'],
    image: '/projects/project10.svg',
    view: '#',
    case: '#',
  },
]

export default function Projects({ previewCount = 0 }) {
  const displayProjects = previewCount > 0 ? projects.slice(0, previewCount) : projects
  const showViewAll = previewCount > 0 && projects.length > previewCount

  return (
    <div className="min-h-screen bg-[#0d1117] text-white pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00c896] uppercase tracking-widest text-xs font-semibold font-[Poppins]">Portfolio</span>
          <h2 className="text-4xl font-bold font-[Poppins] text-white mt-3 mb-2">Recent Projects</h2>
          <div className="w-12 h-1 bg-[#00c896] mx-auto mt-2 mb-12"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {displayProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#161b22] rounded-2xl border border-[#1f2937] overflow-hidden hover:border-[#00c896]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3 gap-3">
                  <div>
                    <h3 className="text-white font-semibold font-[Poppins] text-xl mb-1">{project.title}</h3>
                    <p className="text-[#00c896] text-sm font-medium font-[Inter]">{project.business}</p>
                  </div>
                  <span className="px-3 py-1 bg-[#00c896]/10 text-[#00c896] rounded-full text-xs font-semibold font-[Inter]">
                    {project.tags[0]}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(1).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#1f2937] text-[#8b949e] rounded-full text-xs font-medium font-[Inter]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

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

        {showViewAll && (
          <div className="text-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00c896] text-[#0d1117] rounded-full font-semibold hover:bg-[#00c896]/90 transition-all duration-300"
            >
              View all projects
            </a>
          </div>
        )}

        <div className="flex justify-center gap-2 mt-10">
          <div className="w-2 h-2 rounded-full bg-[#00c896]" />
          <div className="w-2 h-2 rounded-full bg-[#1f2937]" />
          <div className="w-2 h-2 rounded-full bg-[#1f2937]" />
        </div>
      </div>
    </div>
  )
}
