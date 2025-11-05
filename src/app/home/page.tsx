import { BookOpen, Code, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Welcome to NextJS Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A modern blog platform showcasing Next.js App Router capabilities with various rendering techniques
          including CSR, SSR, SSG, and ISR.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Explore Blog Posts
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors font-semibold"
          >
            Learn More
          </Link>
        </div>
      </section>
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Client-Side Rendering</h3>
            <p className="text-sm text-muted-foreground">
              Dynamic content that updates in real-time on the client side.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Server-Side Rendering</h3>
            <p className="text-sm text-muted-foreground">
              Fresh data fetched on every request for dynamic pages.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Static Site Generation</h3>
            <p className="text-sm text-muted-foreground">
              Pre-rendered pages at build time for optimal performance.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Incremental Static Regeneration</h3>
            <p className="text-sm text-muted-foreground">
              Automatic page updates with on-demand revalidation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-card border rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Reading?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Discover insightful articles on technology, lifestyle, and education.
          Our blog features content powered by different rendering strategies for optimal performance.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          <BookOpen className="h-5 w-5" />
          Browse All Posts
        </Link>
      </section>
    </div>
  );
}
