import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function BookFreee() {
  return (
    <div className='p-2 pl-10'>
  <Link className='flex justify-center relative h-10 md:h-14 lg:h-16 p-2 rounded-lg gap-3 items-center bg-primary md:mr-0  md:ml-14 drop-shadow-lg hover:translate-x-2 transition-all duration-300'>
    <div className='bg-white rounded-md p-2 '>
      <BsFillTelephoneFill className='w-3 h-3 text-primary' />
    </div>
    <h2 className='text-xs md:text-lg lg:text-xl md:font-medium text-white'>
      Book Free Consultation
    </h2>
  </Link>
</div>
  )
}
