import React from 'react'
import { crown, group } from '../assets/images'

export default function Cards() {
  return (
    <section className="bg-white md:basis-2/3 rounded-lg px-4 md:py-4 md:px-8 hover:bg-blue-50 group relative">
      <div className="absolute top-8 -right-7">
        <img src={group} alt="" />
      </div>
      <div className="flex mt-6">
        <div className="bg-secondary p-2 rounded-md flex items-center justify-center gap-4 group-hover:bg-white/90 border-b border-r border-primary border-opacity-30">
          <img src={crown} alt="crown" className="w-4 h-4 md:w-7 md:h-7" />
          <p className="font-medium text-sm md:text-lg md:font-medium pr-1 text-blue-500">
            Most selling package
          </p>
        </div>
      </div>
      <div className="pt-3">
        <h2 className="md:text-2xl text-lg font-semibold md:font-bold">
          Business Elite package
        </h2>
        <p className="md:text-xl text-base font-normal pt-2">
          Elevate your business with premium services including dedicated consultancy and support.
        </p>
        <div className="flex pt-2 md:pt-10 gap-2 justify-between mb-6 items-center">
          <div className="flex gap-3">
            <button className="py-1 px-3 md:py-2 md:px-5 bg-blue-50 rounded-lg   transition-all duration-300 hover-override:bg-blue-300 group-hover:bg-white/80 ">
              <p className="text-xs md:text-xl whitespace-nowrap md:font-normal">
                Know More
              </p>
            </button>
            <button className="py-1 px-3 md:py-2 md:px-9 bg-black/90 rounded-lg hover:bg-primary transition-all duration-300">
              <p className="text-white text-xs md:text-xl whitespace-nowrap md:font-normal">
                Buy Now
              </p>
            </button>
          </div>
          <p className="text-xs md:text-xl font-medium">$4,999/yr</p>
        </div>
      </div>
    </section>
  )
}
