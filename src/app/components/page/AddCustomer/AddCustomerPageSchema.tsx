import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';
import { AddAddressSchema } from '../../page/Orders/AddOrder/Comp/HookAddress';
const RequiredAddresseData = z.string().min(1);

export const AddCustomerPageSchema = {
	humanType: RequiredAddresseData,
	fullName: RequiredAddresseData,
	email: z.string().min(1).email(),
	PhoneNumber: z.string().min(7),
	groupMeta: z
		.array(
			z.object({
				id: z.string().min(1),
				name: z.string().min(1),
			}),
		)
		.min(1),
	emailSubescribe: z.boolean(),
	...AddAddressSchema(sendGift, selectedOption),
};
export type AddCustomerPageSchemaValues = InferredZodSchema<typeof AddCustomerPageSchema>;
