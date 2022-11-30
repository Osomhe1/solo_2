import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import pic from '../../public/images/team-2-800x800.jpg'

const NewSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <aside>
        {showSidebar ? (
          <button
            // className='flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50'
            className='flex text-2xl text-gray-400 items-center cursor-pointer fixed left-40 top-6 z-50'
            onClick={() => setShowSidebar(!showSidebar)}
          >
            x
          </button>
        ) : (
          <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className='fixed  z-30 flex items-center cursor-pointer left-10 top-6'
            fill='#2563EB'
            viewBox='0 0 100 80'
            width='40'
            height='40'
          >
            <rect width='100' height='10'></rect>
            <rect y='30' width='100' height='10'></rect>
            <rect y='60' width='100' height='10'></rect>
          </svg>
        )}

        <div
          className={`top-0 left-0 w-2/5 bg-white  p-10 pl-0 text- fixed h-[98%] z-40 
            
         ease-in-out duration-300 ${showSidebar ? 'translate-x-0 ' : 'hidden'}`}
          //   className={`top-0 left-0 w-[20vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40
          //  ease-in-out duration-300 ${
          //    showSidebar ? 'translate-x-0 ' : 'translate-x-full'
          //  }`}
        >
          <nav
            className='
             justify-between relative  z-10  px-6 py-6 '
            //  flex flex-wrap items-center
          >
            <div
              className='   px-0 flex flex-wrap
             items-center justify-between w-[90%] mx-auto m-auto'
            >
              <div className=''>
                <Image
                  alt='...'
                  src={pic}
                  className=' h-auto  rounded-full align-middle  border-none shadow-xl   '
                  style={{ maxWidth: '150px' }}
                  height={100}
                  width={100}
                />
              </div>

              {/* Collapse */}
              <div>
                {/* Collapse header */}

                {/* Navigation */}
                <div className=''>
                  <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
                    <li className='items-center'>
                      <Link
                        className='text-pink-500 hover:text-pink-600 text-xs uppercase py-3 font-bold block'
                        href='/dashboard'
                      >
                        <i className='fas fa-tv opacity-75 mr-2 text-sm'></i>{' '}
                        Dashboard
                      </Link>
                    </li>

                    <li className='items-center'>
                      <Link
                        className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'
                        href='/'
                      >
                        <i className='fas fa-newspaper text-blueGray-400 mr-2 text-sm'></i>{' '}
                        Landing Page
                      </Link>
                    </li>

                    <li className='items-center'>
                      <Link
                        className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'
                        href='/dashboard'
                      >
                        <i className='fas fa-user-circle text-blueGray-400 mr-2 text-sm'></i>{' '}
                        Profile Page
                      </Link>
                    </li>

                    <li className='items-center'>
                      <Link
                        className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'
                        href='/auth/Login'
                      >
                        <i className='fas fa-fingerprint text-blueGray-400 mr-2 text-sm'></i>{' '}
                        Login
                      </Link>
                    </li>

                    <li className='items-center'>
                      <Link
                        className='text-blueGray-300 text-xs uppercase py-3 font-bold block'
                        href='/auth/SignUp'
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className='fas fa-clipboard-list text-blueGray-300 mr-2 text-sm'></i>{' '}
                        Register (soon)
                      </Link>
                    </li>

                    <li className='items-center'>
                      <a
                        className='text-blueGray-300 text-xs uppercase py-3 font-bold block'
                        href='#pablo'
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className='fas fa-tools text-blueGray-300 mr-2 text-sm'></i>{' '}
                        Settings (soon)
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Divider */}
                <hr className='my-4 md:min-w-full' />
                {/* Heading */}
                <h6 className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
                  Documentation
                </h6>
                {/* Navigation */}
                <ul className='md:flex-col md:min-w-full flex flex-col list-none md:mb-4'>
                  <li className='inline-flex'>
                    <Link
                      className='text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold'
                      href='/'
                    >
                      <i className='fas fa-paint-brush mr-2 text-blueGray-400 text-base'></i>{' '}
                      Styles
                    </Link>
                  </li>

                  <li className='inline-flex'>
                    <Link
                      className='text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold'
                      href='/'
                    >
                      <i className='fab fa-css3-alt mr-2 text-blueGray-400 text-base'></i>{' '}
                      CSS Components
                    </Link>
                  </li>

                  <li className='inline-flex'>
                    <Link
                      className='text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold'
                      href='/'
                    >
                      <i className='fab fa-vuejs mr-2 text-blueGray-400 text-base'></i>{' '}
                      VueJS
                    </Link>
                  </li>

                  <li className='inline-flex'>
                    <Link
                      className='text-blueGray-700 hover:text-blueGray-500  text-sm block mb-4 no-underline font-semibold'
                      href='/'
                    >
                      <i className='fab fa-react mr-2 text-blueGray-400 text-base'></i>{' '}
                      React
                    </Link>
                  </li>

                  <li className='inline-flex'>
                    <Link
                      className='text-blueGray-700 hover:text-blueGray-500  text-sm block mb-4 no-underline font-semibold'
                      href='/'
                    >
                      <i className='fab fa-angular mr-2 text-blueGray-400 text-base'></i>{' '}
                      Angular
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default NewSidebar
