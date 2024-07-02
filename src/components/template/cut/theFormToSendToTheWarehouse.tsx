"use client";

import {
  SendToTheWarehouseFormSchema,
  SendToTheWarehouseFormSchemaType,
} from "@/validation/sendToTheWarehouseFormValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import WarningMessage from "./warningMessage";

function TheFormToSendToTheWarehouse() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SendToTheWarehouseFormSchemaType>({
    resolver: zodResolver(SendToTheWarehouseFormSchema),
  });
  const onSubmit: SubmitHandler<SendToTheWarehouseFormSchemaType> = async (
    data: SendToTheWarehouseFormSchemaType
  ) => {
    console.log("data=", data);
    reset();
  };
  console.log("data=", errors);
  return (
    <>
      <WarningMessage />
      <form className=" my-2" action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6">
          <section>
            <div className="relative border border-[#D3D3D3] rounded-lg">
              <input
                type="text"
                id="cutTitle"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#F5F5F5] rounded-lg outline-none appearance-none focus:ring-1 focus:border-[#3E2DE1] peer"
                placeholder=" "
                {...register("cutTitle", { required: true })}
              />
              <label
                htmlFor="cutTitle"
                className="absolute text-sm text-gray-500 border-3 border-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F5F5F5] px-2 peer-focus:px-2 peer-focus:text-[#3E2DE1] peer-focus:bg-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                عنوان برش
              </label>
            </div>
            {errors.cutTitle && (
              <span className="errorMsgStyle">
                {(errors.cutTitle as any)?.required?.message ||
                  errors?.cutTitle?.message}
              </span>
            )}
          </section>

          <section>
            <div className="relative border border-[#D3D3D3] rounded-lg">
              <input
                type="text"
                id="CuttingCode"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#F5F5F5] rounded-lg border-3 border-indigo-700 outline-none appearance-none focus:ring-1 focus:border-blue-600 peer"
                placeholder=" "
                {...register("CuttingCode", { required: true })}
              />
              <label
                htmlFor="CuttingCode"
                className="absolute text-sm text-gray-500 border-3 border-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F5F5F5] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:bg-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                کد برش
              </label>
            </div>
            {errors.CuttingCode && (
              <span className="errorMsgStyle">
                {(errors.CuttingCode as any)?.required?.message ||
                  errors?.CuttingCode?.message}
              </span>
            )}
          </section>

          <section>
            <div className="relative border border-[#D3D3D3] rounded-lg">
              <input
                type="text"
                id="projectCode"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#F5F5F5] rounded-lg border-3 border-indigo-700 outline-none appearance-none focus:ring-1 focus:border-blue-600 peer"
                placeholder=" "
                {...register("projectCode", { required: true })}
              />
              <label
                htmlFor="projectCode"
                className="absolute text-sm text-gray-500 border-3 border-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F5F5F5] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:bg-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                کد پروژه
              </label>
            </div>
            {errors.projectCode && (
              <span className="errorMsgStyle">
                {(errors.projectCode as any)?.required?.message ||
                  errors?.projectCode?.message}
              </span>
            )}
          </section>

          <section>
            <div className="relative border border-[#D3D3D3] rounded-lg">
              <input
                type="text"
                id="color"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#F5F5F5] rounded-lg border-3 border-indigo-700 outline-none appearance-none focus:ring-1 focus:border-blue-600 peer"
                placeholder=" "
                {...register("color", { required: true })}
              />
              <label
                htmlFor="color"
                className="absolute text-sm text-gray-500 border-3 border-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F5F5F5] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:bg-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                رنگ
              </label>
            </div>
            {errors.color && (
              <span className="errorMsgStyle">
                {(errors.color as any)?.required?.message ||
                  errors?.color?.message}
              </span>
            )}
          </section>

          <section>
            <div className="relative border border-[#D3D3D3] rounded-lg">
              <input
                type="text"
                id="colorCode"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#F5F5F5] rounded-lg border-3 border-indigo-700 outline-none appearance-none focus:ring-1 focus:border-blue-600 peer"
                placeholder=" "
                {...register("colorCode", { required: true })}
              />
              <label
                htmlFor="colorCode"
                className="absolute text-sm text-gray-500 border-3 border-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F5F5F5] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:bg-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                کد رنگ
              </label>
            </div>
            {errors.colorCode && (
              <span className="errorMsgStyle">
                {(errors.colorCode as any)?.required?.message ||
                  errors?.colorCode?.message}
              </span>
            )}
          </section>

          <section>
            <div className="relative border border-[#D3D3D3] rounded-lg">
              <input
                type="text"
                id="qualityCode"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#F5F5F5] rounded-lg border-3 border-indigo-700 outline-none appearance-none focus:ring-1 focus:border-blue-600 peer"
                placeholder=" "
                {...register("qualityCode", { required: true })}
              />
              <label
                htmlFor="qualityCode"
                className="absolute text-sm text-gray-500 border-3 border-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F5F5F5] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:bg-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                کد کالیته
              </label>
            </div>
            {errors.qualityCode && (
              <span className="errorMsgStyle">
                {(errors.qualityCode as any)?.required?.message ||
                  errors?.qualityCode?.message}
              </span>
            )}
          </section>

          <section>
            <div className="relative border border-[#D3D3D3] rounded-lg">
              <input
                type="text"
                id="numberOfHeights"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-[#F5F5F5] rounded-lg border-3 border-indigo-700 outline-none appearance-none focus:ring-1 focus:border-blue-600 peer"
                placeholder=" "
                {...register("numberOfHeights", { required: true })}
              />
              <label
                htmlFor="numberOfHeights"
                className="absolute text-sm text-gray-500 border-3 border-black dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#F5F5F5] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:bg-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                تعداد قد
              </label>
            </div>
            {errors.numberOfHeights && (
              <span className="errorMsgStyle">
                {(errors.numberOfHeights as any)?.required?.message ||
                  errors?.numberOfHeights?.message}
              </span>
            )}
          </section>
        </div>

        <div className="flex justify-end gap-3 my-6">
          <button
            type="submit"
            className="bg-transparent w-[118px] h-[32px] text-sm font-medium float-end text-[#333333] p-1 border-2 border-[#EEEEEE] hover:border-[#3E2DE1] focus:border-[#3E2DE1] hover:text-[#3E2DE1] focus:text-[#3E2DE1] focus:bg-[#EEECFF] rounded-lg"
          >
            ارسال به انبار
          </button>
          <button
            type="submit"
            className="bg-[#3E2DE1] hover:bg-[#1B0E9D] text-slate-50 w-[118px] h-[32px] text-sm font-medium float-end p-1  rounded-lg"
          >
            ذخیره
          </button>
        </div>
      </form>
    </>
  );
}

export default TheFormToSendToTheWarehouse;
