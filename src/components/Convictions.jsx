import { useLang } from '../i18n.jsx'
import { content } from '../content.js'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'

export default function Convictions() {
  const { lang } = useLang()
  const t = content[lang].convictions

  return (
    <section id="principios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>{t.tag}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 max-w-[20ch] text-[clamp(1.85rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
            {t.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-3">
          {t.items.map((item, i) => (
            <Reveal
              key={item.big}
              delay={i * 110}
              className={`py-8 sm:py-2 ${
                i === 0 ? 'sm:pr-9' : 'border-t border-hair sm:border-l sm:border-t-0 sm:px-9'
              } ${i === t.items.length - 1 ? 'sm:pr-0' : ''}`}
            >
              <span className="block h-px w-9 bg-accent" aria-hidden="true" />
              <p className="mt-5 text-[clamp(1.55rem,2.4vw,2.25rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-white">
                {item.big}
              </p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-silver">
                {item.line}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
