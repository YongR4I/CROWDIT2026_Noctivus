# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Run development server (Tailwind watch): `npm run dev`
- Build for production (Tailwind minify): `npm run build`
- No testing framework is currently configured.

## Architecture & Structure
This is a static web application using HTML, CSS, and Tailwind CSS. The structure is broken down by feature area:
- `/assets`: Contains static resources (CSS, fonts, icons, images, JS). Tailwind CSS output lives in `/assets/css/style.css`.
- `index.html`: The main landing page.
- `/dashboard`: Dashboard pages and statistics (e.g., `home`, `report-list`).
- `/edukasi`: Educational content pages (e.g., `home`, `detail-article`, `detail-tips`, `detail-video`).
- `/komunitas`: Community action event pages (e.g., `event`, `event detail`, `see more event`).
- `/report`: Environmental reporting system pages (e.g., `form`, `report detail`, `see more report`).
- `/srs`: Project requirements and guidelines (`cleancode.md`, `mobilefirstdesign.md`).

## Development Guidelines
- **Clean Code (`srs/cleancode.md`)**: Use 2 spaces for indentation. Use kebab-case for file names. Write semantic HTML (`<header>`, `<nav>`, `<section>`, etc.) instead of generic `<div>`s.
- **Tailwind Class Order**: Follow layout/position -> dimensions -> spacing -> typography -> visual/color -> state/responsive.
- **Mobile First (`srs/mobilefirstdesign.md`)**: Ensure designs adhere to mobile-first principles. Build the mobile layout first, then use Tailwind responsive prefixes (`md:`, `lg:`) for larger screens.
- **Styling**: Handled almost exclusively via Tailwind utility classes. The primary theme color is `#004c0bff` and secondary is `#ecececff` (configured in `tailwind.config.js`).