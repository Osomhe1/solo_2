import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

export default function SignUp() {
  return (
    <Layout>
      <div>
        <section>
          <form className='Avenir  lg:w-2/5 m-3 md:w-3/5 md:m-auto lg:m-auto  py-28 '>
            <h2 className='text-center font-bold text-3xl md:text-5xl py-5 '>
              Create Account
            </h2>
            <div className='relative  mb-3 '>
              <input
                type='name'
                className='border-0 px-3 py-5 placeholder-gray-400 
                   text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring  w-full'
                placeholder='UserName'
                style={{ transition: 'all .15s ease' }}
              />
            </div>

            <div className='relative w-full mb-3'>
              <input
                type='email'
                className='border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring w-full'
                placeholder='Email'
                style={{ transition: 'all .15s ease' }}
              />
            </div>
            <div className='relative w-full mb-3 md:flex justify-between md:space-x-4 '>
              <div className='w-full'>
                <input
                  type='password'
                  className='border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring w-full'
                  placeholder='Password'
                  style={{ transition: 'all .15s ease' }}
                />
              </div>
              <div className='w-full my-3 md:m-0'>
                <input
                  type='password'
                  className='border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring w-full'
                  placeholder='Confirm Password'
                  style={{ transition: 'all .15s ease' }}
                />
              </div>
            </div>

            <small>
              By clicking, you agree to the Terms of Service & Privacy Policy
              for solo.to.
            </small>
            <div className='text-center mt-6'>
              <button
                className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                type='button'
                style={{ transition: 'all .15s ease' }}
              >
                {/* Join for Free */}
                <Link href='/dashboard'>Sign Up</Link>
              </button>
            </div>
            <div className='text-center mt-6'>
              <button
                className=' text-gray-300 hover:text-gray-500 active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                type='button'
                style={{ transition: 'all .15s ease' }}
              >
                <Link href='/auth/Login'>or Sign In</Link>
              </button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}
