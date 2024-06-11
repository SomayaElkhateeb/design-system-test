import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const RequiredAddressData = z.string().min(1);

export const AddCustomerPageSchema = {
	humanType: RequiredAddressData,
	fullName: RequiredAddressData,
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
	fullNameAddress: RequiredAddressData,
	countryName: RequiredAddressData,
	cityName: RequiredAddressData,
	area: RequiredAddressData,
	street: RequiredAddressData,
	building: RequiredAddressData,
	landmark: RequiredAddressData,
	AddressPhoneNumber: z.string().min(7),
	emailSubescribe: z.boolean(),
};
export type AddCustomerPageSchemaValues = InferredZodSchema<typeof AddCustomerPageSchema>;
