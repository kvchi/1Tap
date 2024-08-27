import React from 'react'
import { bot} from '../assets/images'

export default function Support() {
  return (
    <div className="relative">
    <button className="relative group flex items-center bg-primary rounded-full pr-3 hover:cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 p-1 gap-2 border-2 border-white">
      <div className="absolute inset-0.5 shadow-inner bg-gradient-to-bl from-[#6aafd0] to-white/70 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
      <div className="relative w-8 h-8 p-2 bg-white rounded-full transition-colors duration-300 group-hover:bg-[#6AADF0]/50 border border-blue-400 box-content shadow-md">
        <img src={bot} alt="Support Icon" className="w-full h-full shadow-inner" />
      </div>
      <p className="text-sm md:text-xl font-medium text-white group-hover:animate-shake transform transition group-hover:text-black pr-7">
        Support
      </p>
    </button>
  </div>
  );
}
