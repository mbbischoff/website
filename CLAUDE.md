# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal website and blog for mb bischoff, built with Jekyll and deployed to GitHub Pages at https://mbbischoff.com.

## Commands

- **Serve locally**: `bundle exec jekyll serve` (http://localhost:4000, auto-rebuilds)
- **Build**: `bundle exec jekyll build` (outputs to `_site/`)
- **Production build**: `JEKYLL_ENV=production bundle exec jekyll build`
- **Screenshot**: `node screenshot.js` (requires local server running; uses Puppeteer)

## Architecture

### Post Formats
Posts have three formats set via `format` front matter field, dispatched in `_includes/post.html`:
- **post** (default) — standard blog post, rendered via `post_types/long.html`
- **link** — link post, rendered via `post_types/link.html`
- **short** — short-form content, rendered via `post_types/short.html`

### Sass
Uses `@use` syntax (not `@import`). Entry point: `_sass/main.scss`. Follows 7-1 pattern: `abstracts/`, `base/`, `components/`, `layout/`, `themes/`.

### Data Files
`_data/` contains structured YAML for apps, changelog, podcasts, press, social links, and talks — used in various pages.

### Categories
Must be manually created in `_category/` with front matter specifying title, permalink, and name.

### Plugins
`_plugins/ext.rb` provides jekyll-tagging support. Other plugins are Gems (see Gemfile).

## Creating Posts

File naming: `_posts/YYYY-MM-DD-title-slug.markdown`

Required front matter: `title`, `date`. Layout defaults to `post` via `_config.yml`.

Optional: `permalink`, `image`, `description`, `format` (post/link/short), `categories`, `tags`, `picture`, `link`, `audio`, `thanks`, `via`.

Add `<!-- more -->` for homepage truncation.

## Deployment

Pushes to `main` auto-deploy via GitHub Actions (`.github/workflows/jekyll.yml`) using Ruby 3.2.3 to GitHub Pages.
