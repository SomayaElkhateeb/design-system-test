import { z } from 'zod';

export interface AddAddressInterface {
	countryName?: string;
	cityName?: string;
	area?: string;
	street?: string;
	building: string;
	landmark?: string;
	PhoneNumber: string;
	giftName?: string;
}

export default function useCustomHookAddCustomerAddressForm(
	sendGift: boolean,
	selectedOption: string,
) {
	const handelDefaultValue = () => {
		return {
			countryName: '',
			cityName: '',
			area: '',
			street: '',
			building: '',
			landmark: '',
			PhoneNumber: '',
			giftName: '',
		};
	};

	const RequiredAddressData = z.string().min(1);
	const handel_RequiredAddressData = () => {
		return selectedOption !== 'Add manually'
			? z.optional(RequiredAddressData).or(z.literal(''))
			: RequiredAddressData;
	};
	const handel_Gift_Input = () => {
		return !sendGift ? z.optional(RequiredAddressData).or(z.literal('')) : RequiredAddressData;
	};
	const AddCustomerAddressSchema = {
		branchNameAr: RequiredAddressData,
		countryName: handel_RequiredAddressData(),
		cityName: handel_RequiredAddressData(),
		area: handel_RequiredAddressData(),
		street: handel_RequiredAddressData(),
		building: RequiredAddressData,
		landmark: handel_RequiredAddressData(),
		PhoneNumber: z.string().min(7),
		giftName: handel_Gift_Input(),
	};
	return {
		AddCustomerAddressSchema,
		handelDefaultValue,
	};
}
