import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, sub, align = 'left' }) {
  const center = align === 'center'
  return (
    <div className={center ? 'mx-auto max-w-[46rem] text-center' : 'max-w-[46rem]'}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 text-[clamp(1.85rem,3.6vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={150}>
          <p
            className={`mt-4 text-[15.5px] leading-relaxed text-silver ${
              center ? 'mx-auto max-w-[40rem]' : 'max-w-[38rem]'
            }`}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  )
}
