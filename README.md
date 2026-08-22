# Events System — Intern 4 (Abdul Basit)

Drop-in implementation of the Complete Events System feature.

## What's here → what it covers

| File | Requirement |
|---|---|
| `sanity/schemas/event.ts` | Event schema: title, slug, description, image, date, time, location, registrationLink, status |
| `sanity/schemas/index.ts` | Register schema in Sanity Studio (add sample events yourself in Studio) |
| `lib/sanity/queries.ts` | GROQ: listing, single-event, related events, all slugs |
| `lib/sanity/client.ts`, `lib/sanity/image.ts` | Sanity client + image URL builder |
| `app/events/page.tsx` | Events listing `/events` |
| `app/events/[slug]/page.tsx` | Dynamic detail page `/events/[slug]`, all 10 listed sections, SEO metadata, JSON-LD structured data |
| `app/events/[slug]/not-found.tsx` | Clean handling of invalid/non-existent event slugs |
| `components/events/EventCard.tsx` | Listing + related-events card (ticket-stub design) |
| `components/events/RelatedEvents.tsx` | Related events section |
| `components/ui/*` | **Placeholders only** — swap for the real Sprint 1 Button/Container/Section/Heading, then delete these files |
| `types/event.ts` | Shared TypeScript types |
| `tailwind.tokens.js` | Color/font tokens used above — merge into your existing `tailwind.config.js` |

## Setup

1. Copy `sanity/schemas/event.ts` into your Studio's schema folder and add `event` to your `schema.types` array.
2. Merge `tailwind.tokens.js` into your `tailwind.config.js` `theme.extend`.
3. Load `Fraunces`, `Inter`, and `IBM Plex Mono` via `next/font` and expose them as `--font-fraunces`, `--font-inter`, `--font-plex-mono` (or swap for your project's existing fonts — the placeholders don't need to match).
4. Install deps if not already present: `next-sanity`, `@sanity/image-url`, `@portabletext/react`.
5. In Sanity Studio, add a few sample events (mark at least one `upcoming` and one `past`, and link a couple as `relatedEvents` to each other).
6. Replace `components/ui/*` with your real Sprint 1 components and update the imports in `EventCard.tsx`, `app/events/page.tsx`, `app/events/[slug]/page.tsx`, and `not-found.tsx`.

## Still on you (per the common requirements)

- Swap in the shared Header/Footer around these pages.
- Run it locally, check responsive behavior at mobile/tablet/desktop, and confirm links + build/lint pass clean.
- `git checkout -b feature/events` from `develop`, commit, push, open the PR.
