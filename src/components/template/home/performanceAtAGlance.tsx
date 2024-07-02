import Image from "next/image";
import Link from "next/link";
import SemiCircleChart from "./charts/semiCircleChart/semiCircleChart";

const PerformanceAtAGlance = () => {
  return (
    <div className="lg:col-span-4 md:col-span-6 col-span-12 border bg-white border-slate-200 p-2 rounded border-r-[3px] border-r-[#2B5BB7] w-full h-[330px]">
      <header className="relative flex justify-between pb-4 border-b-2 border-[#EAEAEA]">
        <Link
          href="#"
          className="flex items-center gap-2 text-[#2B5BB7] font-bold text-sm"
        >
          <Image
            alt="x"
            src="/images/Tooltip.svg"
            width={10}
            height={10}
            className="w-5 h-5"
          />
          <p>عملکرد در یک نگاه</p>
        </Link>
        <button
          type="button"
          className="inline-flex justify-center gap-x-5 rounded-2xl bg-white text-xs px-3 py-2 w-[107px] h-8 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          یک ماهه
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </header>
      <SemiCircleChart />
    </div>
  );
};

export default PerformanceAtAGlance;
