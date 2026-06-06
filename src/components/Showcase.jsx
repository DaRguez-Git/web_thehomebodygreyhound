import { useLang } from '../i18n.jsx'
import { content } from '../content.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

function AppCard({ app, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <a
        href={app.href}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hair bg-panel/80 p-7 transition-colors duration-300 hover:border-hair-bright"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(46% 56% at 50% 0%, rgba(0,113,227,0.12), transparent 75%)',
          }}
        />
        <div className="relative flex flex-1 flex-col">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[22px] font-bold tracking-[-0.025em] text-white">
              {app.name}
            </span>
            <span className="rounded-full border border-hair-bright bg-white/[0.04] px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.16em] text-silver">
              {app.badge}
            </span>
          </div>
          <p className="mt-3 text-[15.5px] leading-relaxed text-fog">
            {app.tagline}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-accent-soft">
            {app.cta}
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </a>
    </Reveal>
  )
}

export default function Showcase() {
  const { lang } = useLang()
  const t = content[lang].showcase

  return (
    <section id="aplicaciones" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.tag}
          title={t.title}
          sub={t.sub}
          align="center"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {t.apps.map((app, i) => (
            <AppCard key={app.name} app={app} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}
