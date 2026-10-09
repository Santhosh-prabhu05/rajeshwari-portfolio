
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Resume', 'resume'],
  ['Contact', 'contact'],
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#faf9f6]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="text-xl font-bold tracking-tight text-slate-900">
          RS<span className="text-amber-700">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-slate-600 transition hover:text-amber-700"
            >
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-800 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-[#faf9f6] px-5 py-3 md:hidden">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-800"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}