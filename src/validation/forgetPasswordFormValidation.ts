import { z } from "zod";

export const ForgetPasswordFormSchema = z.object({
  identifier: z
    .string()
    .email("ایمیل یا شماره موبایل شما معتبر نمی باشد")
    .or(
      z
        .string()
        .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g, {
          message: "ایمیل یا شماره موبایل شما معتبر نمی باشد",
        })
    )
    .superRefine((val, ctx) => {
      if (val === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "فیلد اجباری می باشد لطفا ایمیل یا شماره موبایل خو را وارد کنید",
          path: ["required"],
        });
      }
    }),
});
export type ForgetPasswordFormSchemaType = z.infer<
  typeof ForgetPasswordFormSchema
>;
