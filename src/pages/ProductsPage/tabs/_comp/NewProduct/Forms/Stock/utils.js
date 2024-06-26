import { z } from 'zod';

export const productInventoryBranchesSchema = {
	quantity: z.coerce.number().min(0),
	canContinueSellingWhenOutOfStock: z.boolean().default(false),
	branches: z.array(
		z.object({ id: z.string(), name: z.string(), quantity: z.coerce.number().min(0) }),
	),
};

// Define the default values for the schema
export const productInventoryBranchesDefaultValues = {
	quantity: 0,
	canContinueSellingWhenOutOfStock: false,
	branches: [],
};
