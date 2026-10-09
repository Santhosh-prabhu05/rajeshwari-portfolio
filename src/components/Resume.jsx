
import { Download, ExternalLink, FileText } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid items-center gap-8 p-8 sm:p-12 md:grid-cols-[1fr_auto]">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-800">
              <FileText size={29} />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-amber-800">
              My qualifications
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              My Resume
            </h2>
            <p className="mt-4 max-w-lg leading-7 text-slate-600">
              Explore my educational background, skills, internships, and
              academic projects in my resume.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-amber-800"
              >
                View Resume <ExternalLink size={17} />
              </a>

              <a
                href="/resume.pdf"
                download="Rajeshwari-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:border-amber-700 hover:text-amber-800"
              >
                Download Resume <Download size={17} />
              </a>
            </div>
          </div>

          <div className="hidden h-44 w-36 items-center justify-center rounded-2xl bg-amber-50 text-amber-800 md:flex">
            <FileText size={76} strokeWidth={1.2} />
          </div>
        </div>
      </div>
    </section>
  )
}