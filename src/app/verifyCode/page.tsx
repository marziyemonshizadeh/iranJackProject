"use client";

import Logo from "@/components/module/logo";
import { verifyCodeFormValues } from "@/typings/verifyCodeFormType";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { PiClockCounterClockwiseBold } from "react-icons/pi";

export default function VerifyCode() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<verifyCodeFormValues>({});
  const onSubmit: SubmitHandler<verifyCodeFormValues> = async (
    data: verifyCodeFormValues
  ) => {
    console.log("data=", data);
    reset();
  };
  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-no-repeat bg-auto bg-center bg-opacity-75"
      style={{
        backgroundImage: 'url("/images/backgroundImage.png")',
      }}
    >
      <form
        className="min-w-[388px] min-h-[404px] mx-auto p-8 border border-slate-100 bg-center rounded-[12px] bg-white"
        action="#"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-center items-center gap-4 text-sm">
          <Logo />
          <div className="flex justify-between items-center gap-12">
            <p>ارسال کد یکبار مصرف</p>
            <Link href="/forgetPassword">
              <FaArrowLeftLong />
            </Link>
          </div>
          <div className="flex gap-4 text-sm">
            <div>
              <span>شماره همراه:</span>
              <span>091293265487</span>
            </div>
            <div className="flex items-center text-[#FF4040]">
              <MdEdit />
              <span>ویرایش</span>
            </div>
          </div>

          <p>کد 4 رقمی ارسال شده را وارد نمایید : </p>

          <div className="flex flex-row-reverse justify-center gap-2 mb-6">
            <input
              className="w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-[#3E2DE1] focus:ring-[#3E2DE1]"
              type="text"
              pattern="[0-9]"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
              {...register("charOne", { required: true })}
            />
            <input
              className="w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-[#3E2DE1] focus:ring-[#3E2DE1]"
              type="text"
              pattern="[0-9]"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
              {...register("charTwo", { required: true })}
            />
            <input
              className="w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-[#3E2DE1] focus:ring-[#3E2DE1]"
              type="text"
              pattern="[0-9]"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
              {...register("charThree", { required: true })}
            />
            <input
              className="w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-[#3E2DE1] focus:ring-[#3E2DE1]"
              type="text"
              pattern="[0-9]"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
              {...register("charFour", { required: true })}
            />
          </div>

          <div className="bg-[#DDF1FF] text-[#2B5BB7]">
            ارسال مجدد کد تا 01:59 دیگر
          </div>

          {/* If the code is not correct */}
          <div className="bg-[#FFE7E7] text-[#FF4040]">
            کد وارد شده صحیح نمی باشد
          </div>

          <div className="flex items-center gap-2 text-[#2B5BB7]">
            <PiClockCounterClockwiseBold />
            <span>ارسال مجدد کد</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-slate-50 bg-indigo-700 p-3 rounded-md"
          >
            ثبت و ادامه
          </button>
        </div>
      </form>
    </div>
  );
}
