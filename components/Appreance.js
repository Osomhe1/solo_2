// import { Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Appreance() {
  return (
    <div className=''>
      {/* <Menu as='div' className='relative inline-block text-left w-full'>
      <div>
        <Menu.Button className='inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
          Appreance
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z- mt- w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
            <form method='POST' action='#'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type='submit'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu> */}

      {/* <!-- Start block --> */}
      

      <div className=''>
        <section className='bg-white dark:bg-gray-800 dark:text-gray-100 mx-4'>
          {/* container flex flex-col justify-center p-4 mx-auto md:p-8 */}
          <div className=' max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6  '>
            <div className='flex flex-col  sm:p lg:px- xl:px- divide-gray-700'>
              <details>
                <summary className='py-2 outline-none cursor-pointer text-3xl flex justify-between'>
                  Appearnces
                  <svg
                    data-accordion-icon=''
                    class='w-6 h-6  shrink-0'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </summary>
                <div className='px-4 pb-4'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde neque in fugiat magni, quas animi enim veritatis
                    deleniti ex. Impedit.
                  </p>
                </div>
              </details>
             
            </div>
          </div>
        </section>
      </div>
      {/* <!-- End block --> */}
    </div>
  )
}
