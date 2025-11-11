import Link from 'next/link';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }

  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return posts.slice(0, 12).map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPost(params.id);

  return (
    <div>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <article className="max-w-3xl">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8">
          <p className="text-sm">
            <strong>Rendering Method:</strong> Incremental Static Regeneration (ISR) - This page
            is statically generated and revalidated every 60 seconds.
          </p>
        </div>

        <div className="bg-card border rounded-lg p-8 shadow-lg">
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Author {post.userId}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Post #{post.id}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Revalidates every 60s</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-6">
            {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
          </h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
            </p>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold mb-2">About This Post</h3>
              <p className="text-muted-foreground">
                This is a sample blog post fetched from JSONPlaceholder API. In a real application,
                this would contain rich content with images, code snippets, and more detailed
                information.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Key Takeaways</h3>
              <ul className="space-y-2">
                <li>This page uses Incremental Static Regeneration (ISR)</li>
                <li>Content is pre-rendered at build time for fast initial load</li>
                <li>The page automatically revalidates every 60 seconds</li>
                <li>Users get fast, cached content while staying relatively up-to-date</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {parseInt(params.id) > 1 && (
            <Link
              href={`/blog/${parseInt(params.id) - 1}`}
              className="bg-card border rounded-lg p-4 hover:border-primary/50 transition-all"
            >
              <p className="text-sm text-muted-foreground mb-1">Previous Post</p>
              <p className="font-semibold flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Post #{parseInt(params.id) - 1}
              </p>
            </Link>
          )}
          {parseInt(params.id) < 12 && (
            <Link
              href={`/blog/${parseInt(params.id) + 1}`}
              className="bg-card border rounded-lg p-4 hover:border-primary/50 transition-all md:text-right"
            >
              <p className="text-sm text-muted-foreground mb-1">Next Post</p>
              <p className="font-semibold flex items-center gap-2 md:justify-end">
                Post #{parseInt(params.id) + 1}
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </p>
            </Link>
          )}
        </div>
      </article>
    </div>
  );
}
