"use client";

import Logo from "@/components/module/logo";
import {
  ForgetPasswordFormSchema,
  ForgetPasswordFormSchemaType,
} from "@/validation/forgetPasswordFormValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

export default function ForgetPassword() {
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
    <div
      className="h-screen w-screen flex justify-center items-center bg-no-repeat bg-auto bg-center bg-opacity-75"
      style={{
        backgroundImage: 'url("/images/backgroundImage.png")',
      }}
    >
      <form
        className="w-[388px] max-h-[404px] mx-auto p-8 border border-slate-100 bg-center rounded-[12px] bg-white"
        action="#"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4">
          <Logo />
          <div className="flex justify-between">
            <p>بازگشت</p>
            <Link href="/">
              <FaArrowLeft />
            </Link>
          </div>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-500">
              <FiUser />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="شماره موبایل یا ایمیل"
              {...register("identifier", { required: true })}
            />
          </div>
          {errors.identifier && (
            <span className="text-indigo-700 font-normal text-xs">
              {(errors.identifier as any)?.required?.message ||
                errors?.identifier?.message}
            </span>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-slate-50 bg-indigo-700 p-3 rounded-md"
          >
            ورود
          </button>
        </div>
      </form>
    </div>
  );
}
