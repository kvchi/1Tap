import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function BookFreee() {
  return (
    <div className='py-4 px-4'>
  <Link className='flex justify-center relative py-4 px-2 rounded-2xl gap-3 items-center bg-primary drop-shadow-lg duration-300 hover:bg-blue-200 hover:text-primary group'>
    <div className='bg-white rounded-lg py-2 px-2 text-primary group-hover:bg-primary group-hover:text-white duration-300'>
      <BsFillTelephoneFill className='w-3 h-3 ' />
    </div>
    <h2 className='text-xs md:text-lg lg:text-xl md:font-medium text-white group-hover:text-primary'>
      Book Free Consultation
    </h2>
  </Link>
</div>

  )
}
