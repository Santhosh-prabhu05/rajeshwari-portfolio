
import { BriefcaseBusiness, CheckCircle2 } from 'lucide-react'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-800">
            Practical experience
          </p>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            My Projects
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Academic projects demonstrating my knowledge of accounting,
            inventory management, Excel, and business reporting.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#faf9f6] transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div className="absolute inset-0 hidden flex-col items-center justify-center gap-3 bg-amber-50 text-amber-800">
                  <BriefcaseBusiness size={42} />
                  <span className="font-semibold">{project.subtitle}</span>
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
                  Project 0{index + 1}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm font-semibold text-amber-800">
                  {project.subtitle}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-600">
                  <CheckCircle2 size={18} className="text-amber-700" />
                  Academic project
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}