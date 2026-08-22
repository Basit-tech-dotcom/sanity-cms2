import { Container, Section, Heading } from '@/components/ui/Layout'
import { Button } from '@/components/ui/Button'

/**
 * Renders automatically when the detail page calls notFound()
 * (invalid or unknown slug) — handles the "invalid/non-existing event
 * pages cleanly" requirement.
 */
export default function EventNotFound() {
  return (
    <main className="bg-paper">
      <Section className="pt-24">
        <Container>
          <div className="mx-auto max-w-md rounded-2xl border border-dashed border-line bg-white p-10 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-teal">404</p>
            <Heading as="h1" className="mt-2">
              We couldn't find that event
            </Heading>
            <p className="mt-3 font-body text-sm text-ink/60">
              It may have been removed, or the link might be out of date.
            </p>
            <div className="mt-6">
              <Button href="/events">Back to events</Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
}
