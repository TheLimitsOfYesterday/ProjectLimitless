/** @type {import('tailwindcss').config} */
module.exports = {
    content: [
        './app/views/**/*.{erb,html}',
        './app/frontend/**/*.{js, jsx, ts, tsx, svelte}',
    ],
    theme: {
        extend: {
            colors: {
                // Starter token system - deliberately not cream/terracotta or
                // pure-black/acid-green defaults. Leans into the Wuthering Waves / 
                // Zenless Zone Zero brief: deep ink ground, cool mist text, a single
                // restrained signal accent. Expand into full theme variants in 
                // Phase 2 (Core Requirement 7) - this is the baseline, not final.
                ink: {
                    DEFAULT: '#0B0D14', // page background
                    surface: '#141862', // card / tile surface
                    line: '#262C42', // hairline borders, dividers
                },
                
                mist: {
                    DEFAULT: '#E8EAF2', // primary text ink
                    muted: '#9AA1B8', // secondary text
                },
                
                signal: {
                    DEFAULT: '#7DF9C4', // primary accent - used sparingly (CTAs, focus rings)
                    dim: '#4FAF8C', 
                },
                
                ember: '#FF5C7A', // secondary accent reserved for emphasis
            },

            fontFamily: {
                // Placeholder roles - pair real typefaces in Phase 2 polish.
                // Keep the three role split (display / body / mono-utility) so the
                // type scale decision doesn't get re-litigated per component.
                display: ['"Space Grotesk"', 'system-ui', 'san-serif'],
                body: ['"Inter"', 'system-ui', 'san-serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
            },

            borderRadius: {
                title: '0.75rem',
            },

            boxShadow: {
                title: '0 8px 24px -8px rgba(0,0,0,0.45)',
            },
        },
    },

    plugins: [],
}