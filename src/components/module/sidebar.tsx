"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const router = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <section
      className={`bg-[#FEFEFE] text-[#3E2DE1] duration-300  sticky top-0 z-20 ${
        open ? "w-72" : "w-20"
      }`}
    >
      <div className={`fixed ${open ? "lg:w-72 max-w-52" : "w-20"}`}>
        <div
          className={`bg-[#F8F9FE] p-1 w-10 h-10 rounded-full absolute cursor-pointer overflow-hidden top-10 ${
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
          className={`flex flex-col justify-between ${
            open ? "lg:gap-[16px] md:gap-[6px]" : "lg:gap-[12px] md:gap-[6px]"
          }`}
        >
          <li className="flex justify-start items-center gap-2 m-2 ms-4 py-2">
            <Image
              alt="logo"
              src="/images/Rectangle.svg"
              width={20}
              height={20}
              className="w-[30px] h-[30.23px]"
            />
            <p className={`font-semibold text-xl ${!open && "hidden"}`}>
              اُپتی گارمِنت
            </p>
          </li>

          <li
            className={`${router == "/home" && "border-e-2 border-[#3E2DE1]"} `}
          >
            <Link
              href="/home"
              className={`flex rounded-md cursor-pointer p-1 ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              ${
                router == "/home"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              }`}
            >
              <LuPlusCircle className={`w-6 h-6`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                پروژه
              </span>
            </Link>
          </li>

          <li
            className={`${
              router == "/nemouneduzi" && "border-e-2 border-[#3E2DE1]"
            } `}
          >
            <Link
              href="/nemouneduzi"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/nemouneduzi"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <MdOutlineIron className={`w-6 h-6`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                نمونه دوزی
              </span>
            </Link>
          </li>
          <li
            className={`${
              router == "/barnamerizitolid" && "border-e-2 border-[#3E2DE1]"
            } `}
          >
            <Link
              href="/barnamerizitolid"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/barnamerizitolid"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <LuAlarmClock className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                برنامه ریزی تولید
              </span>
            </Link>
          </li>

          <li
            className={`${
              router == "/chideman" && "border-e-2 border-[#3E2DE1]"
            } `}
          >
            <Link
              href="/chideman"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/chideman"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <TbLayoutGridRemove className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                چیدمان
              </span>
            </Link>
          </li>

          <li
            className={`${router == "/cut" && "border-e-2 border-[#3E2DE1]"} `}
          >
            <Link
              href="/cut"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/cut"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <RiScissorsCutLine className="w-6 h-6 rotate-180" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                برش
              </span>
            </Link>
          </li>

          <li
            className={`${
              router == "/anbartolid" && "border-e-2 border-[#3E2DE1]"
            } `}
          >
            <Link
              href="/anbartolid"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/anbartolid"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <PiStorefrontLight className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                انبار تولید
              </span>
            </Link>
          </li>

          <li
            className={`${router == "/chap" && "border-e-2 border-[#3E2DE1]"} `}
          >
            <Link
              href="/chap"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/chap"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <LuPrinter className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                چاپ
              </span>
            </Link>
          </li>

          <li
            className={`${
              router == "/golduzi" && "border-e-2 border-[#3E2DE1]"
            } `}
          >
            <Link
              href="/golduzi"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/golduzi"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <TbNeedleThread className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                گلدوزی
              </span>
            </Link>
          </li>

          <li
            className={`${
              router == "/dukht" && "border-e-2 border-[#3E2DE1]"
            } `}
          >
            <Link
              href="/dukht"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/dukht"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <GiSewingMachine className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                دوخت
              </span>
            </Link>
          </li>

          <li
            className={`${
              router == "/kontrolkeyfiat" && "border-e-2 border-[#3E2DE1]"
            } `}
          >
            <Link
              href="/kontrolkeyfiat"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/kontrolkeyfiat"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <SiTicktick className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                کنترل کیفیت
              </span>
            </Link>
          </li>

          <li
            className={`${
              router == "/shostosho" && "border-e-2 border-[#3E2DE1]"
            } `}
          >
            <Link
              href="/shostosho"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/shostosho"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <MdOutlineLocalLaundryService className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                شست و شو
              </span>
            </Link>
          </li>

          <li
            className={`${
              router == "/bastebandi" && "border-e-2 border-[#3E2DE1]"
            } `}
          >
            <Link
              href="/bastebandi"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/bastebandi"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <GiBoxUnpacking className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                بسته بندی
              </span>
            </Link>
          </li>

          <li
            className={`${
              router == "/anbarmahsul" && "border-e-2 border-[#3E2DE1]"
            } `}
          >
            <Link
              href="/anbarmahsul"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/anbarmahsul"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <PiStorefrontLight className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                انبار محصول
              </span>
            </Link>
          </li>

          <li
            className={`${
              router == "/manabensani" && "border-e-2 border-[#3E2DE1]"
            } `}
          >
            <Link
              href="/manabensani"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/manabensani"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <PiUsers className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                منابع انسانی
              </span>
            </Link>
          </li>

          <li
            className={`${
              router == "/sabtamalkard" && "border-e-2 border-[#3E2DE1]"
            } `}
          >
            <Link
              href="/sabtamalkard"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/sabtamalkard"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <LiaUserEditSolid className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                ثبت عملکرد
              </span>
            </Link>
          </li>

          <li
            className={`${
              router == "/farayandSazi" && "border-e-2 border-[#3E2DE1]"
            } `}
          >
            <Link
              href="/farayandSazi"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/farayandSazi"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <VscServerProcess className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                فرآیند سازی
              </span>
            </Link>
          </li>

          <li
            className={`${
              router == "/manitoring" && "border-e-2 border-[#3E2DE1]"
            } `}
          >
            <Link
              href="/manitoring"
              className={`flex rounded-md cursor-pointer ms-3 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                !open && " bg-[#F5F5F5] w-9 h-9 border-2 border-[#EAEAEA]"
              } 
              p-1
              ${
                router == "/manitoring"
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              } `}
            >
              <LuMonitor className="w-6 h-6" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                مانیتورینگ
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
