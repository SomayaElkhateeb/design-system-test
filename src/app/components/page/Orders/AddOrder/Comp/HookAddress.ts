import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';

export interface orderAddressInterface {
	name?: string;
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
			name: '',
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
		name: z.optional(RequiredAddressData).or(z.literal('')),
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

	// /////////////////////
	const handleSubmit = (values: orderAddressInterface) => {
		console.log('values: ', values);
	};

	const { formStore, onSubmit } = useForm({
		schema: AddOrderAddressSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	// ////////////////////////

	return {
		formStore,
		onSubmit,
	};
}
