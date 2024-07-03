const Projects = () => {
  return (
    <div className="relative lg:overflow-x-hidden md:overflow-x-auto scrollbar-thin scrollbar-thumb-[#E3E3E3] scrollbar-track-transparent text-xs">
      <div className="inline-block min-w-full py-2">
        <div className="overflow-hidden">
          <table className="min-w-full border border-neutral-200 text-center text-sm text-[#555555] font-light text-surface dark:border-white/10 dark:text-white">
            <thead className="border-b border-neutral-200 font-normal text-xs dark:border-white/10 text-[#566A7F]">
              <tr>
                <th
                  scope="col"
                  className="border-e border-neutral-200 px-3 py-1 dark:border-white/10"
                >
                  ردیف
                </th>
                <th scope="col" className="px-3 py-1 dark:border-white/10">
                  کد پروژه
                </th>
                <th scope="col" className="px-3 py-1 dark:border-white/10">
                  عنوان پروژه
                </th>
                <th scope="col" className="px-3 py-1">
                  تعداد سفارشات
                </th>
                <th scope="col" className="px-3 py-1">
                  نام سفارش دهنده
                </th>
                <th scope="col" className="px-3 py-1">
                  ایستگاه فعلی
                </th>
                <th scope="col" className="px-3 py-1">
                  ایستگاه بعدی
                </th>
                <th scope="col" className="px-3 py-1">
                  زمان تقریبی اتمام پروژه
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
                  دوخت
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  چیدمان
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  12/دی/1402
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
                  پروژه عقیق خراسان
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                    1342
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  شقایق شریف ...
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  نمونه دوزی
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  کنترل کیفیت
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  12/دی/1402
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
                  پروژه عقیق اقلید
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                    1342
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  امیرعلی صدیق
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  شست و شو
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  چیدمان
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  12/دی/1402
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
                  پروژه عقیق بندرعباس
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                    1342
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  غلامرضا نیکخواه
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  دوخت
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  گلدوزی
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  12/دی/1402
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
                  پروژه عقیق بوشهر
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                    1342
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  جعفر قره گوزلو
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  بسته بندی
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  نمونه دوزی
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  12/دی/1402
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
                  پروژه عقیق ارومیه
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                    1342
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  حمید اسکندری
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  کنترل کیفیت
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  چیدمان
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  12/دی/1402
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
                  دوخت
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  چیدمان
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  12/دی/1402
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
                  دوخت
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  چیدمان
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  12/دی/1402
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
                  دوخت
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  چیدمان
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  12/دی/1402
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
                  دوخت
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  چیدمان
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  12/دی/1402
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
                  دوخت
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  چیدمان
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  12/دی/1402
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
                  دوخت
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  چیدمان
                </td>
                <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                  12/دی/1402
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projects;
