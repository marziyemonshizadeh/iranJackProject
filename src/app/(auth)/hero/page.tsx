import Image from "next/image";

const Hero = () => {
  return (
      <div className="flex flex-col justify-center items-center gap-4 w-[394px] h-[239px] mx-auto p-8 border border-slate-100 bg-center rounded-[12px] bg-white shadow-sm shadow-[#E8E8E8]">
        <Image
          alt="heroIcon"
          src="/images/formsImages/heroIcon.svg"
          width={72}
          height={72}
        />
        <p className="text-[#9AD852] font-medium text-base">
          ورود با موفقیت انجام شد
        </p>
        <div className="flex justify-center items-center gap-2">
          <Image
            alt="heroIcon"
            src="/images/formsImages/Loading.svg"
            width={30}
            height={30}
          />
          <p className="text-[#AAAAAA] text-sm font-medium">
            در حال انتقال به صفحه اصلی ...
          </p>
        </div>
      </div>
  );
};

export default Hero;
