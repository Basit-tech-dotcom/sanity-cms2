import Link from 'next/link'
import type { ReactNode } from 'react'

/**
 * PLACEHOLDER — replace with the real Sprint 1 Button component.
 * Kept here only so this feature renders standalone. Do not add a second
 * Button to the design system; delete this file once wired to the shared one.
 */
export function Button({
  href,
  children,
  variant = 'primary',
  external = false,
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
}) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 font-body text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink'
  const styles =
    variant === 'primary'
      ? 'bg-ink text-paper hover:bg-teal'
      : 'border border-ink text-ink hover:bg-ink hover:text-paper'

  return (
    <Link
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </Link>
  )
}
