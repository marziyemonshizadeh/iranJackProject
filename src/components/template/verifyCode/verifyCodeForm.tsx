"use client";

import FormLayout from "@/components/layout/formLayout";
import Logo from "@/components/module/logo";
import {
  VerifyCodeFormValidation,
  VerifyCodeFormValidationType,
} from "@/validation/verifyCodeFormValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

export default function VerifyCodeForm() {
  const IsTheEnteredCodeWrong = false;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VerifyCodeFormValidationType>({
    resolver: zodResolver(VerifyCodeFormValidation),
  });
  const onSubmit: SubmitHandler<VerifyCodeFormValidationType> = async (
    data: VerifyCodeFormValidationType
  ) => {
    console.log("data=", data);
    reset();
  };

  return (
    <FormLayout>
      <form
        className="min-w-[388px] min-h-[404px] mx-auto p-8 border border-slate-100 bg-center rounded-[12px] shadow-sm shadow-[#E8E8E8] bg-[#FEFEFE]"
        action="#"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-center items-center gap-6 text-sm">
          <Logo />
          {IsTheEnteredCodeWrong && (
            <div className="flex justify-between items-center gap-12">
              <p className="font-bold">ارسال کد یکبار مصرف</p>
              <Link href="/forgetPassword">
                <Image
                  alt="ArrowLeft"
                  src="/images/formsImages/ArrowLeft.svg"
                  width={10}
                  height={10}
                  className="h-6 w-6 font-normal"
                />
              </Link>
            </div>
          )}
          <div className="flex gap-4 text-sm">
            <div className="flex gap-2 text-sm">
              <span>شماره همراه:</span>
              <span className="font-medium">091293265487</span>
            </div>
            {IsTheEnteredCodeWrong && (
              <div className="flex items-center text-[#FF4040]">
                <Image
                  alt="Pen"
                  src="/images/formsImages/Pen.svg"
                  width={10}
                  height={10}
                  className="w-4 h-4 mt-1"
                />
                <span className="font-semibold ">ویرایش</span>
              </div>
            )}
          </div>

          <p>کد 4 رقمی ارسال شده را وارد نمایید : </p>

          <div
            className={`flex flex-row-reverse justify-center gap-2 ${
              IsTheEnteredCodeWrong ? "mb-3" : "mb-6"
            } `}
          >
            <input
              className={`w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-[#3E2DE1] focus:ring-[#3E2DE1] ${
                IsTheEnteredCodeWrong && "border-[#FF4040]"
              }`}
              type="text"
              pattern="[0-9]"
              maxLength={1}
              inputMode="numeric"
              autoComplete="one-time-code"
              {...register("charOne", { required: true })}
            />
            <input
              className={`w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-[#3E2DE1] focus:ring-[#3E2DE1] ${
                IsTheEnteredCodeWrong && "border-[#FF4040]"
              }`}
              type="text"
              pattern="[0-9]"
              maxLength={1}
              inputMode="numeric"
              autoComplete="one-time-code"
              {...register("charTwo", { required: true })}
            />
            <input
              className={`w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-[#3E2DE1] focus:ring-[#3E2DE1] ${
                IsTheEnteredCodeWrong && "border-[#FF4040]"
              }`}
              type="text"
              pattern="[0-9]"
              maxLength={1}
              inputMode="numeric"
              autoComplete="one-time-code"
              {...register("charThree", { required: true })}
            />
            <input
              className={`w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-[#3E2DE1] focus:ring-[#3E2DE1] ${
                IsTheEnteredCodeWrong && "border-[#FF4040]"
              }`}
              type="text"
              pattern="[0-9]"
              maxLength={1}
              inputMode="numeric"
              autoComplete="one-time-code"
              {...register("charFour", { required: true })}
            />
          </div>
          {errors.charOne && (
            <span className="errorMsgStyle">{errors?.charOne?.message}</span>
          )}

          {IsTheEnteredCodeWrong ? (
            <>
              <div className="bg-[#FFE7E7] text-[#FF4040] py-1 px-2 text-sm font-medium rounded-sm">
                کد وارد شده صحیح نمی باشد
              </div>
            </>
          ) : (
            <>
              <div className="bg-[#DDF1FF] text-[#2B5BB7] py-1 px-2 text-sm font-medium rounded-sm">
                ارسال مجدد کد تا 01:59 دیگر
              </div>
            </>
          )}

          {/* If the code is not correct */}
          {IsTheEnteredCodeWrong && (
            <div className="flex items-center gap-2 text-[#2B5BB7]">
              <Image
                alt="timeLoadingBack"
                src="/images/formsImages/timeLoadingBack.svg"
                width={10}
                height={10}
                className="w-6 h-6"
              />
              <span className="text-sm font-bold text-[#2B5BB7]">
                ارسال مجدد کد
              </span>
            </div>
          )}

          <button type="submit" disabled={isSubmitting} className="button">
            ثبت و ادامه
          </button>
        </div>
      </form>
    </FormLayout>
  );
}
