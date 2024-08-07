import { Sizes } from "@/data/sizes";

function SizeTable() {
  return (
    <table className="min-w-full border-2 border-[#E3E3E3] text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
      <thead className="text-sm font-medium bg-[#F5F5F5] text-[#2B5BB7] border-b border-[#E3E3E3] dark:border-white/10">
        <tr>
          <th
            scope="col"
            className="py-2 border-e border-[#E3E3E3] dark:border-white/10"
          >
            ردیف
          </th>
          <th
            scope="col"
            className="py-2 border-e border-[#E3E3E3] dark:border-white/10"
          >
            XS
          </th>
          <th
            scope="col"
            className="py-2 border-e border-[#E3E3E3] dark:border-white/10"
          >
            S
          </th>
          <th
            scope="col"
            className="py-2 border-e border-[#E3E3E3] dark:border-white/10"
          >
            M
          </th>
          <th
            scope="col"
            className="py-2 border-e border-[#E3E3E3] dark:border-white/10"
          >
            L
          </th>
          <th
            scope="col"
            className="py-2 border-e border-[#E3E3E3] dark:border-white/10"
          >
            XL
          </th>
          <th
            scope="col"
            className="py-2 border-e border-[#E3E3E3] dark:border-white/10"
          >
            2XL
          </th>
          <th
            scope="col"
            className="py-2 border-e border-[#E3E3E3] dark:border-white/10"
          >
            3XL
          </th>
          <th
            scope="col"
            className="py-2 border-e border-[#E3E3E3] dark:border-white/10"
          >
            جمع کل
          </th>
        </tr>
      </thead>
      <tbody className="text-sm font-normal">
        {Sizes.map((size) => {
          return (
            <tr
              key={size.id}
              className="odd:bg-white h-9 odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700 border-b border-[#E3E3E3] dark:border-white/10"
            >
              <td className=" py-[9px] whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
                000{size.id}
              </td>
              <td className="whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
                {size.XS}
              </td>
              <td className="whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
                {size.S}
              </td>
              <td className="whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
                {size.M}
              </td>
              <td className="whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
                {size.L}
              </td>
              <td className="whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
                {size.XL}
              </td>
              <td className="whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
                {size.XXL}
              </td>
              <td className="whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
                {size.XXXl}
              </td>
              <td className="text-start ps-4 whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
                {size.total}
              </td>
            </tr>
          );
        })}
        <tr className="border-b-none font-bold bg-[#F5F5F5] border-[#E3E3E3] dark:border-white/10">
          <td className="p-2 whitespace-nowrap w-9 text-[#2B5BB7] text-base border-e border-[#E3E3E3] dark:border-white/10">
            جمع کل
          </td>
          <td className="whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
            40
          </td>
          <td className="whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
            40
          </td>
          <td className="whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
            40
          </td>
          <td className="whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
            40
          </td>
          <td className="whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
            40
          </td>
          <td className="whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
            40
          </td>
          <td className="whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
            40
          </td>
          <td className="text-start ps-4 whitespace-nowrap border-e border-[#E3E3E3] dark:border-white/10">
            280
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SizeTable;
