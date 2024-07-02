import { z } from "zod";

export const SendToTheWarehouseFormSchema = z.object({
  cutTitle: z.string().min(1, { message: " فیلد اجباری می باشد" }),
  CuttingCode: z.string().min(1, { message: " فیلد اجباری می باشد" }),
  projectCode: z.string().min(1, { message: " فیلد اجباری می باشد" }),
  color: z.string().min(1, { message: " فیلد اجباری می باشد" }),
  colorCode: z.string().min(1, { message: " فیلد اجباری می باشد" }),
  qualityCode: z.string().min(1, { message: " فیلد اجباری می باشد" }),
  numberOfHeights: z.string().min(1, { message: " فیلد اجباری می باشد" }),
});

export type SendToTheWarehouseFormSchemaType = z.infer<
  typeof SendToTheWarehouseFormSchema
>;
