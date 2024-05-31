import { z } from 'zod';

const Requiredstring = z.string().min(1);

export const AddCustomerGroupPageSchema = {
	Customers: z
		.array(
			z.object({
				id: Requiredstring,
				name: Requiredstring,
			}),
		)
		.min(1),
	groupName: Requiredstring,
	description: Requiredstring,
	active: z.boolean().default(false),
};
