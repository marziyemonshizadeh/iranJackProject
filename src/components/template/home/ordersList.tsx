import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export const OrdersList = () => {
  return (
    <div className="lg:col-span-8 md:col-span-6 col-span-12 border bg-white border-slate-200 rounded border-r-[3px] border-r-[#566A7F] h-[330px] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#E3E3E3] scrollbar-track-transparent lg:overflow-x-hidden md:overflow-x-scroll">
      <header className="relative flex justify-between pb-4 p-2 ">
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
        <div className="relative overflow-x-auto text-xs">
          <div className="inline-block min-w-full py-2">
            <div className="overflow-hidden">
              <table className="min-w-full border border-neutral-200 text-center text-sm text-[#555555] font-light text-surface dark:border-white/10 dark:text-white">
                <thead className="border-b border-neutral-200 font-normal dark:border-white/10 text-[#566A7F]">
                  <tr>
                    <th
                      scope="col"
                      className="border-e border-neutral-200 px-3 py-2 dark:border-white/10"
                    >
                      ردیف
                    </th>
                    <th scope="col" className="px-3 py-2 dark:border-white/10">
                      کد پروژه
                    </th>
                    <th scope="col" className="px-3 py-2 dark:border-white/10">
                      عنوان پروژه
                    </th>
                    <th scope="col" className="px-3 py-2">
                      تعداد سفارشات
                    </th>
                    <th scope="col" className="px-3 py-2">
                      نام سفارش دهنده
                    </th>
                    <th scope="col" className="px-3 py-2">
                      توضیحات
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200 dark:border-white/10 font-normal text-sm">
                    <td className="whitespace-nowrap border-e border-neutral-200 px-3 py-2 dark:border-white/10">
                      00001
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      00001
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      پروژه عقیق شمال
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                        1342
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      حسین نیکو
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      ...
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-white/10 font-normal text-sm">
                    <td className="whitespace-nowrap border-e border-neutral-200 px-3 py-2 dark:border-white/10">
                      00002
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      00001
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      پروژه عقیق شمال
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                        1342
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      حسین نیکو
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      ...
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-white/10 font-normal text-sm">
                    <td className="whitespace-nowrap border-e border-neutral-200 px-3 py-2 dark:border-white/10">
                      00003
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      00001
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      پروژه عقیق شمال
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                        1342
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      حسین نیکو
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      ...
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-white/10 font-normal text-sm">
                    <td className="whitespace-nowrap border-e border-neutral-200 px-3 py-2 dark:border-white/10">
                      00004
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      00001
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      پروژه عقیق شمال
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                        1342
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      حسین نیکو
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      ...
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-white/10 font-normal text-sm">
                    <td className="whitespace-nowrap border-e border-neutral-200 px-3 py-2 dark:border-white/10">
                      00005
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      00001
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      پروژه عقیق شمال
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                        1342
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      حسین نیکو
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      ...
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-white/10 font-normal text-sm">
                    <td className="whitespace-nowrap border-e border-neutral-200 px-3 py-2 dark:border-white/10">
                      00006
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      00001
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      پروژه عقیق شمال
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                        1342
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      حسین نیکو
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      اتمام پروژه
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-white/10 font-normal text-sm">
                    <td className="whitespace-nowrap border-e border-neutral-200 px-3 py-2 dark:border-white/10">
                      00007
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      00001
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      پروژه عقیق شمال
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                        1342
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      حسین نیکو
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      ...
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-white/10 font-normal text-sm">
                    <td className="whitespace-nowrap border-e border-neutral-200 px-3 py-2 dark:border-white/10">
                      00008
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      00001
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      پروژه عقیق شمال
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                        1342
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      حسین نیکو
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      ...
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-white/10 font-normal text-sm">
                    <td className="whitespace-nowrap border-e border-neutral-200 px-3 py-2 dark:border-white/10">
                      00009
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      00001
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      پروژه عقیق شمال
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                        1342
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      حسین نیکو
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      ...
                    </td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-white/10 font-normal text-sm">
                    <td className="whitespace-nowrap border-e border-neutral-200 px-3 py-2 dark:border-white/10">
                      00010
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      00001
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      پروژه عقیق شمال
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                        1342
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      حسین نیکو
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      ...
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
