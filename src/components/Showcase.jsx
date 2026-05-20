import { useLang } from '../i18n.jsx'
import { content } from '../content.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Showcase() {
  const { lang } = useLang()
  const t = content[lang].showcase

  return (
    <section id="producto" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.tag}
          title={t.title}
          sub={t.sub}
          align="center"
        />

        <Reveal delay={150} className="mt-9 flex justify-center">
          <a
            href="/oficio/"
            className="group inline-flex items-center gap-2 rounded-lg border border-hair-bright bg-white/[0.04] px-5 py-3 text-[14px] font-medium text-white transition-all duration-200 hover:border-white/40 hover:bg-white/[0.08]"
          >
            {t.cta}
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
