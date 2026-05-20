import { useLang } from '../i18n.jsx'
import { content, EMAIL, BRAND } from '../content.js'

export default function Footer() {
  const { lang } = useLang()
  const t = content[lang].footer
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hair bg-[#0a0a0c]">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-[1.7fr_repeat(4,1fr)]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src="/favicon.svg"
                alt=""
                width="24"
                height="24"
                className="rounded-md ring-1 ring-hair"
              />
              <span className="text-[14px] font-semibold tracking-[-0.01em] text-white">
                {BRAND}
              </span>
            </div>
            <p className="mt-4 max-w-[30ch] text-[13.5px] leading-relaxed text-silver">
              {t.tagline}
            </p>
            <div className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-hair bg-white/[0.02] px-3 py-1.5">
              <span className="pulse-dot block h-2 w-2 rounded-full bg-status text-status" />
              <span className="text-[12px] text-fog">{t.status}</span>
            </div>
          </div>

          {/* Link columns */}
          {t.cols.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-silver/70">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13.5px] text-silver transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact column */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-silver/70">
              {t.contactTitle}
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-[13.5px] text-silver transition-colors duration-200 hover:text-white"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-hair pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-silver/70">
            &copy; {year} {BRAND}
          </p>
          <p className="text-[12.5px] text-silver/70">{t.rights}</p>
        </div>
      </div>
    </footer>
  )
}
