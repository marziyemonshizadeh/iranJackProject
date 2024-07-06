"use client";

import FormLayout from "@/components/layout/formLayout";
import Logo from "@/components/module/logo";
import {
  LogInFormSchemaType,
  LoginFormSchema,
} from "@/validation/loginFormValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LogInFormSchemaType>({ resolver: zodResolver(LoginFormSchema) });
  const onSubmit: SubmitHandler<LogInFormSchemaType> = async (
    data: LogInFormSchemaType
  ) => {
    console.log("data=", data);
    reset();
  };
  return (
    <FormLayout>
      <form
        className="w-[388px] min-h-[404px] mx-auto p-8 border border-slate-100 bg-center rounded-[12px] shadow-sm shadow-[#E8E8E8] bg-[#FEFEFE]"
        action="#"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-8">
          <Logo />

          <div className="relative text-[#888888]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-[#888888]">
              <Image
                alt="Profile"
                src="/images/formsImages/Profile.svg"
                width={10}
                height={10}
                className="w-6 h-6"
              />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-[#FEFEFE] text-[16px] font-normal border max-w-[324px] h-[48px] border-gray-300 text-gray-900  rounded-lg focus:ring-primary focus:border-primary block w-full ps-10 py-2 px-3 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
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

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-[#888888]">
              <Image
                alt="Lock"
                src="/images/formsImages/Lock.svg"
                width={10}
                height={10}
                className="w-6 h-6"
              />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-[#FEFEFE] text-[16px] font-normal border max-w-[324px] h-[48px] border-gray-300 text-gray-900  rounded-lg focus:ring-primary focus:border-primary block w-full ps-10 py-2 px-3 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              placeholder="رمز عبور"
              {...register("password", { required: true })}
            />
          </div>
          {errors.password && (
            <span className="errorMsgStyle">{errors.password.message}</span>
          )}
          <div className="flex items-center justify-between gap-2 text-sm">
            <div className="flex items-center">
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center p-0 rounded-full cursor-pointer"
                  htmlFor="horizontal-list-svelte"
                >
                  <input
                    id="horizontal-list-svelte"
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:border-primary hover:before:opacity-0"
                    {...register("remember")}
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
              <label
                htmlFor="remember"
                className="text-black font-bold dark:text-gray-300 ms-1"
              >
                مرا به خاطر بسپارید
              </label>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <Link
                  href="/forgetPassword"
                  className="text-sm font-medium text-primary dark:text-primary-500"
                >
                  فراموشی رمز عبور
                </Link>
              </div>
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="button">
            ورود
          </button>
        </div>
      </form>
    </FormLayout>
  );
}
