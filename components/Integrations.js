import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

export default function Integrations() {
  return (
    <div>
      <div className=''>
        {/* <!-- Start block --> */}

        <div className=''>
          <section className='bg-white dark:bg-gray-800 dark:text-gray-100 container mx-auto relative'>
            {/* container flex flex-col justify-center p-4 mx-auto md:p-8 */}
            <div className=' max-w-screen-xl px-4 pb-8 mx-auto lg:pb-4 lg:px-6  '>
              <div className='flex flex-col  sm:p lg:px- xl:px- divide-gray-700'>
                <details>
                  <summary className='py-2 outline-none cursor-pointer text-3xl flex justify-between items-center'>
                    Integration
                    {/* <svg
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
                    </svg> */}
                    <ChevronDownIcon className='text- h-14' />
                  </summary>
                  <div className='py-4 my-4'>
                    <div className='py-1'>
                      <div className=''>
                        <h1
                          className=' text-sm font-medium uppercase text-[#8BC940]
                           dark:text-gray-300 py-1'
                        >
                          LINK SEARCH
                        </h1>
                        <label className='inline-flex relative items-center  cursor-pointer'>
                          <input
                            type='checkbox'
                            value=''
                            className='sr-only peer'
                          />
                          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 
                          peer-focus:ring-[#8BC940] dark:peer-focus:ring-blue-800 dark:bg-gray-700 
                          peer-checked:after:translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                    <div className='py-1'>
                      <div className=''>
                        <h1
                          className=' text-sm font-medium uppercase text-[#8BC940]
                           dark:text-gray-300 py-1'
                        >
                          META PIXEL
                        </h1>
                        <label className='inline-flex relative items-center  cursor-pointer'>
                          <input
                            type='checkbox'
                            value=''
                            className='sr-only peer'
                            checked
                          />
                          <div
                            className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4
                             peer-focus:ring-[#8BC940] dark:peer-focus:ring-blue-800 dark:bg-gray-700
                              peer-checked:after:translate-x-full peer-checked:after:border-white 
                              after:content-[''] after:absolute after:top-0.5 after:left-[2px]
                               after:bg-white after:border-gray-300 after:border after:rounded-full 
                               after:h-5 after:w-5 after:transition-all dark:border-gray-600
                                peer-checked:bg-blue-600"
                          ></div>
                        </label>
                      </div>
                    </div>
                    <div className='py-1'>
                      <div className=''>
                        <h1
                          className=' text-sm font-medium uppercase text-[#8BC940]
                           dark:text-gray-300 py-1'
                        >
                          CONTACT CAPTURE
                        </h1>
                        <label className='inline- relative items-center  cursor-pointer'>
                          <input
                            type='checkbox'
                            value=''
                            className='sr-only peer'
                            disabled
                          />
                          <div
                            className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 
                          peer-checked:after:translate-x-full peer-checked:after:border-white 
                          after:content-[''] after:absolute after:top-0.5 after:left-[2px]
                           after:bg-white after:border-gray-300 after:border after:rounded-full 
                           after:h-5 after:w-5 after:transition-all dark:border-gray-600
                            peer-checked:bg-blue-600"
                          ></div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='text-center mt-6 float-right '>
                    <button
                      className='bg-[#8BC940] text-white active:bg-gray-700 text-sm font-bold uppercase
                       px-6 py-5 absolute right-0 rounded shadow hover:shadow-lg outline-none 
                       focus:outline-none mr-1 mb-1 w-[100px]
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
    </div>
  )
}
