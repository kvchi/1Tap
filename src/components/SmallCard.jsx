import React from 'react'
import { setting2 } from '../assets/images'


export default function SmallCard() {
  return (
    <section className='bg-white basis-1/3 rounded-lg px-4 md:py-4 md:px-8 hover:bg-blue-50 group'>
   <div className='flex justify-between mt-5 gap-36 items-center'>
        <img src={setting2} alt="" className='group-hover:bg-white p-2 rounded-lg bg-[#EAF1FF]/90 border-b border-r border-4px border-[#9DCFFD]/50'/>
        <p className='text-xs md:text-xl font-medium'>$999/yr</p>
    </div>
    <div className='pt-2'>
    <h2 className='md:text-2xl text-base font-medium md:font-bold'>
        Core Compliance <br />Package
        </h2> 
        <p className='md:text-xl font-normal pt-2 w-[300px]'>Ensure smooth operations with our essential compliance solutions</p>
        <div className='flex pt-2 md:pt-5 gap-2  mb-4 items-center'>
           
           <button className='py-1 px-3 md:py-2 md:px-6 bg-blue-50 rounded-lg  hover-override:bg-blue-300 group-hover:bg-white/80  transition-all duration-300'>
                <p className='text-xs md:text-xl whitespace-nowrap md:font-normal'>Know More</p>
            </button>
            <button className='py-1 px-3 md:py-2 md:px-9 bg-black/90 rounded-lg hover:bg-primary transition-all duration-300'>
                <p className='text-xs md:text-xl whitespace-nowrap md:font-normal text-white'>Buy Now</p>
            </button>
          
           
        </div>
    </div>
    
</section>
  )
}
