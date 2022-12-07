import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

export default function Login() {
  return (
    <Layout>
      <div>
        <section>
          <form className='Avenir  lg:w-2/5 m-3 md:w-3/5 md:m-auto lg:m-auto py-28 '>
            <h2 className='text-center font-bold text-3xl md:text-5xl py-5 '>
              Login
            </h2>
            <p className='text-center  text  py-5 '>
              Enter your email and password below to access your solo.to
              account.
            </p>
            <div className='relative  mb-3 '>
              <input
                type='name'
                className='border-0 px-3 py-5 placeholder-gray-400 focus:ring-[#8BC940]
                   text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring  w-full'
                placeholder='UserName'
                style={{ transition: 'all .15s ease' }}
              />
            </div>

            <div className='relative w-full mb-3'>
              <input
                type='email'
                className='border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded focus:ring-[#8BC940]
                   text-sm shadow focus:outline-none focus:ring w-full'
                placeholder='Email'
                style={{ transition: 'all .15s ease' }}
              />
            </div>
            <div className='relative w-full mb-3 md:flex justify-between md:space-x-4 '>
              <div>
                <label className='inline-flex items-center cursor-pointer'>
                  <input
                    id='customCheckLogin'
                    type='checkbox'
                    className='form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5'
                    style={{ transition: 'all .15s ease' }}
                  />
                  <span className='ml-2 text-sm font-semibold text-gray-700'>
                    Remember me
                  </span>
                </label>
              </div>

              <div>
                <label className='inline-flex items-center cursor-pointer'>
                  <Link href='/forget_password'>
                    <span
                      style={{ transition: 'all .15s ease' }}
                      className='ml-2 text-sm font-semibold hover:text-gray-200 text-gray-700'
                    >
                      Forget Password
                    </span>
                  </Link>
                </label>
              </div>
            </div>

            <div className='text-center mt-6'>
              <button
                className='bg-[#8BC940] hover:bg-[#5AB025] text-white active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                type='button'
                style={{ transition: 'all .15s ease' }}
              >
                <Link href='/dashboard'>Sign in</Link>
              </button>
            </div>
            <div className='text-center mt-6'>
              <button
                className=' text-gray-300 hover:bg-[#5AB025] hover:text-gray-500 active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                type='button'
                style={{ transition: 'all .15s ease' }}
              >
                <Link href='/auth/SignUp'>or Create an Account</Link>
              </button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}
