import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';

export interface AddAddressInterface {
	giftName?: string;
	name?: string;
	countryName?: string;
	cityName?: string;
	area?: string;
	street?: string;
	building: string;
	landmark?: string;
	phoneNumber: string;
	search?: string;
}

export const getDefaultValues = (): AddAddressInterface => ({
	giftName: '',
	name: '',
	countryName: '',
	cityName: '',
	area: '',
	street: '',
	building: '',
	landmark: '',
	phoneNumber: '',
	search: '',
});

const requiredFieldSchema = z.string().min(1, { message: 'This field is required' });

const getConditionalSchema = (isRequired?: boolean) =>
	isRequired ? requiredFieldSchema : z.string().optional();

export const createAddressSchema = (
	sendGift?: boolean,
	selectedOption?: string,
	isName?: boolean,
) => {
	const isManualEntry = selectedOption === 'Add manually';
	return {
		name: getConditionalSchema(isName),
		countryName: getConditionalSchema(isManualEntry),
		cityName: getConditionalSchema(isManualEntry),
		area: getConditionalSchema(isManualEntry),
		street: getConditionalSchema(isManualEntry),
		building: requiredFieldSchema,
		landmark: getConditionalSchema(isManualEntry),
		phoneNumber: z.string().min(7, { message: 'Phone number must be at least 7 characters long' }),
		giftName: getConditionalSchema(sendGift),
		search: getConditionalSchema(sendGift),
	};
};
export default function useOrderAddress(
	sendGift?: boolean,
	selectedOption?: string,
	isName?: boolean,
	onNext?: () => void,
) {
	const handleSubmit = (values: AddAddressInterface) => {
		console.log('values: ', values);
		if (onNext) {
			onNext();
		}
	};

	const { formStore, onSubmit } = useForm({
		schema: createAddressSchema(sendGift, selectedOption, isName),
		handleSubmit: handleSubmit,
		defaultValues: getDefaultValues(),
	});

	return {
		formStore,
		onSubmit,
	};
}
