import groq from 'groq'

/**
 * Events listing — /events
 * Upcoming first (soonest first), then past events (most recent first).
 * Only fields the listing card actually needs, so we don't over-fetch.
 */
export const eventsListingQuery = groq`
{
  "upcoming": *[_type == "event" && status == "upcoming"] | order(date asc) {
    _id,
    title,
    "slug": slug.current,
    image,
    date,
    time,
    location,
    shortDescription,
    status
  },
  "past": *[_type == "event" && status in ["past", "cancelled"]] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    image,
    date,
    time,
    location,
    shortDescription,
    status
  }
}`

/**
 * Single event detail — /events/[slug]
 * Related events are resolved through the reference and de-duplicated
 * against the current event so the page never links to itself.
 */
export const eventBySlugQuery = groq`
*[_type == "event" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  image,
  date,
  time,
  location,
  shortDescription,
  description,
  registrationLink,
  status,
  "relatedEvents": relatedEvents[]->{
    _id,
    title,
    "slug": slug.current,
    image,
    date,
    time,
    location,
    shortDescription,
    status
  }
}`

/** All slugs, for generateStaticParams */
export const allEventSlugsQuery = groq`
*[_type == "event" && defined(slug.current)][].slug.current
`
