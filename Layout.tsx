import type { ReactNode } from 'react'

/**
 * PLACEHOLDER primitives — Container, Section, Heading.
 * Replace with the real Sprint 1 versions; these exist only so the events
 * feature can be reviewed standalone before wiring into the shared system.
 */

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
}

export function Section({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <section className={`py-12 sm:py-16 ${className}`}>{children}</section>
}

export function Heading({
  as: Tag = 'h2',
  children,
  className = '',
}: {
  as?: 'h1' | 'h2' | 'h3'
  children: ReactNode
  className?: string
}) {
  const sizes = {
    h1: 'text-4xl sm:text-5xl',
    h2: 'text-2xl sm:text-3xl',
    h3: 'text-xl sm:text-2xl',
  }
  return (
    <Tag className={`font-display font-semibold text-ink ${sizes[Tag]} ${className}`}>
      {children}
    </Tag>
  )
}
