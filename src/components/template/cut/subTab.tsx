import Image from "next/image";
import Link from "next/link";
import { LuPlusCircle } from "react-icons/lu";

function SubTab() {
  return (
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
  );
}

export default SubTab;
