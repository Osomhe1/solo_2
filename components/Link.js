import Link from 'next/link'
import React from 'react'

const SoloLink = ({ text, link  }) => {
  return (
    <Link href={link}>
      <a className='text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline'>
        {text}
      </a>
    </Link>
  )
}

export default SoloLink
