import { useLang } from '../i18n.jsx'
import { content } from '../content.js'
import { useInView } from '../hooks'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const STACK = [
  'React',
  'TypeScript',
  'Swift',
  'Kotlin',
  'Rust',
  'Go',
  'Node.js',
  'PostgreSQL',
  'AWS',
  'Docker',
]

function Card({ className = '', children }) {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hair bg-panel/80 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-hair-bright ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(46% 56% at 50% 0%, rgba(0,113,227,0.13), transparent 75%)',
        }}
      />
      <div className="relative flex flex-1 flex-col">{children}</div>
    </div>
  )
}

function CardTitle({ children }) {
  return (
    <h3 className="text-[15.5px] font-semibold tracking-[-0.01em] text-white">
      {children}
    </h3>
  )
}

function CardBody({ children }) {
  return (
    <p className="mt-1.5 text-[13.5px] leading-relaxed text-silver">
      {children}
    </p>
  )
}

/* --- Widget: continuous performance line --------------------- */
function PerfChart({ caption }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const points = '4,96 40,84 76,90 112,58 148,66 184,40 220,50 256,24 300,32'
  return (
    <div ref={ref} className="mt-auto">
      <div className="rounded-xl border border-hair bg-ink/60 p-3.5">
        <svg viewBox="0 0 304 110" className="w-full" preserveAspectRatio="none">
          {[26, 54, 82].map((y) => (
            <line
              key={y}
              x1="0"
              x2="304"
              y1={y}
              y2={y}
              stroke="#ffffff"
              strokeOpacity="0.05"
            />
          ))}
          <polygon
            points={`${points} 300,104 4,104`}
            fill="url(#perf-fill)"
            style={{
              opacity: inView ? 1 : 0,
              transition: 'opacity 1.4s ease 0.3s',
            }}
          />
          <polyline
            points={points}
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            strokeDasharray="1"
            style={{
              strokeDashoffset: inView ? 0 : 1,
              transition:
                'stroke-dashoffset 1.9s cubic-bezier(0.16,0.7,0.3,1)',
            }}
          />
          <defs>
            <linearGradient id="perf-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0071e3" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="mt-2.5 text-[12px] text-silver/80">{caption}</p>
    </div>
  )
}

/* --- Widget: glowing tech stack ------------------------------ */
function StackChips() {
  return (
    <div className="mt-auto flex flex-wrap gap-2 pt-4">
      {STACK.map((name, i) => (
        <span
          key={name}
          className="rounded-md border px-2.5 py-1.5 font-mono text-[11.5px]"
          style={{
            animation: 'chip-glow 5s ease-in-out infinite',
            animationDelay: `${(i % STACK.length) * 0.42}s`,
          }}
        >
          {name}
        </span>
      ))}
    </div>
  )
}

/* --- Widget: encryption status ------------------------------- */
function SecurityPanel({ status }) {
  return (
    <div className="mt-auto pt-4">
      <div className="flex items-center gap-3 rounded-xl border border-hair bg-ink/60 px-3.5 py-3">
        <span className="text-status">
          <span className="pulse-dot block h-2 w-2 rounded-full bg-status" />
        </span>
        <span className="text-[12.5px] font-medium text-white">{status}</span>
        <svg
          className="ml-auto text-status"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3.5 8.5l3 3 6-7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

/* --- Widget: architecture node diagram ----------------------- */
function NodeDiagram() {
  return (
    <svg
      viewBox="0 0 240 120"
      className="h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="#34343b" strokeWidth="1.5" fill="none">
        <path d="M40 60 L120 32" />
        <path d="M40 60 L120 88" />
        <path d="M120 32 L200 60" />
        <path d="M120 88 L200 60" />
      </g>
      <circle cx="40" cy="60" r="8" fill="#0071e3" />
      <circle cx="120" cy="32" r="7" fill="#0d0d11" stroke="#56565f" strokeWidth="1.5" />
      <circle cx="120" cy="88" r="7" fill="#0d0d11" stroke="#56565f" strokeWidth="1.5" />
      <circle cx="200" cy="60" r="8" fill="#ffffff" />
    </svg>
  )
}

/* --- Small icons --------------------------------------------- */
function IconLayout() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="2.5" width="15" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 8h15M8 8v9.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
function IconSupport() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12.2 7.8l3-3M4.8 15.2l3-3M12.2 12.2l3 3M4.8 4.8l3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
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

function IconBadge({ children }) {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-hair bg-white/[0.03] text-white">
      {children}
    </span>
  )
}

export default function Capabilities() {
  const { lang } = useLang()
  const t = content[lang].capabilities

  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading eyebrow={t.tag} title={t.title} sub={t.sub} />

        <div className="mt-12 grid auto-rows-[minmax(11rem,auto)] grid-cols-2 gap-3 sm:gap-4 md:auto-rows-[13rem] md:grid-cols-4">
          {/* Performance — 2x2 */}
          <Reveal className="col-span-2 md:row-span-2">
            <Card>
              <IconBadge>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M2.5 14l4-5 3.5 3 5-8"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconBadge>
              <div className="mt-4">
                <CardTitle>{t.perf.title}</CardTitle>
                <CardBody>{t.perf.body}</CardBody>
              </div>
              <PerfChart caption={t.perf.caption} />
            </Card>
          </Reveal>

          {/* Stack — 1x2 */}
          <Reveal className="col-span-2 md:col-span-1 md:row-span-2" delay={70}>
            <Card>
              <IconBadge>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2.5l7 3.75-7 3.75-7-3.75L10 2.5zM3 10l7 3.75L17 10M3 13.75L10 17.5l7-3.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconBadge>
              <div className="mt-4">
                <CardTitle>{t.stack.title}</CardTitle>
                <CardBody>{t.stack.body}</CardBody>
              </div>
              <StackChips />
            </Card>
          </Reveal>

          {/* Security — 1x1 */}
          <Reveal className="col-span-1" delay={120}>
            <Card>
              <IconBadge>
                <IconLock />
              </IconBadge>
              <div className="mt-4">
                <CardTitle>{t.security.title}</CardTitle>
                <CardBody>{t.security.body}</CardBody>
              </div>
              <SecurityPanel status={t.security.status} />
            </Card>
          </Reveal>

          {/* Design — 1x1 */}
          <Reveal className="col-span-1" delay={170}>
            <Card>
              <IconBadge>
                <IconLayout />
              </IconBadge>
              <div className="mt-4">
                <CardTitle>{t.design.title}</CardTitle>
                <CardBody>{t.design.body}</CardBody>
              </div>
            </Card>
          </Reveal>

          {/* Architecture — wide */}
          <Reveal className="col-span-2 md:col-span-3" delay={120}>
            <Card>
              <div className="flex h-full flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <CardTitle>{t.architecture.title}</CardTitle>
                  <CardBody>{t.architecture.body}</CardBody>
                </div>
                <div className="h-24 w-full shrink-0 sm:h-28 sm:w-56">
                  <NodeDiagram />
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Support — 1x1 */}
          <Reveal className="col-span-2 md:col-span-1" delay={170}>
            <Card>
              <IconBadge>
                <IconSupport />
              </IconBadge>
              <div className="mt-4">
                <CardTitle>{t.support.title}</CardTitle>
                <CardBody>{t.support.body}</CardBody>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
