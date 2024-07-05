import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  return (
    // <div className="sticky top-0 z-20">
    <nav className="flex w-full overflow-hidden lg:justify-end md:justify-between justify-center items-center lg:gap-[121px] md:gap-2 gap-1 p-3 bg-[#FEFEFE] rounded-bl-3xl shadow-sm h-[64px]">
      <div className="pt-2 relative text-gray-600 md:block hidden">
        <input
          className="border-2 border-gray-300 w-[350px] bg-white h-[40px] px-4 py-3 rounded-2xl text-sm focus:border-[#3E2DE1] outline-none"
          type="search"
          name="search"
          placeholder="جستجو"
        />
        <button type="submit" className="absolute left-2 top-0 mt-4 mr-4">
          <Image
            alt="logo"
            src="/images/navBarIcons/search-loupe.svg"
            width={20}
            height={20}
            className="w-6 h-6"
          />
        </button>
      </div>
      <div className="flex items-center md:gap-4 sm:gap-3 pe-5">
        <div className="flex items-center gap-2 w-[146px] h-[28px] text-xs font-normal rounded-full shadow-slate-100 bg-[#F5F5F5] text-[#444444] border border-[#EAEAEA]  shadow-inner px-1 py-2">
          <span>8:54:12</span>
          <span>1402/02/07</span>
          <Image
            alt="logo"
            src="/images/navBarIcons/Calendar.svg"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </div>
        <button
          type="button"
          className="relative inline-flex items-center rounded-full md:p-2 sm:p-[5px] shadow-md  border border-[#F5F5F5] text-sm font-medium text-center text-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Image
            alt="bell-notifications"
            src="/images/navBarIcons/bell-notifications.svg"
            width={20}
            height={20}
            className="w-6 h-6"
          />

          <div className="absolute inline-flex items-center justify-center w-5 h-5 p-1 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 end-6 dark:border-gray-900">
            5
          </div>
        </button>
        <div className="flex items-center gap-3 rounded-full shadow-md border border-[#F5F5F5] p-2">
          <FaUserCircle className="text-[#444444] w-[20px] h-[20px]" />
          <p className="text-base font-medium">پروفایل</p>
          <IoIosArrowDown className="w-4 h-4" />
        </div>
        <div className="rounded-full shadow-md border border-[#F5F5F5] p-2">
          <Image
            alt="logo"
            src="/images/navBarIcons/Power.svg"
            width={20}
            height={20}
            className="w-6 h-6"
          />
        </div>
      </div>
    </nav>
    // </div>
  );
};
export default NavBar;
