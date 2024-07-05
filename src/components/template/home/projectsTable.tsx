import { Projects } from "@/data/projects";

const ProjectsTable = () => {
  return (
    <div className="relative lg:overflow-x-hidden md:overflow-x-auto text-xs">
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
              {Projects.map((project) => {
                return (
                  <tr
                    key={project.id}
                    className="border-b border-neutral-200 dark:border-white/10 font-normal text-sm"
                  >
                    <td className="whitespace-nowrap border-e border-neutral-200 px-3 py-2 dark:border-white/10">
                      000{project.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      {project.projectCode}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      {project.projectTitle}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      <span className="bg-[#F4FDDD] text-[#417D1A] rounded-2xl px-3 py-1">
                        {project.numberOfOrders}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      {project.orderersName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      {project.currentStation}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      {project.nextStation}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 dark:border-white/10">
                      {project.projectCompletionTime}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTable;
