import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    svelte(
      // Svelte files only — doesn't touch .jsx/.tsx, so it coexists with
      // @vitejs/plugin-react in the same config without conflict.
    ),
    react({
      // Only applies to files matched by its default include (jsx/tsx),
      // so Svelte components are untouched by this plugin and vice versa.
      include: '**/*.{jsx,tsx}',
    }),
  ],
  resolve: {
    alias: {
      '@components': '/app/frontend/components',
      '@lib': '/app/frontend/lib',
    },
  },
})
