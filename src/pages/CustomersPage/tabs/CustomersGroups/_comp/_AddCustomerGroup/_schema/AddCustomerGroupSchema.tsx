import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const Requiredstring = z.string().min(1);

export const AddCustomerGroupPageSchema = {
	id:z.optional(Requiredstring).or(z.literal("")),
	customers: z
		.array(
			z.object({
				id: Requiredstring,
				name: Requiredstring,
			}),
		)
		.min(1),
	code: z.optional(Requiredstring).or(z.literal('')),
	name: Requiredstring,
	description: Requiredstring,
	status: z.boolean().default(false),
};
export type AddCustomerGroupPageSchemaValues = InferredZodSchema<typeof AddCustomerGroupPageSchema>;
