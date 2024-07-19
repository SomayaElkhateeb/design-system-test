import { InferredZodSchema } from "src/app/utils/hooks/form";
import { z } from "zod";
// //////////////////////////////////
const stringValidation = z.string().min(1);
// ////////////////////////////
export const addBrandFormSchema = {
    name_en: stringValidation,
    name_ar: stringValidation,
    description_en: stringValidation,
    description_ar: stringValidation,
    slug: stringValidation,
    slug_ar: stringValidation,
    image: z.instanceof(File),
    status: z.number(),

    products: z
        .array(
            z.object({
                id: stringValidation,
                name: stringValidation,
            }),
        )
        .min(1),
};

export type AddBrandSchemaValues = InferredZodSchema<typeof addBrandFormSchema>;