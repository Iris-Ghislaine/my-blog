'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <header className="border-b bg-card shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-8">
                  <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
                    NextJS Blog
                  </Link>
                  <div className="flex space-x-6">
                    <Link
                      href="/"
                      className={`hover:text-primary transition-colors ${
                        pathname === '/' ? 'text-primary font-semibold' : ''
                      }`}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className={`hover:text-primary transition-colors ${
                        pathname === '/about' ? 'text-primary font-semibold' : ''
                      }`}
                    >
                      About
                    </Link>
                    <Link
                      href="/blog"
                      className={`hover:text-primary transition-colors ${
                        pathname?.startsWith('/blog') ? 'text-primary font-semibold' : ''
                      }`}
                    >
                      Blog
                    </Link>
                  </div>
                </div>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>
            </nav>
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <footer className="border-t bg-card mt-auto">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-2">NextJS Blog</h3>
                  <p className="text-sm text-muted-foreground">
                    A modern blog platform built with Next.js, showcasing various rendering techniques.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quick Links</h4>
                  <ul className="space-y-1 text-sm">
                    <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                    <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                    <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Next.js 13+ App Router</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>SSR, SSG, ISR & CSR</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} NextJS Blog. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
