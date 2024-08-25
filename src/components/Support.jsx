import React from 'react'
import { frame } from '../assets/images'

export default function Support() {
  return (
    <div className='flex items-center bg-primary rounded-full pr-3 w-fit hover:cursor-pointer hover:translate-x-1 transition-all duration-300'>
  <img src={frame} alt="Support Icon" className='w-10 md:w-14' />
  <p className='text-sm md:text-xl font-medium text-white'>Support</p>
</div>   
  )
}
