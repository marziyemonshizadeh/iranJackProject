"use client";

import Logo from "@/components/module/logo";
import {
  LogInFormSchemaType,
  LoginFormSchema,
} from "@/validation/loginFormValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiLock } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

type LoginProps = {};

export default function Login({}: LoginProps) {
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
    <div
      className="h-screen w-screen flex justify-center items-center bg-no-repeat bg-auto bg-center bg-opacity-75"
      style={{
        backgroundImage: 'url("/images/backgroundImage.png")',
      }}
    >
      <form
        className="w-[388px] min-h-[404px] mx-auto p-8 border border-slate-100 bg-center rounded-[12px] bg-white"
        action="#"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-8">
          <Logo />

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-500">
              <FiUser />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-slate-500">
              <CiLock />
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="رمز عبور"
              {...register("password", { required: true })}
            />
          </div>
          {errors.password && (
            <span className="text-indigo-700 font-normal text-xs">
              {errors.password.message}
            </span>
          )}
          <div className="flex items-center justify-between gap-2 text-sm">
            <div className="text-sm">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-max border border-gray-300 rounded bg-gray-50 "
                {...register("remember")}
              />
              <label
                htmlFor="remember"
                className="text-black dark:text-gray-300 ms-1"
              >
                مرا بخاطر بسپارید
              </label>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <Link
                  href="/forgetPassword"
                  className="text-sm font-medium text-indigo-700 hover:underline dark:text-primary-500"
                >
                  فراموشی رمز عبور؟
                </Link>
              </div>
            </div>
          </div>

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
