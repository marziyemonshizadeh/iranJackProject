import { Cuts } from "@/data/cuts";

function CuttingTable() {
  return (
    <>
      <table className="min-w-full border-2 border-[#E3E3E3] text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
        <thead className="text-sm font-medium bg-[#F5F5F5] text-[#2B5BB7] border-b border-[#E3E3E3] dark:border-white/10">
          <tr>
            <th
              scope="col"
              className="border-e border-[#E3E3E3] px-3 py-[9px] dark:border-white/10"
            >
              ردیف
            </th>
            <th scope="col" className="px-3 py-[9px] dark:border-white/10">
              رنگ
            </th>
            <th scope="col" className="px-3 py-[9px] dark:border-white/10">
              کد رنگ
            </th>
            <th
              scope="col"
              className="border-e border-[#E3E3E3] px-3 py-[9px] dark:border-white/10"
            >
              کد کالیته
            </th>
            <th
              scope="col"
              className="border-e border-[#E3E3E3] px-3 py-[9px] dark:border-white/10"
            >
              تعداد قد
            </th>
          </tr>
        </thead>
        <tbody className="text-sm font-normal">
          {Cuts.map((cut) => {
            return (
              <tr
                key={cut.id}
                className="odd:bg-white h-9 odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700 border-b border-[#E3E3E3] dark:border-white/10"
              >
                <td className="whitespace-nowrap border-e border-[#E3E3E3] px-3 py-[9px] dark:border-white/10">
                  0000{cut.id}
                </td>
                <td className="whitespace-nowrap px-3 py-[9px] dark:border-white/10">
                  {cut.color}
                </td>
                <td className="whitespace-nowrap px-3 py-[9px] dark:border-white/10">
                  {cut.colorCode}
                </td>
                <td className="whitespace-nowrap border-e border-[#E3E3E3] px-3 py-[9px] dark:border-white/10">
                  {cut.qualityCode}
                </td>
                <td className="whitespace-nowrap px-3 py-[9px]">
                  {cut.numberOfHeight}
                </td>
              </tr>
            );
          })}

          <tr className="bg-[#F5F5F5] border-2 border-t-0 border-[#E3E3E3] border-b font-bold dark:border-white/10">
            <td className="whitespace-nowrap px-3 py-[9px] dark:border-white/10"></td>
            <td className="whitespace-nowrap px-3 py-[9px] text-[#2B5BB7] text-base  dark:border-white/10">
              جمع کل
            </td>
            <td className="whitespace-nowrap px-3 py-[9px] dark:border-white/10"></td>
            <td className="whitespace-nowrap border-e border-[#E3E3E3] px-3 py-[9px] dark:border-white/10"></td>
            <td className="whitespace-nowrap px-3 text-base  py-[9px]">4</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CuttingTable;
