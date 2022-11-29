import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

export default function Integrations() {
  return (
    <div>
      <div className=''>
        {/* <!-- Start block --> */}
        {/* <section class='bg-white dark:bg-gray-900'>
          <div class='max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 '>
            <h2 class='mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white'>
              Frequently asked questions
            </h2>
            <div class='max-w-screen-md mx-auto'>
              <div
                id='accordion-flush'
                data-accordion='collapse'
                data-active-classes='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
                data-inactive-classes='text-gray-500 dark:text-gray-400'
              >
                <h3 id='accordion-flush-heading-1'>
                  <button
                    type='button'
                    class='flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white'
                    data-accordion-target='#accordion-flush-body-1'
                    aria-expanded='true'
                    aria-controls='accordion-flush-body-1'
                  >
                    <span>Can I use Landwind in open-source projects?</span>
                    <svg
                      data-accordion-icon=''
                      class='w-6 h-6 rotate-180 shrink-0'
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
                  </button>
                </h3>
                <div
                  id='accordion-flush-body-1'
                  class=''
                  aria-labelledby='accordion-flush-heading-1'
                >
                  <div class='py-5 border-b border-gray-200 dark:border-gray-700'>
                    <p class='mb-2 text-gray-500 dark:text-gray-400'>
                      Landwind is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                    <p class='text-gray-500 dark:text-gray-400'>
                      Check out this guide to learn how to{' '}
                      <a
                        href='#'
                        class='text-purple-600 dark:text-purple-500 hover:underline'
                      >
                        get started
                      </a>{' '}
                      and start developing websites even faster with components
                      on top of Tailwind CSS.
                    </p>
                  </div>
                </div>
                <h3 id='accordion-flush-heading-2'>
                  <button
                    type='button'
                    class='flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
                    data-accordion-target='#accordion-flush-body-2'
                    aria-expanded='false'
                    aria-controls='accordion-flush-body-2'
                  >
                    <span>Is there a Figma file available?</span>
                    <svg
                      data-accordion-icon=''
                      class='w-6 h-6 shrink-0'
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
                  </button>
                </h3>
                <div
                  id='accordion-flush-body-2'
                  class='hidden'
                  aria-labelledby='accordion-flush-heading-2'
                >
                  <div class='py-5 border-b border-gray-200 dark:border-gray-700'>
                    <p class='mb-2 text-gray-500 dark:text-gray-400'>
                      Landwind is first conceptualized and designed using the
                      Figma software so everything you see in the library has a
                      design equivalent in our Figma file.
                    </p>
                    <p class='text-gray-500 dark:text-gray-400'>
                      Check out the{' '}
                      <a
                        href='#'
                        class='text-purple-600 dark:text-purple-500 hover:underline'
                      >
                        Figma design system
                      </a>{' '}
                      based on the utility classes from Tailwind CSS and
                      components from Landwind.
                    </p>
                  </div>
                </div>
                <h3 id='accordion-flush-heading-3'>
                  <button
                    type='button'
                    class='flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
                    data-accordion-target='#accordion-flush-body-3'
                    aria-expanded='false'
                    aria-controls='accordion-flush-body-3'
                  >
                    <span>
                      What are the differences between Landwind and Tailwind UI?
                    </span>
                    <svg
                      data-accordion-icon=''
                      class='w-6 h-6 shrink-0'
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
                  </button>
                </h3>
                <div
                  id='accordion-flush-body-3'
                  class='hidden'
                  aria-labelledby='accordion-flush-heading-3'
                >
                  <div class='py-5 border-b border-gray-200 dark:border-gray-700'>
                    <p class='mb-2 text-gray-500 dark:text-gray-400'>
                      The main difference is that the core components from
                      Landwind are open source under the MIT license, whereas
                      Tailwind UI is a paid product. Another difference is that
                      Landwind relies on smaller and standalone components,
                      whereas Tailwind UI offers sections of pages.
                    </p>
                    <p class='mb-2 text-gray-500 dark:text-gray-400'>
                      However, we actually recommend using both Landwind,
                      Landwind Pro, and even Tailwind UI as there is no
                      technical reason stopping you from using the best of two
                      worlds.
                    </p>
                    <p class='mb-2 text-gray-500 dark:text-gray-400'>
                      Learn more about these technologies:
                    </p>
                    <ul class='pl-5 text-gray-500 list-disc dark:text-gray-400'>
                      <li>
                        <a
                          href='#'
                          class='text-purple-600 dark:text-purple-500 hover:underline'
                        >
                          Landwind Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='text-purple-600 dark:text-purple-500 hover:underline'
                        >
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 id='accordion-flush-heading-4'>
                  <button
                    type='button'
                    class='flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
                    data-accordion-target='#accordion-flush-body-4'
                    aria-expanded='false'
                    aria-controls='accordion-flush-body-4'
                  >
                    <span>What about browser support?</span>
                    <svg
                      data-accordion-icon=''
                      class='w-6 h-6 shrink-0'
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
                  </button>
                </h3>
                <div
                  id='accordion-flush-body-4'
                  class='hidden'
                  aria-labelledby='accordion-flush-heading-4'
                >
                  <div class='py-5 border-b border-gray-200 dark:border-gray-700'>
                    <p class='mb-2 text-gray-500 dark:text-gray-400'>
                      The main difference is that the core components from
                      Landwind are open source under the MIT license, whereas
                      Tailwind UI is a paid product. Another difference is that
                      Landwind relies on smaller and standalone components,
                      whereas Tailwind UI offers sections of pages.
                    </p>
                    <p class='mb-2 text-gray-500 dark:text-gray-400'>
                      However, we actually recommend using both Landwind,
                      Landwind Pro, and even Tailwind UI as there is no
                      technical reason stopping you from using the best of two
                      worlds.
                    </p>
                    <p class='mb-2 text-gray-500 dark:text-gray-400'>
                      Learn more about these technologies:
                    </p>
                    <ul class='pl-5 text-gray-500 list-disc dark:text-gray-400'>
                      <li>
                        <a
                          href='#'
                          class='text-purple-600 dark:text-purple-500 hover:underline'
                        >
                          Landwind Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          class='text-purple-600 dark:text-purple-500 hover:underline'
                        >
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <div className=''>
          <section className='bg-white dark:bg-gray-800 dark:text-gray-100 mx-4'>
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
                  <div className='px-4 pb-4'>
                    <div className=''>
                      <div className=''>
                        <label class='inline-flex relative items-center mb-4 cursor-pointer'>
                          <input
                            type='checkbox'
                            value=''
                            class='sr-only peer'
                          />
                          <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <span class='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                            Link Search
                          </span>
                        </label>
                      </div>
                      <div className=''>
                        {' '}
                        <label class='inline-flex relative items-center mb-4 cursor-pointer'>
                          <input
                            type='checkbox'
                            value=''
                            class='sr-only peer'
                            checked
                          />
                          <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <span class='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                            Meta Pixel
                          </span>
                        </label>
                      </div>
                      <div className=''>
                        <label class='inline-flex relative items-center mb-3 cursor-pointer'>
                          <input
                            type='checkbox'
                            value=''
                            class='sr-only peer'
                            disabled
                          />
                          <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          <span class='ml-3 text-sm font-medium text-gray-400 dark:text-gray-500'>
                            Contact Picture
                          </span>
                        </label>
                      </div>
                    </div>
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
