


export default function Footer() {
  return (
    <>
      <footer className='grotesk bg-[#f9fbfb]'>
        <div className='max-w-8xl mx-auto px-5 py-24 text-black'>
          <div className='order-first flex flex-wrap text-left'>
            <div className='w-full md:w-2/4 lg:w-1/5'>
              <a  href='#/'>
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
                  <a  href='#/'>How It Works </a>
                </li>
                <li>
                  <a  href='#/'>Pricing</a>
                </li>
                <li>
                  <a  href='#/'>NFC Portals</a>
                </li>
                <li>
                  <a  href='#/'>vs. Linktree</a>
                </li>
                <li>
                  <a href='#/'>Sign In</a>
                </li>
                <li>
                  <a href='#/'>Malesuada.</a>
                </li>
              </nav>
            </div>
            <div className='w-full px-4 md:w-2/4 lg:w-1/5'>
              <h2 className='mb-3 text-lg tracking-widest'>Company</h2>
              <nav className='mb-10 list-none space-y-2 py-3'>
                <li>
                  <a href='#/'>Affiliate Program </a>
                </li>
                <li>
                  <a href='#/'>Branding</a>
                </li>
                <li>
                  <a href='#/'>Terms</a>
                </li>
                <li>
                  <a href='#/'>Privacy</a>
                </li>
              </nav>
            </div>
            <div className='w-full px-4 md:w-2/4 lg:w-1/5'>
              <h2 className='mb-3 text-lg tracking-widest'>Support</h2>
              <nav className='mb-10 list-none space-y-2 py-3'>
                <li>
                  <a href='#/'>Help Docs </a>
                </li>
                <li>
                  <a href='#/'>Expert Tips</a>
                </li>

                <li>
                  <a href='#/'>Contact</a>
                </li>
              </nav>
            </div>
            <div className='w-full px-4 md:w-2/4 lg:w-1/5'>
              <h2 className='mb-3 text-lg tracking-widest'>Social</h2>
              <nav className='mb-10 list-none space-y-2 py-3'>
                <li>
                  <a href='#/'>Instagram </a>
                </li>
                <li>
                  <a href='#/'>Blog</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
