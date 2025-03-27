// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/guides/': '/guides/why',
  },
  integrations: [
    starlight({
      title: 'WCB (alpha)',
      social: {
        npm: 'https://www.npmjs.com/package/web-component-base',
        sourcehut: 'https://sr.ht/~ayoayco/wcb/',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            'getting-started',
            'why',
            'exports',
            'usage',
            'examples',
            'template-vs-render',
            'prop-access',
            'styling',
            'shadow-dom',
            'just-parts',
            'life-cycle-hooks',
            'library-size',
          ],
        },
        // {
        //   label: 'Reference',
        //   autogenerate: { directory: 'reference' },
        // },
      ],
      components: {
        Footer: './src/components/Attribution.astro',
      },
    }),
  ],
})
