import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity/image'
import type { EventCardData } from '@/types/event'

/**
 * Ticket-stub card: a date block on the left (the thing people scan an
 * events page for) perforated from the content on the right, like a torn
 * ticket. This is the feature's signature element — kept quiet everywhere
 * else so it reads intentionally rather than decoratively.
 */
export function EventCard({ event }: { event: EventCardData }) {
  const d = new Date(event.date)
  const month = d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  const day = d.toLocaleDateString('en-US', { day: '2-digit' })
  const isPast = event.status !== 'upcoming'

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group relative flex overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
      aria-label={`${event.title} — ${event.date}`}
    >
      {/* Date stub */}
      <div className="relative flex w-24 shrink-0 flex-col items-center justify-center gap-1 bg-ink px-2 py-6 text-paper">
        <span className="font-mono text-xs tracking-widest">{month}</span>
        <span className="font-display text-3xl leading-none">{day}</span>
        {/* perforation */}
        <div
          className="absolute right-[-6px] top-0 h-full w-3 bg-[radial-gradient(circle,transparent_3px,white_3.5px)] bg-[length:12px_16px]"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-1 gap-4 p-4">
        <div className="relative hidden h-20 w-28 shrink-0 overflow-hidden rounded-lg sm:block">
          <Image
            src={urlFor(event.image).width(240).height(180).url()}
            alt={event.image.alt}
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate font-display text-lg font-semibold text-ink group-hover:text-teal">
              {event.title}
            </h3>
            {isPast && (
              <span className="shrink-0 rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink/60">
                {event.status}
              </span>
            )}
          </div>
          <p className="mt-1 font-mono text-xs text-teal">
            {event.time} · {event.location}
          </p>
          <p className="mt-2 line-clamp-2 font-body text-sm text-ink/70">
            {event.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  )
}
