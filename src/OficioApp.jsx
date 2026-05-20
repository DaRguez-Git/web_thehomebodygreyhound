import { useLang } from './i18n.jsx'
import { content } from './content.js'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Reveal from './components/Reveal.jsx'
import SectionHeading from './components/SectionHeading.jsx'

function IconModular() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="2.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="2.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2.5" y="11" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="11" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
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
function IconBook() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11 5.6C11 5.6 9 4.1 5.6 4.1 2.9 4.1 2 5 2 5v11s1.1-.9 3.6-.9S11 16.6 11 16.6m0-11C11 5.6 13 4.1 16.4 4.1 19.1 4.1 20 5 20 5v11s-1.1-.9-3.6-.9S11 16.6 11 16.6m0-11v11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const FEATURE_ICONS = [IconModular, IconLock, IconSpark]

function IconBadge({ children, size = 'h-10 w-10' }) {
  return (
    <span
      className={`inline-flex ${size} shrink-0 items-center justify-center rounded-lg border border-hair bg-white/[0.03] text-white`}
    >
      {children}
    </span>
  )
}

function FeatureCard({ icon: Icon, title, body }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hair bg-panel/80 p-6 transition-colors duration-300 hover:border-hair-bright">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(46% 56% at 50% 0%, rgba(0,113,227,0.13), transparent 75%)',
        }}
      />
      <div className="relative">
        <IconBadge>
          <Icon />
        </IconBadge>
        <h3 className="mt-5 text-[16px] font-semibold tracking-[-0.01em] text-white">
          {title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-silver">{body}</p>
      </div>
    </div>
  )
}

function LinkCard({ title, body, cta, href }) {
  return (
    <a
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hair bg-panel/80 p-6 transition-colors duration-300 hover:border-hair-bright"
    >
      <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-white">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-[14px] leading-relaxed text-silver">{body}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-medium text-accent-soft">
        {cta}
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </a>
  )
}

export default function OficioApp() {
  const { lang } = useLang()
  const t = content[lang].oficio

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-[52px]">
          <div
            aria-hidden="true"
            className="bg-tech-grid pointer-events-none absolute inset-0 opacity-60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(55% 45% at 50% 0%, rgba(0,113,227,0.20), transparent 72%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
          />

          <div className="relative mx-auto max-w-[1240px] px-5 pb-20 pt-14 sm:px-8 sm:pt-16">
            <Reveal>
              <nav
                className="flex items-center gap-2 text-[12.5px] text-silver"
                aria-label={lang === 'es' ? 'Ruta de navegación' : 'Breadcrumb'}
              >
                <a href="/" className="transition-colors hover:text-white">
                  {t.crumbHome}
                </a>
                <span aria-hidden="true" className="text-silver/40">
                  ›
                </span>
                <span className="text-fog">{t.crumbSelf}</span>
              </nav>
            </Reveal>

            <div className="mt-12 text-center">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-hair bg-white/[0.03] px-3.5 py-1.5 text-[12px] text-silver">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {t.eyebrow} · {t.badge}
                </span>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="mx-auto mt-6 text-[clamp(3rem,9vw,6rem)] font-extrabold leading-[1] tracking-[-0.04em]">
                  <span className="bg-gradient-to-br from-white to-[#7a7a82] bg-clip-text text-transparent">
                    {t.title}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mx-auto mt-4 max-w-[26ch] text-[clamp(1.2rem,2.6vw,1.8rem)] font-semibold tracking-[-0.02em] text-white">
                  {t.tagline}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="mx-auto mt-5 max-w-[62ch] text-[15.5px] leading-relaxed text-silver">
                  {t.intro}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="caracteristicas" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <SectionHeading
              eyebrow={t.featuresTag}
              title={t.featuresTitle}
              align="center"
            />
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {t.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 90}>
                  <FeatureCard icon={FEATURE_ICONS[i]} title={f.title} body={f.body} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Modules */}
        <section id="modulos" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <SectionHeading
              eyebrow={t.modulesTag}
              title={t.modulesTitle}
              sub={t.modulesSub}
            />
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {t.modules.map((m, i) => (
                <Reveal key={m} delay={(i % 4) * 70}>
                  <div className="group flex h-full items-center gap-3 rounded-xl border border-hair bg-panel/80 px-4 py-4 transition-colors duration-300 hover:border-hair-bright">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full bg-accent/60 transition-colors duration-300 group-hover:bg-accent"
                      aria-hidden="true"
                    />
                    <span className="text-[14px] font-medium text-fog transition-colors duration-300 group-hover:text-white">
                      {m}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Manuals */}
        <section id="manuales" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <SectionHeading
              eyebrow={t.manualsTag}
              title={t.manualsTitle}
              sub={t.manualsSub}
            />
            <Reveal className="mt-10">
              <a
                href={t.manualsCard.href}
                className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-hair bg-panel/80 p-7 transition-colors duration-300 hover:border-hair-bright sm:flex-row sm:items-center sm:gap-7"
              >
                <IconBadge size="h-12 w-12">
                  <IconBook />
                </IconBadge>
                <div className="flex-1">
                  <h3 className="text-[16px] font-semibold tracking-[-0.01em] text-white">
                    {t.manualsCard.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-silver">
                    {t.manualsCard.body}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-[13.5px] font-medium text-accent-soft">
                  {t.manualsCard.cta}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* Legal */}
        <section id="legal" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
            <SectionHeading
              eyebrow={t.legalTag}
              title={t.legalTitle}
              sub={t.legalSub}
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {t.legalCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 90}>
                  <LinkCard
                    title={c.title}
                    body={c.body}
                    cta={c.cta}
                    href={c.href}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
