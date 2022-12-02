import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

export default function Link() {
  return (
    <div>
      <div className=''>
        {/* <!-- Start block --> */}
       

        <div className=''>
          <section className='bg-white dark:bg-gray-800 dark:text-gray-100 mx-4'>
            {/* container flex flex-col justify-center p-4 mx-auto md:p-8 */}
            <div className=' max-w-screen-xl px-4 pb-8 mx-auto lg:pb-4 lg:px-6  '>
              <div className='flex flex-col  sm:p lg:px- xl:px- divide-gray-700'>
                <details>
                  <summary className='py-2 outline-none cursor-pointer text-3xl flex justify-between items-center '>
                    Links & Embeds
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
                  <div className='px-4 pb-4'>
                    <form>
                      <div className='mb-6 '>
                        <label
                          for='add_new'
                          className=' items-center gap-2 mb-2 text-2xl inline-flex font-normal text-white dark:text-white'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill=''
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-12 h-12 '
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                              className=' fill-blue-500'
                            />
                          </svg>
                          <span className='text-blue-500'>Add New</span>
                        </label>
                        <input
                          type='text'
                          id='links'
                          placeholder='no links or embles'
                          className='bg-gray-50  text-center border-dashed border-2 border-gray-300 text-gray-900 text-sm 
                          rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-5
                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                          required
                        />
                      </div>
                    </form>
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
    </div>
  )
}
