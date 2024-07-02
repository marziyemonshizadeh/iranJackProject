function CuttingTable() {
  return (
    <>
      <table className="min-w-full border-2 border-[#E3E3E3] text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
        <thead className="text-sm font-medium bg-[#F5F5F5] text-[#2B5BB7] border-b border-[#E3E3E3] dark:border-white/10">
          <tr>
            <th
              scope="col"
              className="border-e border-[#E3E3E3] px-6 py-[9px] dark:border-white/10"
            >
              ردیف
            </th>
            <th scope="col" className="px-6 py-[9px] dark:border-white/10">
              رنگ
            </th>
            <th scope="col" className="px-6 py-[9px] dark:border-white/10">
              کد رنگ
            </th>
            <th
              scope="col"
              className="border-e border-[#E3E3E3] px-6 py-[9px] dark:border-white/10"
            >
              کد کالیته
            </th>
            <th
              scope="col"
              className="border-e border-[#E3E3E3] px-6 py-[9px] dark:border-white/10"
            >
              تعداد قد
            </th>
          </tr>
        </thead>
        <tbody className="text-sm font-normal">
          <tr className="odd:bg-white h-9 odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700 border-b border-[#E3E3E3] dark:border-white/10">
            <td className="whitespace-nowrap border-e border-[#E3E3E3] px-6 py-[9px] dark:border-white/10">
              00001
            </td>
            <td className="whitespace-nowrap px-6 py-[9px] dark:border-white/10">
              سبز سرخ آبی
            </td>
            <td className="whitespace-nowrap px-6 py-[9px] dark:border-white/10">
              00006
            </td>
            <td className="whitespace-nowrap border-e border-[#E3E3E3] px-6 py-[9px] dark:border-white/10">
              000001
            </td>
            <td className="whitespace-nowrap px-6 py-[9px]">1</td>
          </tr>
          <tr className="odd:bg-white h-9 odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700 border-b border-[#E3E3E3] dark:border-white/10">
            <td className="whitespace-nowrap border-e border-[#E3E3E3] px-6 py-[9px] dark:border-white/10">
              00002
            </td>
            <td className="whitespace-nowrap px-6 py-[9px] dark:border-white/10">
              مشکی
            </td>
            <td className="whitespace-nowrap px-6 py-[9px] dark:border-white/10">
              00006
            </td>
            <td className="whitespace-nowrap border-e border-[#E3E3E3] px-6 py-[9px] dark:border-white/10">
              000001
            </td>
            <td className="whitespace-nowrap px-6 py-[9px]">1</td>
          </tr>
          <tr className="odd:bg-white h-9 odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700 border-b border-[#E3E3E3] dark:border-white/10">
            <td className="whitespace-nowrap border-e border-[#E3E3E3] px-6 py-[9px] dark:border-white/10">
              00003
            </td>
            <td className="whitespace-nowrap px-6 py-[9px] dark:border-white/10">
              آبی
            </td>
            <td className="whitespace-nowrap px-6 py-[9px] dark:border-white/10">
              00006
            </td>
            <td className="whitespace-nowrap border-e border-[#E3E3E3] px-6 py-[9px] dark:border-white/10">
              000001
            </td>
            <td className="whitespace-nowrap px-6 py-[9px]">1</td>
          </tr>
        </tbody>
      </table>
      <div className="bg-[#F5F5F5] border-2 border-t-0 border-[#E3E3E3] flex items-center">
        <span className="min-w-[399px] text-[#2B5BB7] text-base font-medium border-e-2 border-[#E3E3E3] flex justify-center  py-2">
          جمع کل
        </span>
        <span className="mx-auto font-medium">4</span>
      </div>
    </>
  );
}

export default CuttingTable;
