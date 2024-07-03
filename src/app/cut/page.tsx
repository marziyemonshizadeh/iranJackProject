import HomePageLayout from "@/components/layout/homePageLayout";
import CuttingComponent from "@/components/template/cut/cuttingTable/cuttingComponent";
import Tab from "@/components/template/cut/tab";
import TableOfSizes from "@/components/template/cut/tableOfSizes/sizeComponent";
import TheFormToSendToTheWarehouse from "@/components/template/cut/theFormToSendToTheWarehouse";
import Image from "next/image";
import Link from "next/link";
import { LuDownload, LuPlusCircle } from "react-icons/lu";

const Cut = () => {
  return (
    <HomePageLayout>
      <div className="col-span-12 mt-4 ">
        <Tab />
        <ul className="mt-5 flex flex-wrap tab-component text-sm font-bold text-center text-gray-500  dark:border-gray-700 dark:text-gray-400">
          <li className="me-2">
            <Link
              href="#"
              className="inline-flex items-center gap-1  p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              <LuPlusCircle className="w-5 h-5" />
              <span>ثبت برش جدید</span>
            </Link>
          </li>
          <li className="me-2">
            <Link
              href="#"
              className="inline-flex items-center gap-1  p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              <Image
                alt="logo"
                src="/images/delivery-check-list-pen.svg"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>لیست برش</span>
            </Link>
          </li>
          <li className="me-2 border border-b-white border-gray-200 rounded-md">
            <Link
              href="#"
              aria-current="page"
              className="inline-flex items-center gap-1 p-4 text-[#3E2DE1] bg-white rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
            >
              <LuPlusCircle className="w-5 h-5" />
              <span>میز برش</span>
            </Link>
          </li>
          <li className="me-2">
            <Link
              href="#"
              className="inline-flex items-center gap-1  p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              <LuPlusCircle className="w-5 h-5" />
              <span>برش اضافه</span>
            </Link>
          </li>
          <li className="me-2">
            <Link
              href="#"
              className="inline-flex items-center gap-1  p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              <Image
                alt="logo"
                src="/images/delivery-check-list-pen.svg"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span>لیست برش اضافه</span>
            </Link>
          </li>
        </ul>

        <div className="bg-white p-3  border-2 border-b-0 border-t-0 border-[#EEEEEE]">
          <TheFormToSendToTheWarehouse />
          <div className="flex lg:flex-row md:flex-col gap-3">
            <CuttingComponent />
            <TableOfSizes />
          </div>
        </div>
        <div className="bg-[#F5F5F5] border-2 mb-56 rounded-b-md border-[#E3E3E3] h-[56px] flex justify-end items-center">
          <button className="bg-[#FEFEFE] inline-flex justify-center items-center mx-2 float-end text-[#333333] font-normal text-base py-1 px-2 border-2 border-[#EEEEEE] hover:border-[#3E2DE1] focus:border-[#3E2DE1] hover:text-[#3E2DE1] focus:text-[#3E2DE1] focus:bg-[#EEECFF] rounded">
            <LuDownload className="w-4 h-4 me-2" />
            <span>خروجی</span>
          </button>
        </div>
      </div>

      <div className="border rounded m-6 pb-6 tab-component bg-white">
        <ul className="flex border-b tab-buttons">
          <li className="mr-1">
            <button
              data-tab-index="0"
              className="tab-item bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            >
              Chrome API Notes
            </button>
          </li>
          <li className="mr-1">
            <button
              data-tab-index="1"
              className="tab-item bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            >
              Other
            </button>
          </li>
          <li className="-mb-px mr-1">
            <button
              data-tab-index="2"
              className="tab-item bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-700 font-semibold active"
            >
              &middot;&nbsp;Misc&nbsp;&middot;
            </button>
          </li>
          <li className="mr-1 cursor-not-allowed">
            <button
              data-tab-index="3"
              className="tab-item bg-white inline-block py-2 px-4 text-gray-400 font-semibold cursor-not-allowed disabled"
            >
              Tab 4
            </button>
          </li>
        </ul>
      </div>
    </HomePageLayout>
  );
};

export default Cut;
