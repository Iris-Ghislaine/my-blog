'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, BookOpen, Code, Heart, GraduationCap } from 'lucide-react';

const categories = [
  { name: 'Tech', icon: Code, slug: 'tech' },
  { name: 'Lifestyle', icon: Heart, slug: 'lifestyle' },
  { name: 'Education', icon: GraduationCap, slug: 'education' },
];

export default function BlogLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-card border rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <li key={category.slug}>
                      <Link
                        href={`/blog?category=${category.slug}`}
                        className="flex items-center gap-2 p-2 rounded-md hover:bg-accent transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{category.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-card border rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Posts
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              {searchQuery && (
                <div className="mt-3">
                  <p className="text-sm text-muted-foreground">
                    Searching for: <span className="font-semibold text-foreground">{searchQuery}</span>
                  </p>
                </div>
              )}
            </div>

            <div className="bg-card border rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">About This Blog</h3>
              <p className="text-sm text-muted-foreground">
                Explore articles on technology, lifestyle, and education. Learn something new every day!
              </p>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
}
