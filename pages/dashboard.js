import React from 'react'
import Profile from '../components/profile/Profile'
import Sidebar from '../components/sidebar/Sidebar'

export default function Dashboard() {
  return (
    <div>
      <section className='w-1/1 relative flex justify-between'>
        <div className='w-[20%] '>
          <Sidebar />
        </div>
        <div className='relative w-[70%] m-auto  md:pt-32 pb-32 pt-12'>
          <Profile className='absolute   md:pt-32 pb-32 pt-12 ' />
        </div>
      </section>
    </div>
  )
}
