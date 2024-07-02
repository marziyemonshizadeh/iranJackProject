import EmptyListWarning from "../emptyListWarning";
import SizeTable from "./table";

function TableOfSizes() {
  const isListEmpty = true;

  return (
    <div className="col-span-3 border-2 border-[#E3E3E3] rounded-md p-3">
      <div className="border-b-2 border-b-[#E3E3E3] py-2 text-sm font-medium">
        سایزبندی ها
      </div>
      <div className="h-[220px] overflow-y-scroll">
        <div className="overflow-hidden my-3 m-[1px]">
          {isListEmpty ? <EmptyListWarning /> : <SizeTable />}
        </div>
      </div>
    </div>
  );
}

export default TableOfSizes;
