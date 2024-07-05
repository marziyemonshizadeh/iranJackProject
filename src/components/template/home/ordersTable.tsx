import { Orders } from "@/data/orders";

const OrdersTable = () => {
  return (
    <div className="relative lg:overflow-x-hidden md:overflow-x-auto text-xs">
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
                {Orders.map((order) => {
                  return (
                    <tr
                      key={order.id}
                      className="border-b border-neutral-200 dark:border-white/10 font-normal text-sm"
                    >
                      <td className="whitespace-nowrap border-e border-neutral-200 px-3 py-2 dark:border-white/10">
                        0000{order.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                        {order.projectCode}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                        {order.projectTitle}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                        <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                          {order.numberOfOrders}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                        {order.orderersName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                        {order.description}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
