
import { GraduationCap, School, BookOpen } from 'lucide-react'
import { education } from '../data/portfolioData'

const educationIcons = [GraduationCap, School, BookOpen]

function AcademicJourney() {
  return (
    <section id="academic-journey" className="scroll-mt-24">
      {/* Heading */}
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
          My Educational Background
        </p>

        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Academic Journey
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
          My educational journey has helped me build a foundation in
          commerce, computer applications, accounting, and finance.
        </p>

        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-pink-500" />
      </div>

      {/* Education Cards */}
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {education.map((item, index) => {
          const Icon = educationIcons[index % educationIcons.length]

          return (
            <article
              key={item.degree}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600 transition group-hover:bg-pink-600 group-hover:text-white">
                <Icon size={25} />
              </div>

              <p className="mb-2 text-sm font-medium text-pink-600">
                {item.duration}
              </p>

              <h3 className="text-lg font-bold leading-7 text-slate-900">
                {item.degree}
              </h3>

              <p className="mt-3 leading-6 text-slate-600">
                {item.institution}
              </p>

              <div className="mt-5 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                {item.score}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AcademicJourney