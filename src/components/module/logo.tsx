import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center gap-1">
      <Image
        alt="logo"
        src="/images/Logo.svg"
        width={20}
        height={20}
        className="w-[40px] h-[40.23px]"
      />
      <Image
        alt="logo"
        src="/images/projectName.svg"
        width={20}
        height={20}
        className="w-[120px] h-[30.9px]"
      />
    </div>
  );
};

export default Logo;
