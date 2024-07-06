import EmptyListWarning from "../emptyListWarning";
import SizeTable from "./table";

function TableOfSizes() {
  const isListEmpty = false;

  return (
    <div className="border-2 border-[#E3E3E3] rounded-md p-3 w-full">
      <div className="border-b-2 border-b-[#E3E3E3] py-2 text-sm font-medium">
        سایزبندی ها
      </div>
      <div
        className={`h-[220px] ${
          !isListEmpty &&
          "overflow-y-scroll scrollbar-thin scrollbar-thumb-[#E3E3E3] scrollbar-track-transparent"
        }`}
      >
        <div className="overflow-hidden my-3 m-[1px]">
          {isListEmpty ? <EmptyListWarning /> : <SizeTable />}
        </div>
      </div>
    </div>
  );
}

export default TableOfSizes;
