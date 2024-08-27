import React from "react";
import { buildings, logo } from "../assets/images";
import { sidebarData } from "../data/siderbarData";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

export default function Sidebar() {
  return (
    <aside
      className={`transition-all duration-100 bg-white border-r shadow-sm z-10 flex flex-col w-16 md:w-72`}
    >
      <div className="md:py-14 md:px-4 flex-1 flex flex-col">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className={`hidden md:block w-40`} />
        </div>

        <nav className="mt-20 ml-3 gap-3 flex flex-col">
          {sidebarData.map((el) => (
            <div key={el.id} className="relative group ">
              <NavLink
                to={el.url}
                className={({ isActive }) =>
                  `flex items-center justify-center md:justify-start py-2 px-3 md:py-1.5 md:px-5 rounded-2xl transition-all duration-200 gap-4 ${
                    isActive
                      ? "bg-primary text-white drop-shadow-xl"
                      : "hover:bg-[#D3E9FE]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={el.icon}
                      alt={el.title}
                      className={`w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 ${
                        isActive ? "filter invert brightness-0" : ""
                      }`}
                      style={{
                        filter: isActive
                          ? "invert(1) brightness(2) grayscale(1)"
                          : "",
                      }}
                    />
                    <span className="py-2 font-medium text-lg hidden md:block">
                      {el.title}
                    </span>
                  </>
                )}
              </NavLink>

              <div className="absolute left-full top-0 bg-white shadow-lg rounded-lg hidden group-hover:block md:group-hover:hidden">
                <span className="text-sm">{el.title}</span>
              </div>
            </div>
          ))}
        </nav>
        {/* Footer Section */}
        <div className="mt-auto">
          <div className="flex items-center ml-4">
            <img
              src={buildings}
              alt="Building"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
            />

            <div className="md:flex items-center hidden">
              <h2 className="font-bold text-xs md:text-xl">X.Y.Z LLC</h2>
              <IoIosArrowDown className="ml-2 text-xs sm:text-sm md:text-base" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
