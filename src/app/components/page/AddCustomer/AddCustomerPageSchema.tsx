import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

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
	// fullNameAddresse: RequiredAddresseData,
	// countryName: RequiredAddresseData,
	// cityName: RequiredAddresseData,
	// area: RequiredAddresseData,
	// street: RequiredAddresseData,
	// building: RequiredAddresseData,
	// landmark: RequiredAddresseData,
	// addressePhoneNumber: z.string().min(7),
	emailSubescribe: z.boolean(),
};
export type AddCustomerPageSchemaValues = InferredZodSchema<typeof AddCustomerPageSchema>;
