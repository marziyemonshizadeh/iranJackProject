import Image from "next/image";

function EmptyListWarning() {
  return (
    <div className=" border-2 border-[#E3E3E3] select-none">
      <div className="bg-[#F5F5F5] border-b-2 border-[#E3E3E3] h-9"></div>
      <div className="flex flex-col justify-center items-center gap-4 p-4 h-[112px]">
        <Image
          alt="warningImage"
          src="/images/warningImage.svg"
          width={50}
          height={50}
          className="w-[59.05px] h-[44.59px]"
        />
        <span className="text-[#888888]">مقدار انتخاب نشده است</span>
      </div>
      <div className="bg-[#F5F5F5] border-t-2 border-[#E3E3E3] h-9"></div>
    </div>
  );
}

export default EmptyListWarning;
