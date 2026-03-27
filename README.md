# Bright Konadu Portfolio Website

A multilingual personal portfolio and profile website built with Next.js for Bright Konadu.

## Overview

This project presents:

- a professional home page
- a full profile page with experience, skills, certifications, education, languages, and achievements
- a graphics portfolio page
- English and French language switching
- a downloadable profile export that matches the profile page content

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Radix UI

## Pages

- `/` - home page
- `/profile` - full professional profile
- `/profile/download` - downloadable profile export
- `/graphics` - design portfolio

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project Structure

```text
app/           App routes and pages
components/    Reusable UI and page sections
data/          Profile, portfolio, and site copy data
lib/           Helpers and shared utilities
public/        Static assets and images
```

## Notes

- The site content is driven from shared data files to keep the on-page profile and downloaded profile aligned.
- Language switching is handled client-side and currently supports English and French.

## Repository

GitHub: `https://github.com/captin-p/www.brit-tech.uk-v2--My-Profile-.git`
