import type { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import { eventsListingQuery } from '@/lib/sanity/queries'
import { Container, Section, Heading } from '@/components/ui/Layout'
import { EventCard } from '@/components/events/EventCard'
import type { EventsListingResult } from '@/types/event'

export const metadata: Metadata = {
  title: 'Events | Youth Evolution Foundation',
  description:
    'See what’s coming up and browse past events from the Youth Evolution Foundation.',
}

export const revalidate = 60 // ISR: refetch content at most every 60s

export default async function EventsListingPage() {
  const { upcoming, past } = await client.fetch<EventsListingResult>(
    eventsListingQuery,
    {},
    { next: { revalidate: 60 } }
  )

  const hasAny = upcoming.length > 0 || past.length > 0

  return (
    <main className="bg-paper">
      <Section className="pb-8 pt-14 sm:pt-20">
        <Container>
          <p className="font-mono text-xs uppercase tracking-widest text-teal">
            Youth Evolution Foundation
          </p>
          <Heading as="h1" className="mt-2">
            Events
          </Heading>
          <p className="mt-3 max-w-xl font-body text-ink/70">
            Workshops, community days, and gatherings — find what's next and
            look back at what we've done together.
          </p>
        </Container>
      </Section>

      {!hasAny && (
        <Container>
          <div className="rounded-2xl border border-dashed border-line bg-white p-10 text-center">
            <p className="font-display text-lg text-ink">Nothing on the calendar yet</p>
            <p className="mt-2 font-body text-sm text-ink/60">
              Check back soon — new events are added regularly.
            </p>
          </div>
        </Container>
      )}

      {upcoming.length > 0 && (
        <Section className="pt-0">
          <Container>
            <Heading as="h2" className="mb-6">
              Upcoming
            </Heading>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {upcoming.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {past.length > 0 && (
        <Section className="border-t border-line pt-10">
          <Container>
            <Heading as="h2" className="mb-6">
              Past events
            </Heading>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {past.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          </Container>
        </Section>
      )}
    </main>
  )
}
