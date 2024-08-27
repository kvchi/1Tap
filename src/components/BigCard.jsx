import React from 'react'
import { lamp } from '../assets/images'

export default function Cards() {
  return (
    <section className='bg-white md:basis-2/3 rounded-lg px-4 md:py-4 md:px-8 hover:bg-blue-50 group'>
    <div className='flex mt-6'>
    <div className='bg-[#B9CEFF]/25 p-2 rounded-md flex items-center justify-center gap-4 group-hover:bg-white/90 border-b border-r border-primary border-opacity-30'>
        <img src={lamp} alt="crown" className='w-4 h-4 md:w-7 md:h-7' />
        <p className='font-medium  text-sm md:text-lg md:font-medium pr-1 text-blue-500'>Best for new entrepreneurs</p>
    </div>
    </div>
    <div className='pt-3'>
       <h2 className='md:text-2xl text-lg font-medium md:font-bold'>
        Founders Starter Package
        </h2> 
        <p className='md:text-xl text-base font-normal pt-2'>
            Streamline your business with comprehensive compliance and financial management services
        </p>
        <div className='flex pt-2 md:pt-10 gap-2 justify-between mb-6 items-center'>
           <div className='flex gap-3 '>
           <button className='py-1 px-3 md:py-2 md:px-6 bg-blue-50 rounded-lg hover:bg-primary group-hover:bg-white/80 transition-all duration-300'>
                <p className='text-xs md:text-xl whitespace-nowrap md:font-normal'>Know More</p>
            </button>
            <button className='py-1 px-3 md:py-2 md:px-9 bg-black/90 rounded-lg hover:bg-primary transition-all duration-300'>
                <p className='text-white text-xs md:text-xl whitespace-nowrap md:font-normal'>Buy Now</p>
            </button>
           </div>
            <p className='text-xs md:text-xl font-medium'>$2,885/yr</p>
        </div>
    </div>
    
</section>
  )
}
