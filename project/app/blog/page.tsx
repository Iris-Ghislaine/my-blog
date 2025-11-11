import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts = await res.json();
  return posts.slice(0, 12);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Blog Posts</h1>
        <p className="text-muted-foreground">
          Explore our collection of articles on various topics
        </p>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
        <p className="text-sm">
          <strong>Rendering Method:</strong> Static Site Generation (SSG) - These posts are
          pre-rendered at build time for optimal performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/50 group"
          >
            <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Author {post.userId}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Post #{post.id}</span>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </h2>

            <p className="text-muted-foreground mb-4 line-clamp-3">
              {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
            </p>

            <Link
              href={`/blog/${post.id}`}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Read More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground">
          Showing {posts.length} of {posts.length} posts
        </p>
      </div>
    </div>
  );
}
