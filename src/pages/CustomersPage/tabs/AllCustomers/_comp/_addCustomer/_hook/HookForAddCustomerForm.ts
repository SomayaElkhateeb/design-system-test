

import { InferredZodSchema } from 'src/app/utils/hooks/form';
import { z } from 'zod';

const RequiredAddressData = z.string().min(1);

export const AddCustomerPageSchema = {
	id: RequiredAddressData.optional().or(z.literal("")),
	gender: RequiredAddressData,

	first_name: RequiredAddressData,
	last_name: RequiredAddressData,
	email: RequiredAddressData.email(),
	phone: z.string().min(7),

	customer_group_id: RequiredAddressData,
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
			id: "",
			gender: 'Male',
			first_name: '',
			last_name: '',
			email: '',
			phone: '',
			customer_group_id: "",
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
