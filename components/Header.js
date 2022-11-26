import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  return (
    <div className=' top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out'>
      <div className='flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8'>
        <div className='flex flex-row items-center justify-between p-4'>
          <Link
            href='/'
            className='text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline'
          >
            {/* <h1 className='text-4xl Avenir tracking-tighter text-gray-900 md:text-4x1 lg:text-3xl'>
              NINE4
            </h1> */}
            <Image
              className='Avenir object-fit '
              alt='iPhone-12'
              src='/images/solo_logo.jpeg'
              width={60}
              height={40}
            />
          </Link>
          <button
            className='text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none '
            type='button'
            aria-label='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#191919'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-menu'
            >
              <line x1='3' y1='12' x2='21' y2='12'></line>
              <line x1='3' y1='6' x2='21' y2='6'></line>
              <line x1='3' y1='18' x2='21' y2='18'></line>
            </svg>
          </button>
        </div>
        <div
          className={
            ' md:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <nav className='flex-col flex-grow '>
            <ul className='grid  md:flex md:flex-grow justify-end px-12 md:px-2 py-3 md:py-0 md:flex-wrap  items-center'>
              <li>
                <Link
                  href='/howitworks'
                  className='font-medium text-gray-600 hover:text-gray-900 px-5 py-1 flex items-center
                   transition duration-150 ease-in-out'
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  className='font-medium text-gray-600 hover:text-gray-900 px-5 py-1 flex items-center
                   transition duration-150 ease-in-out'
                  href='/price/Price'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className='font-medium text-gray-600 hover:text-gray-900 px-5 py-1 flex items-center transition duration-150 ease-in-out'
                  href='/portals'
                >
                  NFC Portals
                </Link>
              </li>
              <li className='py-1 md:py-0'>
                <Link
                  className='inline-flex items-center px-4 py-2 mt-2 font-medium text-blue-600 transition
                   border-2 border-blue-600 duration-500 ease-in-out transform bg-transparent rounded-lg 
                   text-md md:mt-0 md:ml-4 bg-white mx-4'
                  href='/auth/Login'
                >
                  <span className='justify-center'>Sign In</span>
                  <svg
                    className='w-3 h-3 fill-current text-gray-400 flex ml-2 -mr-1'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  ></svg>
                </Link>
              </li>
              <li className='py-1 md:py-0'>
                <Link
                  className='inline-flex items-center px-4 py-2 mt-2  font-medium text-blue-600 transition
                   border-2 border-blue-600 duration-500 ease-in-out transform bg-transparent rounded-lg
                    text-md md:mt-0 md:ml-4 bg-white mx-4'
                  href='/auth/SignUp'
                >
                  <span className='justify-center'>Create Account</span>
                  <svg
                    className='w-3 h-3 fill-current text-gray-400 flex ml-2 -mr-1'
                    viewBox='0 0 12 12'
                    xmlns='http://www.w3.org/2000/svg'
                  ></svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}