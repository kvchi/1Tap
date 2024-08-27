import React from 'react'
import { bot} from '../assets/images'

export default function Support() {
  return (
    <div className="group flex items-center bg-primary rounded-full pr-3 hover:cursor-pointer hover:drop-shadow-xl hover:bg-[#6AADF0] hover:border hover:border-white transition-all duration-300 p-1 gap-2 group-hover:shadow-inner-glow">
    <div className="w-8 h-8 p-2 bg-white rounded-full transition-colors duration-300 group-hover:bg-[#6AADF0]/50 border  box-content  ">
      <img src={bot} alt="Support Icon" className="w-full h-full" />
    </div>
    <p className="text-sm md:text-xl font-medium text-white group-hover:-translate-y-0.5 transform transition group-hover:text-black pr-3">Support</p>
  </div>
  );
}
