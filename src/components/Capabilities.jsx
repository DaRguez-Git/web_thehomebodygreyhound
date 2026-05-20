import { useLang } from '../i18n.jsx'
import { content } from '../content.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M3.5 10.5l3.8 3.8L16.5 4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function IconTools() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2.5l7 3.75-7 3.75-7-3.75L10 2.5zM3 10l7 3.75L17 10M3 13.75L10 17.5l7-3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function IconLock() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3.5" y="8.5" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 8.5V6a3.5 3.5 0 017 0v2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
function IconLayout() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="2.5" width="15" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 8h15M8 8v9.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
function IconSpark() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2.4l1.7 4.6 4.6 1.7-4.6 1.7L10 15.6l-1.7-4.6L3.7 8.7l4.6-1.7L10 2.4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function IconDoc() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 2.5h6l4 4v11H5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11 2.5v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7.75 10.75h4.5M7.75 13.5h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const CARDS = [
  { key: 'perf', Icon: IconCheck },
  { key: 'stack', Icon: IconTools },
  { key: 'security', Icon: IconLock },
  { key: 'design', Icon: IconLayout },
  { key: 'architecture', Icon: IconSpark },
  { key: 'support', Icon: IconDoc },
]

function Card({ Icon, title, body }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hair bg-panel/80 p-6 transition-colors duration-300 hover:border-hair-bright">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(46% 56% at 50% 0%, rgba(0,113,227,0.12), transparent 75%)',
        }}
      />
      <div className="relative">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-hair bg-white/[0.03] text-white">
          <Icon />
        </span>
        <h3 className="mt-5 text-[16px] font-semibold tracking-[-0.01em] text-white">
          {title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-silver">{body}</p>
      </div>
    </div>
  )
}

export default function Capabilities() {
  const { lang } = useLang()
  const t = content[lang].capabilities

  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading eyebrow={t.tag} title={t.title} sub={t.sub} />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.key} delay={(i % 3) * 80}>
              <Card Icon={c.Icon} title={t[c.key].title} body={t[c.key].body} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
