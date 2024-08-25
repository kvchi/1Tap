import React from 'react'

import { high } from '../assets/images'

export default function GetSTarted() {
  return (
    <div className='flex flex-col md:flex-row items-center md:justify-between h-full w-full py-2 px-3 md:py-4 md:px-8 bg-red  rounded-lg gap-6 '>
        <div className='flex items-center gap-10'>
        <img src={high} alt="" className='ml-4 w-4 md:w-8 hidden md:block'/>
        <p className='md:text-xl md:font-medium text-sm text-center'>Please provide your company details to seamlessly access our services.</p>
        </div>
            <button className='bg-white py-3 px-3 rounded-lg text-xs md:text-lg font-medium hover:translate-x-2 transition-all duration-300'>
                Let&apos;s get started
            </button>
    </div>
  )
}

