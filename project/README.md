# Next.js Blog Platform - Assignment Submission

A modern blog platform built with Next.js 13+ App Router, demonstrating various rendering techniques including Client-Side Rendering (CSR), Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR).

## 🚀 Live Demo

[Add your deployed link here]

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Rendering Techniques](#rendering-techniques)
- [Getting Started](#getting-started)
- [Build and Deploy](#build-and-deploy)

## ✨ Features

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

## 📁 Project Structure

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

## 🎨 Rendering Techniques

### 1. Client-Side Rendering (CSR)

**Location**: Home page (`app/page.tsx`) - Live Clock component

**Implementation**:
```typescript
// components/LiveClock.tsx
'use client';

export default function LiveClock() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  // ...
}
```

**Purpose**: Displays current date and time that updates every second in the browser.

**Features**:
- Real-time updates without server requests
- Theme toggle with localStorage persistence
- Search functionality in blog sidebar

### 2. Server-Side Rendering (SSR)

**Location**: About page (`app/about/page.tsx`)

**Implementation**:
```typescript
async function getAuthorInfo(): Promise<User> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store', // This ensures SSR
  });
  return res.json();
}
```

**Purpose**: Fetches fresh author information on every page request.

**Benefits**:
- Always displays up-to-date information
- SEO friendly with server-rendered content
- Fast initial page load

### 3. Static Site Generation (SSG)

**Location**: Blog listing page (`app/blog/page.tsx`)

**Implementation**:
```typescript
async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache', // This enables SSG
  });
  return res.json();
}
```

**Purpose**: Pre-renders blog posts at build time for optimal performance.

**Benefits**:
- Lightning-fast page loads
- Reduced server load
- Excellent SEO

### 4. Incremental Static Regeneration (ISR)

**Location**: Blog detail pages (`app/blog/[id]/page.tsx`)

**Implementation**:
```typescript
async function getPost(id: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  );
  return res.json();
}

export async function generateStaticParams() {
  // Pre-render 12 blog posts at build time
  const posts = await getPosts();
  return posts.slice(0, 12).map((post) => ({
    id: post.id.toString(),
  }));
}
```

**Purpose**: Statically generates blog posts but allows automatic updates.

**Benefits**:
- Fast static pages
- Content stays fresh with automatic revalidation
- No full rebuild needed for updates

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [project-folder]
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

## 🏗 Build and Deploy

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

### Deployment

This project can be deployed to:

- **Vercel** (recommended for Next.js): Simply connect your GitHub repository
- **Netlify**: Use the build command `npm run build` and publish directory `.next`
- **Other platforms**: Export as static site with `output: 'export'` in next.config.js

## 📖 Pages Overview

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

## 🎯 Bonus Features Implemented

- ✅ Dark/light mode toggle with localStorage persistence
- ✅ Search feature in blog sidebar (client-side)
- ✅ Responsive design for all screen sizes
- ✅ Active navigation link highlighting
- ✅ Professional UI with smooth transitions
- ✅ Comprehensive footer with links

## 📝 Assignment Requirements Checklist

- ✅ Next.js project with App Router
- ✅ Tailwind CSS configured
- ✅ Proper folder structure in `app/` directory
- ✅ Main layout with header, navigation, and footer
- ✅ Nested blog layout with sidebar
- ✅ Home page with CSR clock component
- ✅ About page with SSR
- ✅ Blog listing with SSG
- ✅ Blog detail pages with ISR
- ✅ Dark/light mode toggle (bonus)
- ✅ Search feature (bonus)
- ✅ README documentation
- ✅ Project builds without errors

## 🔍 How to Verify Rendering Techniques

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

## 🤝 Contributing

This is an assignment project, but suggestions are welcome!

## 📄 License

MIT License - feel free to use this project for learning purposes.

## 👤 Author

[Your Name]
- GitHub: [Your GitHub Profile]
- Email: [Your Email]

---

Built with ❤️ using Next.js and TypeScript
