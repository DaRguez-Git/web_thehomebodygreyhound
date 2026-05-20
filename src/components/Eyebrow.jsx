/** Small uppercase kicker with an accent rule. */
export default function Eyebrow({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-silver ${className}`}
    >
      <span className="h-px w-7 bg-accent" aria-hidden="true" />
      {children}
    </span>
  )
}
