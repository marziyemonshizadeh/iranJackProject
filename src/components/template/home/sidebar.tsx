"use client";

import Image from "next/image";
import { useState } from "react";
import { GiBoxUnpacking, GiSewingMachine } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { LiaUserEditSolid } from "react-icons/lia";
import {
  LuAlarmClock,
  LuMonitor,
  LuPlusCircle,
  LuPrinter,
} from "react-icons/lu";
import { MdOutlineIron, MdOutlineLocalLaundryService } from "react-icons/md";
import { PiStorefrontLight, PiUsers } from "react-icons/pi";
import { RiScissorsCutLine } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";
import { TbLayoutGridRemove, TbNeedleThread } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";

const Sidebar = () => {
  // const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <section
      className={`bg-[#FEFEFE] text-[#3E2DE1] h-screen relative duration-300 ${
        open ? "w-72" : "w-20"
      }`}
    >
      <div
        className={`bg-[#F8F9FE] p-1 w-10 h-10 rounded-full absolute cursor-pointer overflow-hidden top-12 ${
          open ? "right-[277px]" : "right-[72px] overflow-y-hidden"
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="bg-[#3E2DE1] text-slate-50 w-7 h-7 p-1 rounded-full">
          <IoIosArrowForward
            className={`w-5 h-5 duration-300 ${!open && "rotate-180 "}`}
          />
        </div>
      </div>

      <ul
        className={`flex flex-col ${
          !open ? "justify-center items-center gap-1" : "gap-4"
        }`}
      >
        <li className="flex justify-center items-center gap-2 mb-2 py-2">
          <Image
            alt="logo"
            src="/images/Rectangle2.png"
            width={20}
            height={20}
            className="w-[40px] h-[40.23px]"
          />
          <p className={`font-semibold text-xl ${!open && "hidden"}`}>
            اپتی گارمنت
          </p>
        </li>

        {/* if go project page */}
        <li className="border-e-2 border-[#3E2DE1] px-3">
          <div
            className={`flex rounded-md cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center gap-x-4 mt-2 ${
              !open && " bg-[#F5F5F5]"
            } border-2 border-[#EAEAEA] bg-[#EEECFF] text-[#3E2DE1] rounded-md p-1`}
          >
            {/* <Image
              alt="nn"
              src="/images/addProjectIcon.png"
              width={10}
              height={10}
              className="w-6 h-6"
            /> */}
            <LuPlusCircle className="w-6 h-6" />

            <span className={`${!open && "hidden"} origin-left duration-200`}>
              پروژه
            </span>
          </div>
        </li>

        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <MdOutlineIron className="w-[24px] h-[24px]" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            نمونه دوزی
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <LuAlarmClock className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            برنامه ریزی تولید
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <TbLayoutGridRemove className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            چیدمان
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <RiScissorsCutLine className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            برش
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <PiStorefrontLight className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            انبار تولید
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <LuPrinter className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            چاپ
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <TbNeedleThread className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            گلدوزی
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <GiSewingMachine className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            دوخت
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <SiTicktick className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            کنترل کیفیت
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <MdOutlineLocalLaundryService className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            شست و شو
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <GiBoxUnpacking className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            بسته بندی
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <PiStorefrontLight className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            انبار محصول
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <PiUsers className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            منابع انسانی
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <LiaUserEditSolid className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            ثبت عملکرد
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <VscServerProcess className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            فرآیند سازی
          </span>
        </li>
        <li
          className={`flex rounded-md  cursor-pointer text-[#3E2DE1] font-bold hover:bg-light-white text-sm items-center  gap-x-4 mt-2 ${
            !open ? "border-2 border-[#EAEAEA] bg-[#F5F5F5] w-9 h-9" : "px-3"
          }`}
        >
          <LuMonitor className="w-6 h-6" />

          <span className={`${!open && "hidden"} origin-left duration-200`}>
            مانیتورینگ
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
