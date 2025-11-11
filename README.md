# Next.js Blog Platform - Assignment Submission

A modern blog platform built with Next.js 13+ App Router, demonstrating various rendering techniques including Client-Side Rendering (CSR), Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR).

## Deployment 

live demo : ```https://my-blognext.netlify.app/```

## Features

- **Modern UI/UX**: Clean, professional design with dark/light mode toggle
- **Responsive Layout**: Fully responsive design that works on all devices
- **Navigation**: Header with active link highlighting and sticky positioning
- **Blog System**: Complete blog with listing, detail pages, and sidebar
- **Search Functionality**: Client-side search in blog sidebar
- **Theme Persistence**: Dark/light mode preference saved to localStorage
- **SEO Friendly**: Optimized with various rendering strategies

## 🛠 Technologies Used

- **Next.js 13+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/ui** component library
- **Lucide React** for icons
- **JSONPlaceholder API** for mock data

## Project Structure

```
app/
├── layout.tsx                 # Main layout with header, footer, and theme toggle
├── page.tsx                   # Home page with CSR live clock
├── about/
│   └── page.tsx              # About page with SSR
└── blog/
    ├── layout.tsx            # Nested blog layout with sidebar
    ├── page.tsx              # Blog listing with SSG
    └── [id]/
        └── page.tsx          # Blog detail page with ISR

components/
└── LiveClock.tsx             # Client-side clock component

components/ui/                 # Shadcn/ui components
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Iris-Ghislaine/my-blog
cd my-blog 
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build and Deploy

### Local Build

To create a production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

### Type Checking

To check TypeScript types:

```bash
npm run typecheck
```

##  Pages Overview

### Home Page (`/`)
- Welcome section with project introduction
- Live clock component (CSR) updating every second
- Feature cards explaining rendering techniques
- Call-to-action section

### About Page (`/about`)
- Author information fetched via SSR
- Contact details and company information
- Project technology stack
- Rendering techniques explanation

### Blog Listing (`/blog`)
- Grid of blog post cards (SSG)
- Sidebar with categories
- Search functionality
- Links to individual posts

### Blog Detail (`/blog/[id]`)
- Full post content (ISR)
- Author and metadata
- Navigation to previous/next posts
- Revalidates every 60 seconds

## Bonus Features Implemented

- ✅ Dark/light mode toggle with localStorage persistence
- ✅ Search feature in blog sidebar (client-side)
- ✅ Responsive design for all screen sizes
- ✅ Active navigation link highlighting
- ✅ Professional UI with smooth transitions
- ✅ Comprehensive footer with links


## How to Verify Rendering Techniques

### CSR (Client-Side Rendering)
1. Visit the home page
2. Notice the clock updates every second
3. Toggle dark/light mode - changes persist on refresh

### SSR (Server-Side Rendering)
1. Visit `/about`
2. View page source (Ctrl+U)
3. Notice the author data is in the HTML (not loaded by JavaScript)
4. Refresh the page - data is fetched fresh each time

### SSG (Static Site Generation)
1. Run `npm run build`
2. Check the build output - blog listing is marked as `○ (Static)`
3. Posts are pre-rendered at build time

### ISR (Incremental Static Regeneration)
1. Blog detail pages are marked as `● (SSG)` in build output
2. Pages use `revalidate: 60` to update every 60 seconds
3. Pre-rendered but can be updated without full rebuild

## Contributing

This is an assignment project, but suggestions are welcome!

