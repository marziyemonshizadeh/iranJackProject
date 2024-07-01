"use client";

import FormLayout from "@/components/layout/formLayout";
import Logo from "@/components/module/logo";
import {
  ForgetPasswordFormSchema,
  ForgetPasswordFormSchemaType,
} from "@/validation/forgetPasswordFormValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

export default function ForgetPasswordForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgetPasswordFormSchemaType>({
    resolver: zodResolver(ForgetPasswordFormSchema),
  });
  const onSubmit: SubmitHandler<ForgetPasswordFormSchemaType> = async (
    data: ForgetPasswordFormSchemaType
  ) => {
    console.log("data=", data);
    reset();
  };
  console.log(errors);

  return (
    <FormLayout>
      <form
        className="w-[388px] max-h-[404px] mx-auto p-8 border border-slate-100 bg-center rounded-[12px] bg-white"
        action="#"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4">
          <Logo />
          <div className="flex justify-between">
            <p className="font-bold">بازگشت</p>
            <Link href="/">
              <Image
                alt=""
                src="/images/ArrowLeft.svg"
                width={10}
                height={10}
                className="h-6 w-6 font-normal"
              />
            </Link>
          </div>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-500">
              <Image
                alt=""
                src="/images/Profile.svg"
                width={10}
                height={10}
                className="w-6 h-6"
              />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-[#FEFEFE] text-[16px] font-normal border max-w-[324px] h-[48px] border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 py-2 px-3 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="شماره موبایل یا ایمیل"
              {...register("identifier", { required: true })}
            />
          </div>
          {errors.identifier && (
            <span className="errorMsgStyle">
              {(errors.identifier as any)?.required?.message ||
                errors?.identifier?.message}
            </span>
          )}
          <button type="submit" disabled={isSubmitting} className="button">
            ورود
          </button>
        </div>
      </form>
    </FormLayout>
  );
}
