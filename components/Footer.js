import Link from "next/link";



export default function Footer() {
  return (
    <>
      <footer className='grotesk bg-[#f9fbfb]'>
        <div className='max-w-8xl mx-auto px-5 py-24 text-black'>
          <div className='order-first flex flex-wrap text-left'>
            <div className='w-full md:w-2/4 lg:w-1/5'>
              <a href='#/'>
                <div className='relative border transition hover:border-gray-500'>
                  <div className='p-6'>
                    <div className=''>
                      <p>© 2022 · All rights reserved</p>
                      <p>1% carbon removal initiative</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className='w-full px-4 md:w-2/4 lg:w-1/5'>
              <h2 className='mb-3 text-lg tracking-widest'>Service</h2>
              <nav className='list-none space-y-2 py-3'>
                <li>
                  <Link href='#/'>How It Works </Link>
                </li>
                <li>
                  <Link href='#/'>Pricing</Link>
                </li>
                <li>
                  <Link href='#/'>NFC Portals</Link>
                </li>
                <li>
                  <Link href='#/'>vs. Linktree</Link>
                </li>
                <li>
                  <Link href='#/'>Sign In</Link>
                </li>
                <li>
                  <Link href='#/'>Malesuada.</Link>
                </li>
              </nav>
            </div>
            <div className='w-full px-4 md:w-2/4 lg:w-1/5'>
              <h2 className='mb-3 text-lg tracking-widest'>Company</h2>
              <nav className='mb-10 list-none space-y-2 py-3'>
                <li>
                  <Link href='#/'>Affiliate Program </Link>
                </li>
                <li>
                  <Link href='#/'>Branding</Link>
                </li>
                <li>
                  <Link href='#/'>Terms</Link>
                </li>
                <li>
                  <Link href='#/'>Privacy</Link>
                </li>
              </nav>
            </div>
            <div className='w-full px-4 md:w-2/4 lg:w-1/5'>
              <h2 className='mb-3 text-lg tracking-widest'>Support</h2>
              <nav className='mb-10 list-none space-y-2 py-3'>
                <li>
                  <Link href='#/'>Help Docs </Link>
                </li>
                <li>
                  <Link href='#/'>Expert Tips</Link>
                </li>

                <li>
                  <Link href='#/'>Contact</Link>
                </li>
              </nav>
            </div>
            <div className='w-full px-4 md:w-2/4 lg:w-1/5'>
              <h2 className='mb-3 text-lg tracking-widest'>Social</h2>
              <nav className='mb-10 list-none space-y-2 py-3'>
                <li>
                  <Link href='#/'>Instagram </Link>
                </li>
                <li>
                  <Link href='#/'>Blog</Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
