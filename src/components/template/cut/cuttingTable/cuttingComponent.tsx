import { FiEdit } from "react-icons/fi";
import EmptyListWarning from "../emptyListWarning";
import Table from "./table";

function CuttingComponent() {
  const isListEmpty = false;
  return (
    <div className="border-2 border-[#E3E3E3] rounded-md p-3 w-full">
      <div className="border-b-2 border-[#E3E3E3] py-2 text-sm font-medium">
        میز برش
      </div>

      <div className="h-[220px] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#E3E3E3] scrollbar-track-transparent">
        <div className="overflow-hidden my-3 m-[1px]">
          {isListEmpty ? <EmptyListWarning /> : <Table />}
        </div>
      </div>

      <button className="bg-transparent inline-flex justify-center mt-2 items-center float-end text-[#333333] font-normal text-base py-1 px-4 border-2 border-[#EEEEEE] hover:border-[#3E2DE1] focus:border-[#3E2DE1] hover:text-[#3E2DE1] focus:text-[#3E2DE1] focus:bg-[#EEECFF] rounded">
        <FiEdit className="w-4 h-4 me-2" />
        <span>ویرایش</span>
      </button>
    </div>
  );
}

export default CuttingComponent;
