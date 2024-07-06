import HomePageLayout from "@/components/layout/homePageLayout";
import CuttingComponent from "@/components/template/cut/cuttingTable/cuttingComponent";
import SubTab from "@/components/template/cut/subTab";
import Tab from "@/components/template/cut/tab";
import TableOfSizes from "@/components/template/cut/tableOfSizes/sizeComponent";
import TheFormToSendToTheWarehouse from "@/components/template/cut/theFormToSendToTheWarehouse";
import { LuDownload } from "react-icons/lu";

const Cut = () => {
  return (
    <HomePageLayout>
      <div className="col-span-12 mt-4 ">
        <Tab />
        <SubTab />
        <div className="bg-white p-3  border-2 border-b-0 border-t-0 border-[#EEEEEE]">
          <TheFormToSendToTheWarehouse />
          <div className="flex lg:flex-row md:flex-col gap-3">
            <CuttingComponent />
            <TableOfSizes />
          </div>
        </div>
        <div className="bg-[#F5F5F5] border-2 mb-56 rounded-b-md border-[#E3E3E3] h-[56px] flex justify-end items-center">
          <button className="bg-[#FEFEFE] inline-flex justify-center items-center mx-2 float-end text-[#333333] font-normal text-base py-1 px-2 border-2 border-[#EEEEEE] hover:border-primary focus:border-primary hover:text-primary focus:text-primary focus:bg-[#EEECFF] rounded">
            <LuDownload className="w-4 h-4 me-2" />
            <span>خروجی</span>
          </button>
        </div>
      </div>
    </HomePageLayout>
  );
};

export default Cut;
