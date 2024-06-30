import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export const ThePerformanceOfTheStations = () => {
  return (
    <div className="col-span-8 border bg-white border-slate-200 p-2 rounded border-r-4 border-r-[#3E2DE1]">
      <header className="relative flex justify-between pb-4 border-b-2 border-[#EAEAEA]">
        <Link
          href="#"
          className="flex items-center gap-2 text-[#2B5BB7] font-bold"
        >
          <p>سفارشات</p>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 text-xs text-[#2B5BB7] font-bold"
        >
          مشاهده بیشتر
          <IoIosArrowBack />
        </Link>
      </header>

      <div className="relative overflow-x-auto sm:rounded-lg text-xs">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-[#566A7F] uppercase py-8">
            <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
              <th scope="col">ردیف</th>
              <th scope="col">کد پروژه</th>
              <th scope="col">عنوان پروژه</th>
              <th scope="col">تعداد سفارشات</th>
              <th scope="col">نام سفارش دهنده</th>
              <th scope="col">ایستگاه فعلی</th>
              <th scope="col">ایستگاه بعدی</th>
              <th scope="col">زمان تقریبی اتمام پروژه</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                00001
              </th>
              <td className="p-1">00001</td>
              <td className="p-1">پروژه عقیق شمال</td>
              <td className="p-1">1342</td>
              <td className="p-1">حسین نیکو</td>
              <td className="p-1">دوخت</td>
              <td className="p-1">چیدمان</td>
              <td className="p-1">1402/دی/12</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                00002
              </th>
              <td className="p-1">00001</td>
              <td className="p-1">پروژه عقیق شمال</td>
              <td className="p-1">1342</td>
              <td className="p-1"> شقایق شریف ...</td>
              <td className="p-1">نمونه دوزی</td>
              <td className="p-1">کنترل کیفیت</td>
              <td className="p-1">1402/دی/12</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                00002
              </th>
              <td className="p-1">00001</td>
              <td className="p-1">پروژه عقیق خراسان</td>
              <td className="p-1">1342</td>
              <td className="p-1"> شقایق شریف ...</td>
              <td className="p-1">نمونه دوزی</td>
              <td className="p-1">کنترل کیفیت</td>
              <td className="p-1">1402/دی/12</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                00003
              </th>
              <td className="p-1">00001</td>
              <td className="p-1">پروژه عقیق اقلید</td>
              <td className="p-1">1342</td>
              <td className="p-1">امیر علی صدیق</td>
              <td className="p-1">شست و شو</td>
              <td className="p-1">چیدمان</td>
              <td className="p-1">1402/دی/12</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                00004
              </th>
              <td className="p-1">00001</td>
              <td className="p-1">پروژه عقیق بندرعباس</td>
              <td className="p-1">1342</td>
              <td className="p-1"> غلامرضا نیکخواه</td>
              <td className="p-1"> دوخت</td>
              <td className="p-1">گلدوزی</td>
              <td className="p-1">1402/دی/12</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                00005
              </th>
              <td className="p-1">00001</td>
              <td className="p-1">پروژه عقیق بوشهر</td>
              <td className="p-1">1342</td>
              <td className="p-1"> جعفر قره گوزلو</td>
              <td className="p-1"> بسته بندی</td>
              <td className="p-1">نمونه دوزی</td>
              <td className="p-1">1402/دی/12</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                00006
              </th>
              <td className="p-1">00001</td>
              <td className="p-1">پروژه عقیق ارومیه</td>
              <td className="p-1">1342</td>
              <td className="p-1">حمید اسکندری</td>
              <td className="p-1">کنترل کیفیت</td>
              <td className="p-1">چیدمان</td>
              <td className="p-1">1402/دی/12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
