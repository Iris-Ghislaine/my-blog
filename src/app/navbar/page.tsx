import Link from 'next/link'

export function Navbar() {
  return (
<nav className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-8">
                  <Link href="/" className="text-xl font-bold hover:text-gray-500 transition-colors">
                    NextJS Blog
                  </Link>
                  <div className="flex space-x-6">
                    <Link
                      href="/"
                      className='hover:text-gray-500 transition-colors text-gray-500 font-semibold' 
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className='hover:text-gray-500 transition-colors text-gray-500 font-semibold'
                    >
                      About
                    </Link>
                    <Link
                      href="/blog"
                      className='hover:text-gray-500 transition-colors text-gray-500 font-semibold'
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
  )
}
