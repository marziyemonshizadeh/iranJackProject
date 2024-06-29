// "use client";
import Image from "next/image";

interface Props {}

const Hero = (props: Props) => {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-no-repeat bg-auto bg-center bg-opacity-75"
      style={{
        backgroundImage: 'url("/images/backgroundImage.png")',
      }}
    >
      <div className="flex flex-col justify-center items-center gap-4 w-[394px] h-[239px] mx-auto p-8 border border-slate-100 bg-center rounded-[12px] bg-white">
        <Image
          alt="heroIcon"
          src="/images/heroIcon.png"
          width={72}
          height={72}
        />
        <p className="text-[#9AD852]">ورود با موفقیت انجام شد</p>
        <div className="flex justify-center items-center gap-4">
          <Image
            alt="heroIcon"
            src="/images/spinner.png"
            width={30}
            height={30}
          />
          <p className="text-[#AAAAAA] text-xs">
            در حال انتقال به صفحه اصلی ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
