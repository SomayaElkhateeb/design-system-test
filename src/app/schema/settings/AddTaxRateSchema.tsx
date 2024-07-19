import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const stringZod = z.string().min(1);

export const AddTaxRateSchema = {
	identifier: stringZod,
    is_zip: stringZod.optional(),
    zip_code: stringZod.optional(),
    zip_from: stringZod,
	zip_to:stringZod,
    country: stringZod, // country code
    tax_rate: stringZod,
};
export type AddTaxRateSchemaValues = InferredZodSchema<typeof AddTaxRateSchema>;
