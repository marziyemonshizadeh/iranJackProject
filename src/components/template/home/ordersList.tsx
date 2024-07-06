import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import OrdersTable from "./ordersTable";

export const OrdersList = () => {
  return (
    <div className="lg:col-span-8 md:col-span-6 col-span-12 border bg-white border-slate-200 rounded border-r-[3px] border-r-primary lg:h-[430px] md:h-[330px]">
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
      <div className="lg:max-h-[372px] md:max-h-[272px] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#E3E3E3] scrollbar-track-transparent lg:overflow-x-hidden md:overflow-x-scroll">
        <OrdersTable />
      </div>
    </div>
  );
};
