import React from 'react'
import { LuBellRing } from 'react-icons/lu'
import { user } from '../assets/images'
import { HiOutlineArrowRightEndOnRectangle } from 'react-icons/hi2'

export default function Login() {
  return (
    <section className='flex justify-center items-center h-full gap-4 md:gap-10 mr-8 md:mr-0'>
  {/* Notification Icon */}
  <aside>
    <div className='ml-2 md:ml-10 hover:translate-x-2 transition-all duration-300 bg-white p-3 md:p-4 rounded-lg drop-shadow-lg'>
      <LuBellRing className='w-3 h-3 md:w-6 md:h-6' />
    </div>
  </aside>

  {/* User Profile and Logout */}
  <div className='bg-blue-200 p-2 md:p-4 flex justify-center items-center rounded-xl drop-shadow-lg gap-2 md:gap-3 hover:translate-x-2 transition-all duration-300 cursor-pointer'>
    <img src={user} alt="User" className='w-6 h-6 md:w-7 md:h-7' />
    <h1 className='font-medium text-base md:text-2xl text-primary hidden md:block'>zy</h1>
    <HiOutlineArrowRightEndOnRectangle className='w-10 md:w-7 md:h-7' />
  </div>
</section>
  )
}
