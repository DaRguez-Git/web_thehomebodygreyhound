import { useLang } from '../i18n.jsx'
import { content, EMAIL } from '../content.js'
import Reveal from './Reveal.jsx'

export default function Hero() {
  const { lang } = useLang()
  const t = content[lang].hero
  const mail = `mailto:${EMAIL}?subject=${encodeURIComponent(
    content[lang].contact.mailSubject,
  )}`

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="bg-tech-grid pointer-events-none absolute inset-0 opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(58% 46% at 50% 0%, rgba(0,113,227,0.20), transparent 72%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 py-32 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-hair bg-white/[0.03] px-3.5 py-1.5 text-[12px] text-silver">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {t.tag}
          </span>
        </Reveal>

        <Reveal delay={90}>
          <h1 className="mx-auto mt-7 max-w-[16ch] text-[clamp(2.5rem,7vw,5.4rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-white">
            {t.titleLead}
            <span className="bg-gradient-to-br from-white via-white to-[#6b6b73] bg-clip-text text-transparent">
              {t.titleAccent}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={170}>
          <p className="mx-auto mt-7 max-w-[58ch] text-[clamp(1.05rem,1.5vw,1.35rem)] leading-relaxed text-silver">
            {t.sub}
          </p>
        </Reveal>

        <Reveal delay={250}>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
            <a
              href={mail}
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-[14.5px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-18px_rgba(255,255,255,0.45)]"
            >
              {t.ctaPrimary}
            </a>
            <a
              href="#proceso"
              className="group inline-flex items-center gap-2 text-[14.5px] text-silver transition-colors hover:text-white"
            >
              {t.ctaSecondary}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.28em] text-silver/70">
          {t.scroll}
        </span>
        <span className="h-9 w-px bg-gradient-to-b from-silver/50 to-transparent" />
      </div>
    </section>
  )
}
