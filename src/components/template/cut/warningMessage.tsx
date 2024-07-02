import Image from "next/image";

function WarningMessage() {
  return (
    <div className="inline-flex items-center gap-2 font-semibold bg-[#FEF5DF] p-2 text-[#783412] text-xs rounded-lg border-r-4 border-r-[#FDB600] my-3">
      <Image
        alt="Warning"
        src="/images/Warning.png"
        width={5}
        height={5}
        className="w-4 h-4"
      />
      <span>
        کاربر گرامی در نظر داشته باشید که با فشردن دکمه ارسال به انبار ، دیگر
        قادر به اضافه کردن اطلاعات به میز برش مذکور نخواهید بود
      </span>
      <Image
        alt="DeleteWarn"
        src="/images/DeleteWarn.png"
        width={5}
        height={5}
        className="w-4 h-4"
      />
    </div>
  );
}

export default WarningMessage;
