import { useInView } from '../hooks'

/** Fade-in-up wrapper driven by an IntersectionObserver. */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
