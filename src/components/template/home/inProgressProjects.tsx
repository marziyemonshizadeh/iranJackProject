import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Projects from "./projects";

export const InProgressProjects = () => {
  return (
    <div className="lg:col-span-8 md:col-span-6 col-span-12 border bg-white border-slate-200 rounded border-r-[3px] border-r-[#566A7F] h-[430px] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#E3E3E3] scrollbar-track-transparent lg:overflow-x-hidden md:overflow-x-scroll">
      <header className="relative flex justify-between items-center p-2 pb-4">
        <Link
          href="#"
          className="flex items-center gap-2 text-[#2B5BB7] font-bold"
        >
          <p>پروژه های در حال اجرا</p>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 text-xs text-[#2B5BB7] font-bold"
        >
          مشاهده بیشتر
          <IoIosArrowBack className="w-3 h-3" />
        </Link>
      </header>
      <Projects />
    </div>
  );
};
