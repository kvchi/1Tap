import React from 'react'
import {  setting1 } from '../assets/images'


export default function SmallCard() {
  return (
    <section className='bg-white basis-1/3 rounded-lg px-4 md:py-4 md:px-8 hover:bg-blue-50 group'>
   <div className='flex mt-3 gap-36 items-center'>
        <img src={setting1} alt="" className='group-hover:bg-white p-2 rounded-lg bg-[#EAF1FF]/90 border-b border-r border-4px border-[#9DCFFD]/50'/>
    </div>
    <div className='pt-2'>
    <h2 className='md:text-2xl text-base font-medium md:font-bold'>
        Create Personalized <br />Package
        </h2> 
        <p className='md:text-xl font-normal pt-2 w-[300px]'>Select services that you want & create personalized package based on your needs</p>
        <div className='flex pt-2 md:pt-5 gap-2  mb-4 items-center'>
        <button className='py-1 px-3 md:py-2 md:px-6 bg-blue-50 rounded-lg group-hover:bg-white/80 transition-all duration-300'>
                <p className='text-xs md:text-xl whitespace-nowrap md:font-normal'>Know More</p>
            </button>
        </div>
    </div>
    
</section>
  )
}
