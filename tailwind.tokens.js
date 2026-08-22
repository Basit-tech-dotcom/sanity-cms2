/**
 * Design tokens for the Events feature.
 * Merge these into your project's existing tailwind.config.js theme.extend
 * — don't replace your config, just add what's missing.
 *
 * Palette:
 *   ink      #12263A  deep navy — headings, primary text, primary buttons
 *   teal     #1F6F6B  secondary — locations/meta, secondary actions
 *   amber    #F2A93B  accent — dates, CTAs, "upcoming" tag
 *   paper    #F7F6F2  page background
 *   line     #E4E1D8  hairlines, card borders
 *
 * Type:
 *   display: Fraunces (headings — has real character, a nonprofit built by
 *            and for young people shouldn't default to a corporate grotesk)
 *   body:    Inter (readable at small sizes, wide language support)
 *   mono:    IBM Plex Mono (dates / times / labels — ticket-stub feel)
 */
module.exports = {
  colors: {
    ink: '#12263A',
    teal: '#1F6F6B',
    amber: '#F2A93B',
    paper: '#F7F6F2',
    line: '#E4E1D8',
  },
  fontFamily: {
    display: ['var(--font-fraunces)', 'Georgia', 'serif'],
    body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
    mono: ['var(--font-plex-mono)', 'monospace'],
  },
}
