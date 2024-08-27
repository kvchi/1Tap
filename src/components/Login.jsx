import React from 'react'
import { frame1, login, notification, user } from '../assets/images'


export default function Login() {
  return (
    <section className='flex justify-center items-center gap-3 pl-2'>
      <img src={notification} alt="" />
      <div className='flex bg-blue-200 py-2.5 px-3 rounded-2xl  gap-2 items-center justify-center'>
    <img src={user} alt="" className='w-10'/>
    <img src={frame1} alt="" className='w-10'/>
    <img src={login} alt="" className='w-8' />
      </div>
  
</section>
  )
}
