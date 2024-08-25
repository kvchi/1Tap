import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'

export default function Search() {
  return (
    <div className="relative flex md:h-full items-center ">
    <input
      type="text"
      placeholder="Search for services"
      className="pl-10 py-2 md:py-4 px-4 md:px-8 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] border border-white drop-shadow-lg bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <RiSearch2Line className="absolute left-3 text-gray-400 w-5 h-5" />
  </div>
  )
}
