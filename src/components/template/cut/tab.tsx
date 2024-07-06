import Image from "next/image";
import Link from "next/link";

function Tab() {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-base font-medium">
        <li className="me-2">
          <Link
            href="#"
            className="inline-flex items-center gap-2 p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            <Image
              alt="logo"
              src="/images/Home.svg"
              width={20}
              height={20}
              className="w-6 h-6"
            />
            صفحه اصلی
          </Link>
        </li>
        <li className="me-2">
          <Link
            href="#"
            className="inline-flex items-center gap-2 p-4 text-primary border-b-2 border-primary rounded-t-lg active dark:text-primary dark:border-primary"
            aria-current="page"
          >
            برش
          </Link>
        </li>
        <li className="me-2">
          <Link
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            سایزبندی
          </Link>
        </li>
        <li className="me-2">
          <Link
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            کارکنان برش
          </Link>
        </li>
        <li className="me-2">
          <Link
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            ثبت خرابی
          </Link>
        </li>
        <li className="me-2">
          <Link
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            اموال
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Tab;
