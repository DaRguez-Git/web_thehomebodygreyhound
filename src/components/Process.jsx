import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { content } from '../content.js'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'

/* --- Panel chrome ------------------------------------------- */
function PanelShell({ label, badge, children }) {
  return (
    <div className="w-full rounded-2xl border border-hair bg-panel shadow-[0_40px_100px_-50px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-hair px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a30]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a30]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#2a2a30]" />
        <span className="ml-2 font-mono text-[11.5px] text-silver">{label}</span>
        <span className="ml-auto rounded-md border border-hair px-2 py-0.5 font-mono text-[10.5px] text-silver">
          {badge}
        </span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  )
}

/* --- Step 1: architecture layers --------------------------- */
function PanelArchitecture() {
  const layers = ['ui', 'domain', 'services', 'data']
  return (
    <div className="flex flex-col gap-2.5">
      {layers.map((name, i) => (
        <div key={name}>
          <div
            className={`flex items-center gap-3 rounded-lg border px-3.5 py-3 ${
              i === 1
                ? 'border-accent/50 bg-accent/[0.07]'
                : 'border-hair bg-ink/50'
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                i === 1 ? 'bg-accent' : 'bg-silver/40'
              }`}
            />
            <span className="font-mono text-[12.5px] text-white">{name}</span>
            <span className="ml-auto flex gap-1">
              {Array.from({ length: 3 }).map((_, k) => (
                <span
                  key={k}
                  className="h-1.5 w-6 rounded-full bg-white/[0.07]"
                />
              ))}
            </span>
          </div>
          {i < layers.length - 1 && (
            <span className="ml-[1.15rem] block h-2.5 w-px bg-hair-bright" />
          )}
        </div>
      ))}
    </div>
  )
}

/* --- Step 2: code editor ----------------------------------- */
const DEV_CODE = [
  [['function ', 'k'], ['useFeature', 'f'], ['(id) {', 'p']],
  [['  const ', 'k'], ['data ', 'f'], ['= ', 'p'], ['useQuery', 'f'], ['(id)', 'p']],
  [['  if ', 'k'], ['(!data) ', 'p'], ['return ', 'k'], ['null', 't']],
  [['  return ', 'k'], ['render', 'f'], ['(data)', 'p']],
  [['}', 'p']],
  [],
  [['test', 'f'], ['(', 'p'], ["'renders feature'", 's'], [', () => {', 'p']],
  [['  expect', 'f'], ['(view).', 'p'], ['toBeStable', 'f'], ['()', 'p']],
  [['})', 'p']],
]
const DEV_COLORS = {
  c: 'text-silver/50',
  k: 'text-accent-soft',
  t: 'text-[#d6b6ff]',
  s: 'text-[#74d39b]',
  f: 'text-white',
  p: 'text-silver',
}
function PanelDevelopment() {
  return (
    <div className="font-mono text-[12.5px] leading-[1.75]">
      {DEV_CODE.map((line, i) => (
        <div key={i} className="flex gap-4 whitespace-pre">
          <span className="w-4 shrink-0 select-none text-right text-silver/35">
            {i + 1}
          </span>
          <span>
            {line.length === 0
              ? ' '
              : line.map(([text, kind], j) => (
                  <span key={j} className={DEV_COLORS[kind]}>
                    {text}
                  </span>
                ))}
          </span>
        </div>
      ))}
    </div>
  )
}

/* --- Step 3: deployment pipeline --------------------------- */
function PanelDeployment() {
  const stages = ['build', 'test', 'deploy']
  return (
    <div className="space-y-2.5">
      {stages.map((stage) => (
        <div
          key={stage}
          className="flex items-center gap-3 rounded-lg border border-hair bg-ink/50 px-3.5 py-3"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-status/15 text-status">
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 6.3l2.2 2.2 4.8-5.4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-mono text-[12.5px] text-white">{stage}</span>
          <span className="ml-auto h-1.5 w-28 overflow-hidden rounded-full bg-white/[0.07]">
            <span className="block h-full w-full rounded-full bg-gradient-to-r from-status/70 to-status" />
          </span>
        </div>
      ))}
      <div className="flex items-center gap-2 pt-1 font-mono text-[12px] text-status">
        <span className="pulse-dot block h-1.5 w-1.5 rounded-full bg-status" />
        production · stable
      </div>
    </div>
  )
}

const PANELS = [
  { label: 'schema.arch', render: () => <PanelArchitecture /> },
  { label: 'feature.ts', render: () => <PanelDevelopment /> },
  { label: 'pipeline.ci', render: () => <PanelDeployment /> },
]

export default function Process() {
  const { lang } = useLang()
  const t = content[lang].process
  const refs = useRef([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number(e.target.dataset.idx))
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    refs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="proceso" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
        {/* Sticky text */}
        <div className="md:sticky md:top-[96px] md:h-fit md:self-start">
          <Reveal>
            <Eyebrow>{t.tag}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-[clamp(1.85rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
              {t.title}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 max-w-[34rem] text-[15.5px] leading-relaxed text-silver">
              {t.sub}
            </p>
          </Reveal>

          <div className="mt-9 flex flex-col gap-1">
            {t.steps.map((step, i) => (
              <div
                key={step.num}
                className={`border-l-2 py-3.5 pl-5 transition-colors duration-300 ${
                  active === i ? 'border-accent' : 'border-hair'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-[12px] transition-colors duration-300 ${
                      active === i ? 'text-accent-soft' : 'text-silver/55'
                    }`}
                  >
                    {step.num}
                  </span>
                  <h3
                    className={`text-[17px] font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                      active === i ? 'text-white' : 'text-silver/50'
                    }`}
                  >
                    {step.name}
                  </h3>
                </div>
                <p
                  className={`mt-2 text-[14px] leading-relaxed transition-colors duration-300 ${
                    active === i ? 'text-silver' : 'text-silver/35'
                  }`}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling panels */}
        <div>
          {PANELS.map((panel, i) => (
            <div
              key={panel.label}
              data-idx={i}
              ref={(el) => (refs.current[i] = el)}
              className="flex items-center py-6 md:min-h-[82vh] md:py-0"
            >
              <Reveal className="w-full">
                <PanelShell
                  label={panel.label}
                  badge={`${t.steps[i].num} · ${t.steps[i].name}`}
                >
                  {panel.render()}
                </PanelShell>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
