import React from "react";
import { buildings, logo } from "../assets/images";
import { sidebarData } from "../data/siderbarData";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

export default function Sidebar() {
  //

  return (
    <aside
      className={`fixed h-screen transition-all duration-100  bg-white border-r shadow-sm z-10 flex flex-col`}
    >
      <div className=" md:py-10 md:px-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <img
            src={logo}
            alt="Logo"
            className={` transition-all duration-300 hidden md:block`}
          />
        </div>

        <nav className="mt-4 flex flex-col">
          {sidebarData.map((el) => (
            <div key={el.id} className="relative group ">
              <Link
                to={el.url}
                className="flex items-center justify-center md:justify-start py-2 px-3  md:py-3 md:px-4 rounded-xl hover:bg-primary group-hover:text-white"
              >
                <img
                  src={el.icon}
                  alt={el.title}
                  className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:filter group-hover:invert"
                />
                <span className="ml-3 font-medium text-xl hidden md:block">
                  {el.title}
                </span>
              </Link>

              <div className="absolute left-full top-0 p-2 bg-white shadow-lg rounded-lg hidden group-hover:block md:group-hover:hidden">
                <span className="text-sm">{el.title}</span>
              </div>
            </div>
          ))}
        </nav>
        {/*Footer Section*/}
        <div className="mt-auto ">
          <div className="flex items-center">
            <img src={buildings} alt="Building" className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'/>

            <div className=" md:flex items-center hidden">
              <h2 className="font-semibold text-xs md:text-sm">X.Y.Z LLC</h2>
              <IoIosArrowDown className='ml-2 text-xs sm:text-sm md:text-base' />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
