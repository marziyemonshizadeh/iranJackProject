import { FaBell, FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import {
  IoCalendarOutline,
  IoPowerOutline,
  IoSearchSharp,
} from "react-icons/io5";

export const NavBar = () => {
  return (
    <nav className="bg-[#FEFEFE] flex lg:justify-end justify-between items-center lg:gap-8 md:gap-2 gap-1 p-3 rounded-bl-3xl shadow-sm h-[68px]">
      <div className="pt-2 relative text-gray-600 md:block hidden">
        <input
          className="border-2 border-gray-300 max-w-[318px] bg-white h-10 px-5 rounded-2xl text-sm focus:border-[#3E2DE1] outline-none"
          type="search"
          name="search"
          placeholder="جستجو"
        />
        <button type="submit" className="absolute left-2 top-0 mt-5 mr-4">
          <IoSearchSharp />
        </button>
      </div>

      <div className="flex items-center gap-3 rounded-full shadow-slate-100 bg-[#F5F5F5] text-[#444444] border border-[#EAEAEA]  shadow-inner px-2">
        <p>8:54:12</p>
        <p>1402/02/07</p>
        <IoCalendarOutline />
      </div>
      <div>
        <button
          type="button"
          className="relative inline-flex items-center rounded-full shadow-sm p-2 shadow-slate-500 text-sm font-medium text-center text-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FaBell />

          <div className="absolute inline-flex items-center justify-center w-5 h-5 p-1 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 end-4 dark:border-gray-900">
            5
          </div>
        </button>
      </div>
      <div className="flex items-center gap-3 rounded-full shadow-sm shadow-slate-500 p-1">
        <FaUserCircle className="text-[#444444]" />
        <p className="text-sm">پروفایل</p>
        <IoIosArrowDown />
      </div>
      <div className="rounded-full shadow-sm shadow-slate-500 p-2">
        <IoPowerOutline />
      </div>
    </nav>
  );
};
