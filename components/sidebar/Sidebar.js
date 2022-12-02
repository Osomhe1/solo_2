import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import pic from '../../public/images/team-2-800x800.jpg'

// import NotificationDropdown from './NotificationDropdown.js'
// import UserDropdown from './UserDropdown.js'

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState('hidden')
  return (
    <>
      <aside>
        <nav className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10  px-6 py-4 '>
          <div
            className='md:grid md:items-stretch md:max-h-full    px-2  
           items-center justify- w-full mx-auto'
            // className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap
            //  items-center justify-between w-full mx-auto'
          >
            {/* Toggler */}
            {/* Brand */}

            <div className='mt-5'>
              <Image
                alt='...'
                src={pic}
                className=' h-auto  rounded-full align-middle  border-none shadow-xl   '
                style={{ maxWidth: '150px' }}
                height={100}
                width={100}
              />
            </div>

            <div
            // className={
            //   'md:grid md:flex-co md:items- md: md:mt- md:shadow-none     '
            //   // collapseShow
            // }
            >
              {/* Navigation */}
              <div className='py-10'>
                <ul
                // className='md:flex-col md:min-w-full flex flex-col list-none  '
                >
                  <li className='items-center hover:bg-gray-200 '>
                    <Link
                      className='text-pink-500 hover:text-pink-600 text-xs uppercase py-3 font-bold block'
                      href='/dashboard'
                    >
                      <i className='fas fa-tv opac mr-2 text-sm'></i> My Page
                    </Link>
                  </li>

                  <li className='items-center hover:bg-gray-200'>
                    <Link
                      className='text-blueGray-700 hover:text-blueGray-500 text-xs flex  gap-2 items-center uppercase py-3 font-bold '
                      href='/analytics'
                    >
                      {/* <i className='fas fa-newspaper text-blueGray-400 mr-2 text-sm'></i>{' '} */}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
                        />
                      </svg>
                      Analytics
                    </Link>
                  </li>

                  <li className='items-center hover:bg-gray-200'>
                    <Link
                      className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'
                      href='/referrals'
                    >
                      <i className='fas fa-user-circle text-blueGray-400 mr-2 text-sm'></i>{' '}
                      Referrals
                    </Link>
                  </li>

                  <li className='items-center hover:bg-gray-200'>
                    <Link
                      className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'
                      href='/acount'
                    >
                      <i className='fas fa-fingerprint text-blueGray-400 mr-2 text-sm'></i>{' '}
                      Account
                    </Link>
                  </li>

                  <li className='items-center hover:bg-gray-200'>
                    <Link
                      className='text-blueGray-300 text-xs uppercase py-3 font-bold block'
                      href='/auth/Login'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fas fa-clipboard-list text-blueGray-300 mr-2 text-sm'></i>{' '}
                      Log Out
                    </Link>
                  </li>

                  <li className='items-center hover:bg-gray-200'>
                    <button
                      className='text-blueGray-300 text-xs uppercase py-3 font-bold block'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fas fa-tools text-blueGray-300 mr-2 text-sm'></i>{' '}
                      Upgrade
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}
