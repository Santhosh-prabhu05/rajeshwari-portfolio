
import { BookOpen, Target, Lightbulb } from 'lucide-react'
import AcademicJourney from './AcademicJourney'

function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
            Get to Know Me
          </p>

          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            About Me
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-pink-500" />
        </div>

        {/* About Me Content */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          <p className="text-base leading-8 text-slate-600 md:text-lg">
            I am a motivated and enthusiastic B.Com Computer
            Applications student at SSM College of Arts and Science,
            Dindigul, with a strong interest in accounting, finance,
            and data analysis. I have knowledge of Tally Prime,
            financial accounting, bookkeeping, GST basics, and
            Microsoft Excel. I enjoy working with financial data,
            organizing information, and identifying useful insights
            through Excel formulas, PivotTables, and charts. Through
            my academic projects and industrial training experiences,
            I have developed my teamwork, communication,
            problem-solving, and time-management skills. I am eager
            to enhance my practical knowledge, learn new technologies,
            and contribute to an organization while building my
            career in accounting, finance, and data analysis.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-pink-50 p-5">
              <BookOpen className="mb-3 text-pink-600" size={26} />
              <h3 className="font-semibold text-slate-900">
                Education
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                B.Com Computer Applications
              </p>
            </div>

            <div className="rounded-xl bg-purple-50 p-5">
              <Target className="mb-3 text-purple-600" size={26} />
              <h3 className="font-semibold text-slate-900">
                Career Interest
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Accounting, Finance & Data Analysis
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-5">
              <Lightbulb className="mb-3 text-blue-600" size={26} />
              <h3 className="font-semibold text-slate-900">
                Strengths
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Teamwork, Problem Solving & Quick Learning
              </p>
            </div>
          </div>
        </div>

        {/* Academic Journey */}
        <div className="mt-20">
          <AcademicJourney />
        </div>
      </div>
    </section>
  )
}

export default About