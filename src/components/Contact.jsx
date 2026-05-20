import { useLang } from '../i18n.jsx'
import { content, EMAIL } from '../content.js'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const { lang } = useLang()
  const t = content[lang].contact
  const mail = `mailto:${EMAIL}?subject=${encodeURIComponent(t.mailSubject)}`

  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-28 sm:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 60% at 50% 100%, rgba(0,113,227,0.22), transparent 72%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hair-bright to-transparent"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 text-center sm:px-8">
        <Reveal>
          <Eyebrow>{t.tag}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-6 max-w-[18ch] text-[clamp(2.1rem,4.6vw,3.7rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-white">
            {t.title}
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-5 max-w-[44ch] text-[16px] leading-relaxed text-silver">
            {t.sub}
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-9 flex flex-col items-center gap-4">
            <a
              href={mail}
              className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-4 text-[15px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_64px_-18px_rgba(255,255,255,0.5)]"
            >
              {t.cta}
            </a>
            <a
              href={mail}
              className="font-mono text-[13.5px] text-silver transition-colors hover:text-white"
            >
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
