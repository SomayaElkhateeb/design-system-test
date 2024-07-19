import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const stringZod = z.string().min(1);

export const AddTaxCategorySchema = {
	code: stringZod,
    name: stringZod,
    description: stringZod.optional(),
    taxrates: z.array(stringZod),
};
export type AddTaxCategorySchemaValues = InferredZodSchema<typeof AddTaxCategorySchema>;
