"use client";

import { SideBarItems } from "@/data/sidebarItems";
import clsx from 'clsx';
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
      className={clsx('bg-[#FEFEFE] text-primary duration-200 transition-all sticky top-0 z-20 overflow-hidden', { 'w-72':open, 'w-20':!open  })
    }
    >
      <div className={clsx('fixed' ,{ 'w-72':open, 'w-20':!open  })}>
        <div
          className={
            clsx('bg-[#F8F9FE] p-1 w-10 h-10 rounded-full absolute cursor-pointer top-10' ,{ 'right-[277px]':open, 'right-[72px] overflow-y-hidden':!open  })
        }
          onClick={() => setOpen(!open)}
        >
          <div className="bg-primary text-slate-50 w-7 h-7 p-1 rounded-full">
            <IoIosArrowForward
              className={
                clsx('w-5 h-5 duration-300',{'rotate-180 ':!open})
              }
            />
          </div>
        </div>

        <ul
          className={
            clsx('flex flex-col justify-between h-screen' ,{ 'lg:gap-[16px] md:gap-[6px]':open, 'lg:gap-[12px] md:gap-[6px]':!open  })
            }
        >
          <li
            className={
              clsx('flex justify-start items-center gap-2 py-2' ,{ 'm-2 ms-4':open, 'my-2 mx-auto':!open  })}
          >
            <Image
              alt="logo"
              src="/images/Logo.svg"
              width={20}
              height={20}
              className="w-[30px] h-[30.23px]"
            />
            <p
              className={
                clsx('fixfont-semibold text-xl text-black' ,{ 'hidden':!open  })}
            >
              اُپتی گارمِنت
            </p>
          </li>
          {SideBarItems.map((item) => {
            return (
              <li
                key={item.id}
                className={
                  clsx('' ,{ 'border-e-2 border-primary':router == `/${item.rootName}` })}
              >
                <Link
                  href={`/${item.rootName}`}
                  className={ clsx('flex rounded-md cursor-pointer lg:p-1 p-[2px] mx-2 font-bold hover:bg-light-white text-sm items-center gap-x-4' 
                    ,{ 'bg-[#F5F5F5] lg:w-9 md:w-7 md:h-7 lg:h-9 w-6 h-6  border-2 mx-auto border-[#EAEAEA]': !open ,
                      'bg-[#EEECFF] text-primary rounded-md':router == `/${item.rootName}`,
                        'text-[#555555]':router !== `/${item.rootName}` })
                      }
                >
                 <Image
                    alt="logo"
                    src={
                        `/images/sideBarIcons/${
                         router == `/${item.rootName}` || !open
                        ? `/${item.iconSelectName}`
                        : `/${item.iconName}`
                    }` 
                  }
                    width={20}
                    height={20}
                    className={
                      clsx("",{"w-6 h-6" :open , "w-[30px] h-[30.23px]":!open})
                    }
                  />
                  <span
                    className={
                      clsx("origin-left duration-200",{"hidden":!open})
                    }
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
