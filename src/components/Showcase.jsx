import { useRef } from 'react'
import { useLang } from '../i18n.jsx'
import { content } from '../content.js'
import { useScrollProgress } from '../hooks'
import SectionHeading from './SectionHeading.jsx'

const clamp = (n) => Math.min(1, Math.max(0, n))

/* Token colours for the animated code pane. */
const COLORS = {
  c: 'text-silver/50',
  k: 'text-accent-soft',
  t: 'text-[#d6b6ff]',
  s: 'text-[#74d39b]',
  f: 'text-white',
  p: 'text-silver',
}

const CODE = [
  [['// architecture/core.ts', 'c']],
  [],
  [['export ', 'k'], ['interface ', 'k'], ['Service', 't'], [' {', 'p']],
  [['  readonly ', 'k'], ['name', 'f'], [': ', 'p'], ['string', 't']],
  [
    ['  start', 'f'],
    ['(): ', 'p'],
    ['Promise', 't'],
    ['<', 'p'],
    ['void', 't'],
    ['>', 'p'],
  ],
  [['}', 'p']],
  [],
  [
    ['export ', 'k'],
    ['function ', 'k'],
    ['compose', 'f'],
    ['(...layers) {', 'p'],
  ],
  [['  const ', 'k'], ['rt', 'f'], [' = ', 'p'], ['createRuntime', 'f'], ['()', 'p']],
  [['  for ', 'k'], ['(const ', 'p'], ['l ', 'f'], ['of ', 'k'], ['layers)', 'p']],
  [['    rt.', 'p'], ['register', 'f'], ['(l)', 'p']],
  [['  return ', 'k'], ['rt.', 'p'], ['seal', 'f'], ['()', 'p']],
  [['}', 'p']],
  [],
  [['const ', 'k'], ['app', 'f'], [' = ', 'p'], ['compose', 'f'], ['(', 'p']],
  [['  httpLayer', 'f'], ['({ port }),', 'p']],
  [['  authLayer', 'f'], ['(),', 'p']],
  [['  telemetry', 'f'], ['(),', 'p']],
  [[')', 'p']],
  [],
  [['await ', 'k'], ['app.', 'p'], ['start', 'f'], ['()', 'p']],
]

function CodeBlock() {
  return (
    <>
      {CODE.map((line, i) => (
        <div key={i} className="h-[1.55em] whitespace-pre">
          {line.length === 0
            ? ' '
            : line.map(([text, kind], j) => (
                <span key={j} className={COLORS[kind]}>
                  {text}
                </span>
              ))}
        </div>
      ))}
    </>
  )
}

const CHART = '6,92 46,78 86,84 126,52 166,60 206,32 246,44 286,18 314,26'

export default function Showcase() {
  const { lang } = useLang()
  const t = content[lang].showcase
  const ref = useRef(null)
  const p = useScrollProgress(ref)

  const enter = clamp(p * 2.4 - 0.08)
  const draw = clamp((p - 0.12) * 1.95)

  return (
    <section ref={ref} id="producto" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.tag}
          title={t.title}
          sub={t.sub}
          align="center"
        />

        <div
          className="mt-14 will-change-transform"
          style={{
            transform: `translateY(${(1 - enter) * 54}px) scale(${
              0.955 + enter * 0.045
            })`,
            opacity: 0.4 + enter * 0.6,
          }}
        >
          <div className="mx-auto max-w-[1080px] rounded-[22px] bg-gradient-to-b from-white/[0.16] via-white/[0.05] to-white/[0.02] p-px shadow-[0_60px_140px_-50px_rgba(0,0,0,0.9)]">
            <div className="overflow-hidden rounded-[21px] bg-panel">
              {/* window chrome */}
              <div className="flex items-center gap-2 border-b border-hair px-5 py-3">
                <span className="h-3 w-3 rounded-full bg-[#2a2a30]" />
                <span className="h-3 w-3 rounded-full bg-[#2a2a30]" />
                <span className="h-3 w-3 rounded-full bg-[#2a2a30]" />
                <span className="ml-3 text-[12px] text-silver">
                  {t.codeLabel}
                </span>
                <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] text-status">
                  <span className="h-1.5 w-1.5 rounded-full bg-status" />
                  live
                </span>
              </div>

              <div className="grid md:grid-cols-2">
                {/* animated code */}
                <div className="relative h-[300px] overflow-hidden border-b border-hair font-mono text-[12.5px] leading-none md:h-[440px] md:border-b-0 md:border-r">
                  <div className="code-stream px-5 py-5">
                    <CodeBlock />
                    <CodeBlock />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-panel to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-panel to-transparent" />
                </div>

                {/* product UI mock */}
                <div className="bg-panel-2 p-5 md:p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-silver">
                        {t.uiLabel}
                      </p>
                      <p className="mt-1 text-[15px] font-semibold text-white">
                        {t.uiTitle}
                      </p>
                    </div>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-hair text-silver">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2 7h10M7 2v10"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>

                  {/* chart card */}
                  <div className="mt-5 rounded-xl border border-hair bg-ink/60 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-silver">
                        {t.uiMetricLabel}
                      </span>
                      <span className="text-[11px] text-silver/70">
                        {t.uiMetricNote}
                      </span>
                    </div>
                    <svg
                      viewBox="0 0 320 110"
                      className="mt-3 w-full"
                      preserveAspectRatio="none"
                    >
                      {[28, 56, 84].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          x2="320"
                          y1={y}
                          y2={y}
                          stroke="#ffffff"
                          strokeOpacity="0.05"
                        />
                      ))}
                      <polygon
                        points={`${CHART} 314,104 6,104`}
                        fill="url(#sc-fill)"
                        opacity={draw * 0.9}
                      />
                      <polyline
                        points={CHART}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        pathLength="1"
                        strokeDasharray="1"
                        strokeDashoffset={1 - draw}
                      />
                      <defs>
                        <linearGradient id="sc-fill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0071e3" stopOpacity="0.42" />
                          <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* task rows */}
                  <div className="mt-4 space-y-2.5">
                    {t.uiRows.map((row, i) => {
                      const fill = clamp((draw - i * 0.16) * 1.7)
                      const done = fill > 0.98
                      return (
                        <div
                          key={row}
                          className="flex items-center gap-3 rounded-lg border border-hair bg-ink/40 px-3 py-2.5"
                        >
                          <span className="w-24 shrink-0 text-[12px] text-fog">
                            {row}
                          </span>
                          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                            <span
                              className="block h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
                              style={{ width: `${fill * 100}%` }}
                            />
                          </span>
                          <span
                            className={`shrink-0 text-[10.5px] font-medium ${
                              done ? 'text-status' : 'text-silver'
                            }`}
                          >
                            {done ? t.uiStateOk : t.uiStateRun}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
