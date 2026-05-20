import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { useScrolled } from '../hooks'
import { content } from '../content.js'

function Logo() {
  return (
    <a
      href="/"
      className="flex shrink-0 items-center gap-2.5"
      aria-label="The Homebody Greyhound"
    >
      <img
        src="/favicon.svg"
        alt=""
        width="26"
        height="26"
        className="rounded-md ring-1 ring-hair"
      />
      <span className="text-[13.5px] font-semibold tracking-[-0.01em] text-white">
        The Homebody Greyhound
      </span>
    </a>
  )
}

export default function Navbar() {
  const { lang, toggle } = useLang()
  const t = content[lang].nav
  const scrolled = useScrolled(10)
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-colors duration-300 ${
        scrolled
          ? 'border-b border-hair bg-ink/80'
          : 'border-b border-transparent bg-ink/40'
      }`}
    >
      <div className="mx-auto flex h-[52px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex"
          aria-label={lang === 'es' ? 'Navegación principal' : 'Main navigation'}
        >
          {t.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-silver transition-colors duration-200 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={t.langAria}
            className="rounded-full border border-hair px-2.5 py-[5px] text-[11.5px] font-medium tracking-wide text-silver transition-colors duration-200 hover:border-hair-bright hover:text-white"
          >
            {t.langLabel}
          </button>

          <a
            href="/#contacto"
            className="hidden rounded-full border border-hair-bright bg-white/[0.04] px-4 py-[7px] text-[12.5px] font-medium text-white transition-all duration-200 hover:border-white/40 hover:bg-white/[0.08] hover:shadow-[0_10px_34px_-14px_rgba(0,113,227,0.7)] sm:inline-flex"
          >
            {t.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-hair text-white transition-colors hover:border-hair-bright md:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-[1.5px] w-4 bg-current transition-all duration-200 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-[1.5px] w-4 bg-current transition-all duration-300 ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-hair bg-ink/95 backdrop-blur-xl transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-80 border-b' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-5 pb-4 pt-1">
          {t.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-hair/60 py-3 text-[15px] text-fog transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contacto"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center rounded-lg bg-white px-4 py-2.5 text-[14px] font-semibold text-ink"
          >
            {t.cta}
          </a>
        </nav>
      </div>
    </header>
  )
}
