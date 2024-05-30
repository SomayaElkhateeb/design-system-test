import { z } from 'zod';

export interface orderAddressInterface {
	countryName?: string;
	cityName?: string;
	area?: string;
	street?: string;
	building: string;
	landmark?: string;
	PhoneNumber: string;
	giftName?: string;
	search?: string;
}
// ////////////////////////
export default function useCustomHookAddOrderAddressForm(
	sendGift: boolean,
	selectedOption: string,
) {
	// ////////////////////////
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
			search: '',
		};
	};
	// //////////////////////

	const RequiredAddressData = z.string().min(1);
	const handel_RequiredAddressData = () => {
		return selectedOption !== 'Add manually'
			? z.optional(RequiredAddressData).or(z.literal(''))
			: RequiredAddressData;
	};
	const handel_Gift_Input = () => {
		return !sendGift ? z.optional(RequiredAddressData).or(z.literal('')) : RequiredAddressData;
	};
	const AddOrderAddressSchema = {
		branchNameAr: RequiredAddressData,
		countryName: handel_RequiredAddressData(),
		cityName: handel_RequiredAddressData(),
		area: handel_RequiredAddressData(),
		street: handel_RequiredAddressData(),
		building: RequiredAddressData,
		landmark: handel_RequiredAddressData(),
		PhoneNumber: z.string().min(7),
		giftName: handel_Gift_Input(),
		search: handel_Gift_Input(),
	};
	return {
		AddOrderAddressSchema,
		handelDefaultValue,
	};
}
