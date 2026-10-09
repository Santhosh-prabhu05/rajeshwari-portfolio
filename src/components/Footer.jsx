
import { ArrowUp } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#faf9f6] px-5 py-7">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <a
          href="#home"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-amber-800"
        >
          Back to top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  )
}