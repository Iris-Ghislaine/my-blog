import { User, Mail, Phone, Globe, Building, MapPin } from 'lucide-react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

async function getAuthorInfo(): Promise<User> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch author info');
  }

  return res.json();
}

export default async function AboutPage() {
  const author = await getAuthorInfo();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About This Blog</h1>
          <p className="text-xl text-muted-foreground">
            Learn more about the author and the technology behind this platform
          </p>
        </div>

        <div className="bg-card border rounded-lg p-8 shadow-lg mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{author.name}</h2>
              <p className="text-muted-foreground">@{author.username}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">{author.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-muted-foreground">{author.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Website</p>
                  <p className="text-muted-foreground">{author.website}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-muted-foreground">
                    {author.address.suite}, {author.address.street}
                    <br />
                    {author.address.city}, {author.address.zipcode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Company</p>
                  <p className="text-muted-foreground">{author.company.name}</p>
                  <p className="text-sm text-muted-foreground italic">
                    `{author.company.catchPhrase}`
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">About This Project</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              This blog platform is built with cutting-edge web technologies to demonstrate
              various rendering strategies in Next.js 13+ with the App Router.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Technologies Used</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Next.js 13+ with App Router</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for styling</li>
              <li>Shadcn/ui component library</li>
              <li>Lucide React icons</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Rendering Techniques</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong>Client-Side Rendering (CSR):</strong> The live clock on the home page
                and theme toggle update dynamically in the browser.
              </li>
              <li>
                <strong>Server-Side Rendering (SSR):</strong> This About page fetches fresh
                author data on every request for the most up-to-date information.
              </li>
              <li>
                <strong>Static Site Generation (SSG):</strong> The blog listing page is
                pre-rendered at build time for optimal performance.
              </li>
              <li>
                <strong>Incremental Static Regeneration (ISR):</strong> Individual blog posts
                are statically generated but can be updated without rebuilding the entire site.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This page uses Server-Side Rendering (SSR). Author information
            is fetched fresh on every page load using <code className="bg-muted px-1 py-0.5 rounded">cache: 'no-store'</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
