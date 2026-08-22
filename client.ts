import { createClient } from 'next-sanity'

/**
 * If your project already has a Sanity client (e.g. lib/sanity.ts),
 * use that one instead and just import the queries from this feature.
 * This file exists so the events feature works standalone.
 */
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})
