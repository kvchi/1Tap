import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'

export default function Search() {
  return (
    <div className="relative flex md:h-full items-center ">
    <input
      type="text"
      placeholder="Search for services"
      className="pl-12 py-2 md:py-4 px-4  w-[200px] sm:w-[300px] md:w-[600px]  border border-white drop-shadow-lg bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 "
    />
    <RiSearch2Line className="absolute left-3 w-5 h-5 text-primary ml-1" />
  </div>
  )
}
