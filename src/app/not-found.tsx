import Image from "next/image";
import Link from "next/link";

type Props = {};

function notFound({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 h-screen">
      <Image
        src="/images/free-404-page-not-found-456876.png"
        alt="qaz"
        width={400}
        height={400}
        className="w-[350px] h-[350px]"
      />
      <div className="flex flex-col  justify-center items-center">
        <p className="font-bold my-3">صفحه ی مورد نظر یافت نشد !!!</p>
        <Link
          href="/home"
          className="bg-[#3E2DE1] hover:bg-[#1B0E9D] text-slate-50 w-[118px] h-[32px] text-sm font-medium text-center px-4 py-2 my-2 rounded-lg"
        >
          برگشت به خانه
        </Link>
      </div>
    </div>
  );
}

export default notFound;
