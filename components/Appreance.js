// import { Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'



export default function Appreance() {
  return (
    <div className=''>
      

      {/* <!-- Start block --> */}

      <div className=''>
        <section className='bg-white dark:bg-gray-800 dark:text-gray-100 mx-4'>
          {/* container flex flex-col justify-center p-4 mx-auto md:p-8 */}
          <div className=' max-w-screen-xl px-4 pb-8 mx-auto lg:pb-4 lg:px-6  '>
            <div className='flex flex-col  sm:p lg:px- xl:px- divide-gray-700'>
              <details>
                <summary
                  className='py-2 outline-none cursor-pointer text-3xl flex justify-between
                 items-center '
                >
                  Appearnces
                 
                  <ChevronDownIcon className='text- h-14' />
                </summary>
                <div className='px-4 pb-4'>
                  <div className='my-3'>
                    <h2 className='uppercase'>Font</h2>
                    <button
                      type='button'
                      className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    >
                      Graphik
                    </button>
                    <button
                      type='button'
                      className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                    >
                      Roboto Mono
                    </button>
                    <button
                      type='button'
                      className='text-gray-900 bg-white- hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                    >
                      Maitree
                    </button>
                    <button
                      type='button'
                      className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    >
                      Chillax
                    </button>
                    <button
                      type='button'
                      className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    >
                      Nippo
                    </button>
                  </div>
                  <div className='my-3'>
                    <h2 className='uppercase'>THEME</h2>

                    <button
                      type='button'
                      className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    >
                      Light
                    </button>
                    <button
                      type='button'
                      className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    >
                      Dark
                    </button>
                    <button
                      type='button'
                      className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    >
                      Viod
                    </button>
                  </div>
                  <div className='my-3'>
                    <h2 className='uppercase'>FAVICON</h2>

                    <button
                      type='button'
                      className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    >
                      Custom
                    </button>
                    <button
                      type='button'
                      className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    >
                      Default
                    </button>
                  </div>
                  <div className='my-3'>
                    <h2 className='uppercase'>LINK THUMBNAILS</h2>

                    <button
                      type='button'
                      className='text-gray-900 bg-blue-400 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    >
                      Squre
                    </button>
                    <button
                      type='button'
                      className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    >
                      Round
                    </button>
                  </div>
                </div>
                <div className='text-center mt-6 float-right '>
                  <button
                    className='bg-blue-500 text-white active:bg-gray-700 text-sm font-bold uppercase
                       px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-[100px]
                       bottom-0 '
                    type='button'
                    style={{ transition: 'all .15s ease' }}
                  >
                    save
                  </button>
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
