import Link from "next/link";

interface Props {}

export const InProgressProjects = (props: Props) => {
  return (
    <div className="col-span-8 border border-slate-400 ">
      <div className="relative text-left flex justify-between pb-4 border-b-2 border-[#EAEAEA]">
        <Link
          href="#"
          className="flex items-center gap-2 text-[#2B5BB7] font-bold"
        >
          <p>پروژه های در حال اجرا</p>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 text-[#2B5BB7] font-bold"
        >

          مشاهده بیشتر

          
        </Link>
      </div>
    </div>
  );
};
