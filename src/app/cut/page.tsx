import HomePageLayout from "@/components/layout/homePageLayout";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";

const Cut = () => {
  return (
    <HomePageLayout>
      <div className="col-span-12">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <Link
                href="#"
                className="inline-flex items-center gap-2 p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page"
              >
                <HiOutlineHome />
                صفحه اصلی
              </Link>
            </li>
            <li className="me-2">
              <Link
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
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
        <div>
          <div className="inline-flex items-center gap-2 font-semibold bg-[#FEF5DF] px-2 text-[#783412] text-xs rounded-lg border-r-2 border-r-[#FDB600] p-1 my-3">
            <Image
              alt="x"
              src="/images/Warning.png"
              width={5}
              height={5}
              className="w-4 h-4"
            />
            <span>
              کاربر گرامی در نظر داشته باشید که با فشردن دکمه ارسال به انبار ،
              دیگر قادر به اضافه کردن اطلاعات به میز برش مذکور نخواهید بود
            </span>
            <Image
              alt="x"
              src="/images/DeleteWarn.png"
              width={5}
              height={5}
              className="w-4 h-4"
            />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 my-2">
            <input
              type="text"
              id="first_name"
              className="bg-[#F5F5F5] border border-[#D3D3D3] outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="عنوان برش"
              required
            />
            <input
              type="text"
              id="first_name"
              className="bg-[#F5F5F5] border border-[#D3D3D3] outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="کد برش"
              required
            />
            <input
              type="text"
              id="first_name"
              className="bg-[#F5F5F5] border border-[#D3D3D3] outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="کد پروژه"
              required
            />
            <input
              type="text"
              id="first_name"
              className="bg-[#F5F5F5] border border-[#D3D3D3] outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="رنگ"
              required
            />
            <input
              type="text"
              id="first_name"
              className="bg-[#F5F5F5] border border-[#D3D3D3] outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="کد رنگ"
              required
            />
            <input
              type="text"
              id="first_name"
              className="bg-[#F5F5F5] border border-[#D3D3D3] outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="کد کالیته"
              required
            />
            <input
              type="text"
              id="first_name"
              className="bg-[#F5F5F5] border border-[#D3D3D3] outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="تعداد قد "
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              ارسال به انبار
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              ذخیره
            </button>
          </div>
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-3 border border-slate-400 rounded-md p-1">
              <div className="border-b border-b-slate-400 py-2">میز برش</div>
              <div className="my-3 border-[1px] border-slate-200">
                <div className="bg-[#EAEAEA] h-10"></div>
                <Image
                  alt="mm"
                  src="/images/Empty.png"
                  width={50}
                  height={50}
                  className="w-[552px] h-[113px]"
                />
                <div className="bg-[#EAEAEA] h-10"></div>
              </div>
              <button
                type="button"
                className="text-white float-end bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                ویرایش
              </button>
            </div>

            <div className="col-span-3 border border-slate-400 rounded-md p-1">
              <div className="border-b border-b-slate-400 py-2">
                سایزبندی ها
              </div>
              <div className=" my-3 border-[1px] border-slate-200">
                <div className="bg-[#EAEAEA] h-10"></div>
                <div>
                  <Image
                    alt="mm"
                    src="/images/Empty.png"
                    width={50}
                    height={50}
                    className="w-[552px] h-[113px]"
                  />
                </div>
                <div className="bg-[#EAEAEA] h-10"></div>
              </div>
            </div>
          </div>
          <div className="bg-[#EAEAEA] h-10"></div>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default Cut;
