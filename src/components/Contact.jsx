
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

function Contact() {
  const contactLinks = [
    {
      name: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      value: 'Visit my LinkedIn profile',
      href: personalInfo.linkedin,
      icon: null,
    },
    {
      name: 'WhatsApp',
      value: 'Chat with me on WhatsApp',
      href: `https://wa.me/${personalInfo.whatsapp}`,
      icon: MessageCircle,
    },
  ]

  return (
    <section
      id="contact"
      className="bg-white px-6 py-20 text-slate-800 md:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink-600">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Feel free to connect with me for opportunities,
            professional networking, or a conversation!
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((contact) => {
            const Icon = contact.icon

            return (
              <a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  {Icon ? (
                    <Icon size={24} />
                  ) : (
                    <span className="text-xl font-extrabold text-blue-700">
                      in
                    </span>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-900">
                    {contact.name}
                  </h3>

                  <p className="mt-1 break-words text-sm text-slate-500">
                    {contact.value}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 opacity-50 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact