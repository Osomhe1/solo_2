import  {useState} from 'react'

import { Bar } from 'react-chartjs-2'
import {BarChart} from '../components/BarChart'


export default function Analytics() {

    

    

  return (
    <div>
      <section>
        <h1 className='text-3xl text-black pb-6'>Dashboard</h1>

        <div className='flex flex-wrap mt-6'>
          <div class='flex flex-col items-center w-full max-w-screen-md p-6 pb-6 mt-10 bg-white rounded-lg shadow-xl sm:p-8'>
            <h2 class='text-xl font-bold'>Monthly Revenue</h2>
            <span class='text-sm font-semibold text-gray-500'>2020</span>
            <div class='flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3'>
              <div class='relative flex flex-col items-center flex-grow pb-5 group'>
                <span class='absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block'>
                  $37,500
                </span>
                <div class='flex items-end w-full'>
                  <div class='relative flex justify-center flex-grow h-8 bg-indigo-200'></div>
                  <div class='relative flex justify-center flex-grow h-6 bg-indigo-300'></div>
                  <div class='relative flex justify-center flex-grow h-16 bg-indigo-400'></div>
                </div>
                <span class='absolute bottom-0 text-xs font-bold'>Jan</span>
              </div>
              <div class='relative flex flex-col items-center flex-grow pb-5 group'>
                <span class='absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block'>
                  $45,000
                </span>
                <div class='flex items-end w-full'>
                  <div class='relative flex justify-center flex-grow h-10 bg-indigo-200'></div>
                  <div class='relative flex justify-center flex-grow h-6 bg-indigo-300'></div>
                  <div class='relative flex justify-center flex-grow h-20 bg-indigo-400'></div>
                </div>
                <span class='absolute bottom-0 text-xs font-bold'>Feb</span>
              </div>
              <div class='relative flex flex-col items-center flex-grow pb-5 group'>
                <span class='absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block'>
                  $47,500
                </span>
                <div class='flex items-end w-full'>
                  <div class='relative flex justify-center flex-grow h-10 bg-indigo-200'></div>
                  <div class='relative flex justify-center flex-grow h-8 bg-indigo-300'></div>
                  <div class='relative flex justify-center flex-grow h-20 bg-indigo-400'></div>
                </div>
                <span class='absolute bottom-0 text-xs font-bold'>Mar</span>
              </div>
              <div class='relative flex flex-col items-center flex-grow pb-5 group'>
                <span class='absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block'>
                  $50,000
                </span>
                <div class='flex items-end w-full'>
                  <div class='relative flex justify-center flex-grow h-10 bg-indigo-200'></div>
                  <div class='relative flex justify-center flex-grow h-6 bg-indigo-300'></div>
                  <div class='relative flex justify-center flex-grow h-24 bg-indigo-400'></div>
                </div>
                <span class='absolute bottom-0 text-xs font-bold'>Apr</span>
              </div>
              <div class='relative flex flex-col items-center flex-grow pb-5 group'>
                <span class='absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block'>
                  $47,500
                </span>
                <div class='flex items-end w-full'>
                  <div class='relative flex justify-center flex-grow h-10 bg-indigo-200'></div>
                  <div class='relative flex justify-center flex-grow h-8 bg-indigo-300'></div>
                  <div class='relative flex justify-center flex-grow h-20 bg-indigo-400'></div>
                </div>
                <span class='absolute bottom-0 text-xs font-bold'>May</span>
              </div>
              <div class='relative flex flex-col items-center flex-grow pb-5 group'>
                <span class='absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block'>
                  $55,000
                </span>
                <div class='flex items-end w-full'>
                  <div class='relative flex justify-center flex-grow h-12 bg-indigo-200'></div>
                  <div class='relative flex justify-center flex-grow h-8 bg-indigo-300'></div>
                  <div class='relative flex justify-center flex-grow h-24 bg-indigo-400'></div>
                </div>
                <span class='absolute bottom-0 text-xs font-bold'>Jun</span>
              </div>
              <div class='relative flex flex-col items-center flex-grow pb-5 group'>
                <span class='absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block'>
                  $60,000
                </span>
                <div class='flex items-end w-full'>
                  <div class='relative flex justify-center flex-grow h-12 bg-indigo-200'></div>
                  <div class='relative flex justify-center flex-grow h-16 bg-indigo-300'></div>
                  <div class='relative flex justify-center flex-grow h-20 bg-indigo-400'></div>
                </div>
                <span class='absolute bottom-0 text-xs font-bold'>Jul</span>
              </div>
              <div class='relative flex flex-col items-center flex-grow pb-5 group'>
                <span class='absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block'>
                  $57,500
                </span>
                <div class='flex items-end w-full'>
                  <div class='relative flex justify-center flex-grow h-12 bg-indigo-200'></div>
                  <div class='relative flex justify-center flex-grow h-10 bg-indigo-300'></div>
                  <div class='relative flex justify-center flex-grow h-24 bg-indigo-400'></div>
                </div>
                <span class='absolute bottom-0 text-xs font-bold'>Aug</span>
              </div>
              <div class='relative flex flex-col items-center flex-grow pb-5 group'>
                <span class='absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block'>
                  $67,500
                </span>
                <div class='flex items-end w-full'>
                  <div class='relative flex justify-center flex-grow h-12 bg-indigo-200'></div>
                  <div class='relative flex justify-center flex-grow h-10 bg-indigo-300'></div>
                  <div class='relative flex justify-center flex-grow h-32 bg-indigo-400'></div>
                </div>
                <span class='absolute bottom-0 text-xs font-bold'>Sep</span>
              </div>
              <div class='relative flex flex-col items-center flex-grow pb-5 group'>
                <span class='absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block'>
                  $65,000
                </span>
                <div class='flex items-end w-full'>
                  <div class='relative flex justify-center flex-grow h-12 bg-indigo-200'></div>
                  <div class='relative flex justify-center flex-grow h-12 bg-indigo-300'></div>
                  <div class='relative flex justify-center flex-grow bg-indigo-400 h-28'></div>
                </div>
                <span class='absolute bottom-0 text-xs font-bold'>Oct</span>
              </div>
              <div class='relative flex flex-col items-center flex-grow pb-5 group'>
                <span class='absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block'>
                  $70,000
                </span>
                <div class='flex items-end w-full'>
                  <div class='relative flex justify-center flex-grow h-8 bg-indigo-200'></div>
                  <div class='relative flex justify-center flex-grow h-8 bg-indigo-300'></div>
                  <div class='relative flex justify-center flex-grow h-40 bg-indigo-400'></div>
                </div>
                <span class='absolute bottom-0 text-xs font-bold'>Nov</span>
              </div>
              <div class='relative flex flex-col items-center flex-grow pb-5 group'>
                <span class='absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block'>
                  $75,000
                </span>
                <div class='flex items-end w-full'>
                  <div class='relative flex justify-center flex-grow h-12 bg-indigo-200'></div>
                  <div class='relative flex justify-center flex-grow h-8 bg-indigo-300'></div>
                  <div class='relative flex justify-center flex-grow h-40 bg-indigo-400'></div>
                </div>
                <span class='absolute bottom-0 text-xs font-bold'>Dec</span>
              </div>
            </div>
            <div class='flex w-full mt-3'>
              <div class='flex items-center ml-auto'>
                <span class='block w-4 h-4 bg-indigo-400'></span>
                <span class='ml-1 text-xs font-medium'>Existing</span>
              </div>
              <div class='flex items-center ml-4'>
                <span class='block w-4  h-4 bg-indigo-300'></span>
                <span class='ml-1 text-xs font-medium'>Upgrades</span>
              </div>
              <div class='flex items-center ml-4'>
                <span class='block w-4  h-4 bg-indigo-200'></span>
                <span class='ml-1 text-xs font-medium'>New</span>
              </div>
            </div>
          </div>
          {/* <div className='w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0'>
            <p className='text-xl pb-3 flex items-center'>
              <i className='fas fa-check mr-3'></i> Resolved Reports
            </p>
            <div className='p-6 bg-white'>
              <canvas id='chartTwo' width='400' height='200'></canvas>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  )
}

