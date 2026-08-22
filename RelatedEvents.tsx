import { Heading } from '@/components/ui/Layout'
import { EventCard } from './EventCard'
import type { EventCardData } from '@/types/event'

export function RelatedEvents({ events }: { events: EventCardData[] }) {
  if (!events?.length) return null

  return (
    <div className="mt-16 border-t border-line pt-10">
      <Heading as="h2" className="mb-6">
        Related events
      </Heading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  )
}
