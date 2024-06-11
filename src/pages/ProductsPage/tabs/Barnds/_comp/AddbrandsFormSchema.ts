import { InferredZodSchema } from "src/app/utils/hooks/form";
import { z } from "zod";
// //////////////////////////////////
const stringValidation = z.string().min(1);
// ////////////////////////////
export const addBrandFormSchema = {
    brandNameEn: stringValidation,
    brandNameAr: stringValidation,
    brandDescribtionEn: stringValidation,
    brandDescribtionAr: stringValidation,
    brandLinkEn: z.string().url(),
    brandLinkAr: z.string().url(),
    image: z.instanceof(File),
    available: z.boolean(),
    products: z
        .array(
            z.object({
                id: stringValidation,
                name: stringValidation,
            }),
        )
        .nonempty(),
};

export type AddBrandSchemaValues = InferredZodSchema<typeof addBrandFormSchema>;