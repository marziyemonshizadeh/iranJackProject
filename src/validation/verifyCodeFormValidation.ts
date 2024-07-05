import { z } from "zod";

export const VerifyCodeFormValidation = z.object({
  charOne: z.string().min(1, { message: " فیلد اجباری می باشد" }),
  charTwo: z.string().min(1, { message: " فیلد اجباری می باشد" }),
  charThree: z.string().min(1, { message: " فیلد اجباری می باشد" }),
  charFour: z.string().min(1, { message: " فیلد اجباری می باشد" }),
});

export type VerifyCodeFormValidationType = z.infer<
  typeof VerifyCodeFormValidation
>;
