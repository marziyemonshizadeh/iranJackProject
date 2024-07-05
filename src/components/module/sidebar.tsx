"use client";

import { SideBarItems } from "@/data/sidebarItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Sidebar = () => {
  const router = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <section
      className={`bg-[#FEFEFE] text-[#3E2DE1] duration-200 transition-all sticky top-0 z-20 overflow-hidden ${
        open ? "w-72" : "w-20"
      }`}
    >
      <div className={`fixed ${open ? "w-72" : "w-20"}`}>
        <div
          className={`bg-[#F8F9FE] p-1 w-10 h-10 rounded-full absolute cursor-pointer top-10 ${
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
          className={`flex flex-col justify-between h-screen ${
            open ? "lg:gap-[16px] md:gap-[6px]" : "lg:gap-[12px] md:gap-[6px]"
          }`}
        >
          <li
            className={`flex justify-start items-center gap-2 py-2 ${
              open ? "m-2 ms-4" : "my-2 mx-auto"
            }`}
          >
            <Image
              alt="logo"
              src="/images/Logo.svg"
              width={20}
              height={20}
              className="w-[30px] h-[30.23px]"
            />
            <p className={`font-semibold text-xl ${!open && "hidden"}`}>
              اُپتی گارمِنت
            </p>
          </li>
          {SideBarItems.map((item) => {
            return (
              <li
                key={item.id}
                className={`${
                  router == `/${item.rootName}` && "border-e-2 border-[#3E2DE1]"
                } `}
              >
                <Link
                  href={`/${item.rootName}`}
                  className={`flex rounded-md cursor-pointer lg:p-1 p-[2px] mx-2 font-bold hover:bg-light-white text-sm items-center gap-x-4 ${
                    !open &&
                    "bg-[#F5F5F5] lg:w-9 md:w-7 md:h-7 lg:h-9 w-6 h-6  border-2 mx-auto border-[#EAEAEA]"
                  } 
              ${
                router == `/${item.rootName}`
                  ? "bg-[#EEECFF] text-[#3E2DE1] rounded-md"
                  : "text-[#555555]"
              }`}
                >
                  <Image
                    alt="logo"
                    src={`/images/sideBarIcons/${
                      router == `/${item.rootName}` || !open
                        ? `/${item.iconSelectName}`
                        : `/${item.iconName}`
                    }`}
                    width={20}
                    height={20}
                    className={`${open ? "w-6 h-6" : "w-[30px] h-[30.23px]"}`}
                  />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
