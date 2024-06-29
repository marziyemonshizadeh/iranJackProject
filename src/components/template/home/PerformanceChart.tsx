import Image from "next/image";
import Link from "next/link";

interface Props {}

const PerformanceChart = (props: Props) => {
  return (
    <div className="col-span-4 border bg-white border-slate-400 p-2 rounded-md border-r-4 border-r-[#2B5BB7]">
      <div className="relative text-left flex justify-between pb-4 border-b-2 border-[#EAEAEA]">
        <Link
          href="#"
          className="flex items-center gap-2 text-[#2B5BB7] font-bold"
        >
          <Image
            alt="x"
            src="/images/infoInformationCircle.png"
            width={10}
            height={10}
            className="w-5 h-5"
          />
          <p>عملکرد در یک نگاه</p>
        </Link>

        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
