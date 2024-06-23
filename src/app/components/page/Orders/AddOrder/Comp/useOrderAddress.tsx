import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';

export interface addAddressInterface {
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

export const handelAddresseDefaultValue = () => {
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


const RequiredAddressData = z.string().min(1);

const handel_RequiredAddressData = (selectedOption?: string) => {
	return selectedOption !== 'Add manually'
		? z.optional(RequiredAddressData).or(z.literal(''))
		: RequiredAddressData;
};
const handel_Gift_Input = (sendGift?: boolean) => {
	return !sendGift ? z.optional(RequiredAddressData).or(z.literal('')) : RequiredAddressData;
};

const handel_name = (isName?: boolean) => {
	return !isName ? z.optional(RequiredAddressData).or(z.literal('')) : RequiredAddressData;
};
export const AddAddressSchema = (sendGift?: boolean, selectedOption?: string, isName?: boolean) => {
	return {
		name: handel_name(isName),
		countryName: handel_RequiredAddressData(selectedOption),
		cityName: handel_RequiredAddressData(selectedOption),
		area: handel_RequiredAddressData(selectedOption),
		street: handel_RequiredAddressData(selectedOption),
		building: RequiredAddressData,
		landmark: handel_RequiredAddressData(selectedOption),
		PhoneNumber: z.string().min(7),
		giftName: handel_Gift_Input(sendGift),
		search: handel_Gift_Input(sendGift),
	};
};
export default function useOrderAddress(
	sendGift?: boolean,
	selectedOption?: string,
	isName?: boolean,
) {
	const handleSubmit = (values: addAddressInterface) => {
		console.log('values: ', values);
	};
	const { formStore, onSubmit } = useForm({
		schema: AddAddressSchema(sendGift, selectedOption, isName),
		handleSubmit: handleSubmit,
		defaultValues: handelAddresseDefaultValue(),
	});

	return {
		formStore,
		onSubmit,
	};
}
