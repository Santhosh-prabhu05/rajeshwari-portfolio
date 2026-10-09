
import { ArrowDown, ArrowRight, MapPin } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Home() {
  return (
    <section
      id="home"
      className="scroll-mt-24 overflow-hidden"
    >
      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 lg:px-8 lg:py-20">
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">
            <span className="h-2 w-2 rounded-full bg-amber-600" />
            Commerce Student
          </span>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Hello, I'm
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            {personalInfo.name}
          </h1>

          <h2 className="mt-5 max-w-xl text-2xl font-semibold leading-snug text-amber-800 sm:text-3xl">
            {personalInfo.title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            {personalInfo.introduction}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={17} />
            {personalInfo.location}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:bg-amber-800"
            >
              Explore My Projects <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3.5 font-semibold text-slate-800 transition hover:border-amber-700 hover:text-amber-800"
            >
              Contact Me
            </a>
          </div>

          <a
            href="#about"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-amber-800"
          >
            Discover more <ArrowDown size={16} />
          </a>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border-2 border-amber-300" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-amber-50 shadow-xl">
              <img
                src="/images/profile.jpg"
                alt="Rajeshwari"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6 pt-16 text-white">
                <p className="text-lg font-semibold">Rajeshwari S</p>
                <p className="mt-1 text-sm text-white/80">
                  Accounting · Finance · Excel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}