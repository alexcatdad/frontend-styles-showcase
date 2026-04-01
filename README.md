# Frontend Styles Showcase

26 visual styles x 8 pages x 2 languages — one cat sanctuary website rendered across minimalism, brutalism, vaporwave, and 23 more design schools.

**Live:** [alexcatdad.github.io/frontend-styles-showcase](https://alexcatdad.github.io/frontend-styles-showcase/)

## Styles

| Category | Styles |
|---|---|
| Core Modern | Minimalism, Flat Design, Brutalism, Neumorphism, Glassmorphism, Material Design, Claymorphism |
| Typography-first | Editorial, Swiss International, Bauhaus, Art Deco |
| Nostalgia-driven | Retro 80s, Retro 90s, Y2K, Skeuomorphism, Vaporwave, Pixel Art |
| Emerging | Dark-First Design, Data-Dense UI, Cyberpunk, Cottagecore |
| Expressive | Anti-Design, Maximalism, Grunge, Punk DIY, Memphis Design |

## Pages (per style)

- **Home** — hero, mission, stats, about
- **Cats** — adoption gallery
- **Cat Profile** — single cat detail
- **Blog** — article listing
- **Blog Post** — single article
- **Donate** — pricing tiers
- **Auth** — login form
- **404** — error page

## Tech Stack

- **Astro** — static site generation
- **Tailwind CSS v4** — all styling via utility classes
- **Bun** — runtime and package manager
- **Biome** — linting and formatting

## i18n

English and Romanian. All UI strings and content are translated.

## Architecture

```
src/
  data/          # Shared content (cats, blog, sanctuary, donate, i18n)
  components/
    styles/
      minimalism/  # 8 page components per style
      brutalism/
      ...26 total
  pages/
    [lang]/[style]/  # Dynamic routing, delegates to style components
  layouts/Layout.astro  # Shared HTML shell + style badge overlay
```

Each style has full creative freedom over HTML structure — not just different CSS on the same template. An editorial layout uses newspaper columns, brutalism breaks the grid, data-dense uses spreadsheet tables.

## Development

```sh
bun install
up bun dev     # HTTPS dev server via paw-proxy
bun run build  # Static build to dist/
```

## Deployment

Automatic via GitHub Actions on push to `main`. Deploys to GitHub Pages.
