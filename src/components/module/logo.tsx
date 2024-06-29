import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <Image
        alt="logo"
        src="/images/optigarmentIcon.png"
        width={20}
        height={20}
        className="w-[40px] h-[40.23px]"
      />
      <p className="font-semibold text-xl">اپتی گارمنت</p>
    </div>
  );
};

export default Logo;
