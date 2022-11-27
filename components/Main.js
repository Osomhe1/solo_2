import Image from "next/image";

export default function Main() {
  return (
    <section className='text-gray-600 body-font bg-blue-100'>
      <div className='max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center'>
          <h1 className='mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900'>
            We are making Stunning Websites
          </h1>
          <p className='mb-4 xl:w-3/4 text-gray-600 text-lg'>
            nine4 is a free to use website template for websites made with
            Next.js and styled with Tailwind CSS
          </p>

          {/* <section> */}
          <form className='Avenir  xl:w-3/4'>
            <div className='relative w-full mb-3 '>
              <input
                type='email'
                className='border-0 px-3 py-5 placeholder-gray-400 
                   text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring  w-full'
                placeholder='Email'
                style={{ transition: 'all .15s ease' }}
              />
            </div>

            <div className='relative w-full mb-3'>
              <input
                type='password'
                className='border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring w-full'
                placeholder='Password'
                style={{ transition: 'all .15s ease' }}
              />
            </div>
            <div className='relative w-full mb-3 flex justify-between '>
              <div className=''>
                <input
                  type='password'
                  className='border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring w-full'
                  placeholder='Password'
                  style={{ transition: 'all .15s ease' }}
                />
              </div>
              <div className=''>
                <input
                  type='password'
                  className='border-0 px-3 py-5 placeholder-gray-400 text-gray-700 bg-white rounded
                   text-sm shadow focus:outline-none focus:ring w-full'
                  placeholder='Confirm Password'
                  style={{ transition: 'all .15s ease' }}
                />
              </div>
            </div>

            <div className='text-center mt-6'>
              <button
                className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase
                   px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                type='button'
                style={{ transition: 'all .15s ease' }}
              >
                Join for Free
              </button>
              <small>
                By clicking, you agree to the Terms of Service & Privacy Policy
                for solo.to.
              </small>
            </div>
          </form>
          {/* </section> */}
        </div>
        <div className='xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10'>
          <Image
            className='w-80 md:ml-1 ml-24'
            alt='iPhone-12'
            src='/images/solo_img.jpeg'
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  )
}
