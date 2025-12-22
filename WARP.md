# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## About This Project

This is a personal website and blog built with Jekyll and deployed to GitHub Pages. The site is located at mbbischoff.com and features a custom theme with multiple post formats (standard posts, links, and shorts).

## Development Commands

### Local Development
- **Serve the site locally**: `bundle exec jekyll serve`
  - Site will be available at http://localhost:4000
  - Jekyll will watch for changes and rebuild automatically

### Build
- **Build the site**: `bundle exec jekyll build`
  - Outputs to `_site/` directory by default
  - Use `JEKYLL_ENV=production bundle exec jekyll build` for production builds

### Screenshots
- **Generate homepage screenshot**: `node screenshot.js`
  - Requires the local server to be running at http://localhost:4000
  - Saves screenshot to `screenshot/screenshot.png`
  - Uses Puppeteer to capture 1024x768 viewport

## Architecture Overview

### Jekyll Structure
This is a standard Jekyll site with some custom conventions:

**Collections:**
- `_posts/` - Blog posts (87+ markdown files)
- `_category/` - Category pages (manually created)
- `_formats/` - Post format definitions (link, short, photo, post)
- `_feedback/` - Feedback items
- `_uploads/` - Media assets

**Layouts:** (`_layouts/`)
- `default.html` - Base layout with header/footer, FontAwesome integration, and dynamic clock script
- `post.html` - Wraps default layout, includes post partial
- `category.html` - Category archive pages
- `feedback.html` - Feedback items layout

**Includes:** (`_includes/`)
- `post_types/` - Format-specific post renderings (link.html, short.html, long.html, long-expanded.html)
- `post.html` - Main post dispatcher that routes to the correct format based on front matter
- Standard partials: head.html, header.html, footer.html, analytics.html, etc.

**Styling:**
- Sass architecture in `_sass/` following 7-1 pattern:
  - `abstracts/` - Reset, variables, mixins
  - `base/` - Typography, body styles
  - `components/` - Media, toggles, navigation items, changelog, etc.
  - `layout/` - Header, footer, article, page, home
  - `themes/` - Theme styles and code highlighting
- Main entry point: `_sass/main.scss` (uses `@use` syntax, not `@import`)

### Post Formats
Posts support three formats via the `format` front matter field:

1. **post** (default) - Standard blog post with full content and "read more" truncation
2. **link** - Link post format (rendered via `post_types/link.html`)
3. **short** - Short-form content (rendered via `post_types/short.html`)

The post format determines which include file is used in `_includes/post.html`.

## Creating Content

### Posts
Post files live in `_posts/` and follow the naming convention: `YYYY-MM-DD-title-slug.markdown`

Example: `2024-07-14-gender-update.markdown`

**Required Front Matter:**
```yaml
---
title: Post Title
date: YYYY-MM-DD HH:MM:SS -04:00
layout: post  # Usually inherited from defaults
---
```

**Optional Front Matter:**
- `permalink` - Override URL (defaults to title slug)
- `image` - Social media share image
- `description` - Social media description
- `format` - One of: post, link, short (defaults to post)
- `categories` - Array of category names (must exist in `_category/`)
- `tags` - Array of tags for metadata
- `picture` - Structured image data (png_image, width, height, alt)
- `link` - External link URL (for link format)
- `audio` - Audio embed data (title, link)
- `thanks` - Attribution text
- `via` - Source attribution

**Read More Truncation:**
Add `<!-- more -->` in the post body to create a truncation point on the homepage.

### Categories
Categories must be manually created in `_category/` as HTML files.

To add a new category (e.g., "animals"):
1. Create `_category/animals.md`
2. Add front matter:
```yaml
---
title: Animals
permalink: "/category/animals/"
name: animals
---
```

## Configuration

Main configuration lives in `_config.yml`:
- Site metadata (title, description, author)
- Jekyll settings (permalink structure, pagination: 10 posts)
- Plugin configuration (uses jekyll-tagging via `_plugins/ext.rb`)
- Navigation links (5 main nav items with FontAwesome icons)
- Social media settings (Twitter, Facebook)
- Theme customization (header, footer, license info)

## Deployment

Site deploys automatically via GitHub Actions (`.github/workflows/jekyll.yml`):
- Triggers on pushes to `main` branch
- Builds with Ruby 3.2.3 and bundler
- Deploys to GitHub Pages
- Environment variables: `JEKYLL_ENV=production`

## Dependencies

**Ruby Gems** (see Gemfile):
- Core: jekyll, webrick, rouge, kramdown
- Plugins: jekyll-sitemap, jekyll-feed, jekyll-seo-tag, jekyll-paginate, jekyll-redirect-from, jekyll-tagging, and various jekyll-* utilities

**JavaScript**:
- Puppeteer (for screenshot generation)

## Key Files

- `_config.yml` - Main Jekyll configuration
- `Gemfile` - Ruby dependencies
- `README.md` - Human-readable documentation
- `about.markdown` - About page content
- `now.markdown` - Now page (current activities)
- `contact.markdown` - Contact page
- `archive.html` - Post archive page
- `atom.xml` - RSS feed
- `manifest.webmanifest` - PWA manifest

## Important Notes

- The site uses FontAwesome 2f4c7ed29d kit for icons
- Dynamic clock in navigation updates based on time of day (see `_layouts/default.html`)
- Timezone: America/New_York
- The site URL is https://mbbischoff.com
- License: Creative Commons BY-SA 4.0
- Repository: mattbischoff/website (on GitHub)
