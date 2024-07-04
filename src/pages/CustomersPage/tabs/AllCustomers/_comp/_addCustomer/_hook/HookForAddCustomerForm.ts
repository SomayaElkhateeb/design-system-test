

import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const RequiredAddressData = z.string().min(1);

export const AddCustomerPageSchema = {
	gender: RequiredAddressData,

	first_name: RequiredAddressData,
	last_name: RequiredAddressData,
	email: z.string().min(1).email(),
	phone: z.string().min(7),

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

export default function useCustomHookAddCustomerForm() {
	const handelDefaultValue = () => {
		return {
			gender: 'Male',
			first_name: '',
			last_name: '',
			email: '',
			phone: '',
			groupMeta: [],
			fullNameAddress: '',
			countryName: '',
			cityName: '',
			area: '',
			street: '',
			building: '',
			landmark: '',
			AddressPhoneNumber: '',
			emailSubescribe: false,
		};
	};

	return {
		handelDefaultValue,
	};
}
