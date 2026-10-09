
import {
  BookOpen,
  Calculator,
  ChartNoAxesCombined,
  FileSpreadsheet,
  Users,
} from 'lucide-react'
import { skillGroups, languages } from '../data/portfolioData'

const icons = [
  Calculator,
  FileSpreadsheet,
  ChartNoAxesCombined,
  Users,
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-800">
            What I bring
          </p>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Skills and tools I have developed through my commerce studies,
            projects, and practical training.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] || BookOpen

            return (
              <article
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="font-bold text-slate-900">Languages Known</h3>
            <p className="mt-1 text-sm text-slate-600">
              Languages listed in my resume
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
            {languages.map((language) => (
              <span
                key={language}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}