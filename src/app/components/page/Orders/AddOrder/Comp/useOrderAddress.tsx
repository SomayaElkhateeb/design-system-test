import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';

export interface AddAddressInterface {
	customer_id?:string
	giftName?: string;
	name?: string;
	country?: string;
	city?: string;
	area?: string;
	street?: string;
	building: string;
	landmark?: string;
	phone: string;
	search?: string;
}

export const getDefaultValues = (): AddAddressInterface => ({
	customer_id:"",
	giftName: '',
	name: '',
	country: '',
	city: '',
	area: '',
	street: '',
	building: '',
	landmark: '',
	phone: '',
	search: '',
});

const requiredFieldSchema = z.string().min(1, { message: 'This field is required' });

const getConditionalSchema = (isRequired?: boolean) =>
	isRequired ? requiredFieldSchema : z.string().optional();
const getConditionalTwoVariablesSchema = (isRequired?: boolean, AddOrder?: boolean) =>
	isRequired && !AddOrder ? requiredFieldSchema : z.string().optional();

export const createAddressSchema = (
	sendGift?: boolean,
	selectedOption?: string,
	isName?: boolean,
	AddOrder?: boolean,
) => {
	const isManualEntry = selectedOption === 'Add manually';
	return {
		name: getConditionalSchema(isName),
		country: getConditionalSchema(isManualEntry),
		city: getConditionalSchema(isManualEntry),
		area: getConditionalSchema(isManualEntry),
		street: getConditionalSchema(isManualEntry),
		building: requiredFieldSchema,
		landmark: getConditionalSchema(isManualEntry),
		phone: z.string().min(7, { message: 'Phone number must be at least 7 characters long' }),
		giftName: getConditionalSchema(sendGift),
		search: getConditionalTwoVariablesSchema(sendGift, AddOrder),
	};
};
interface useOrderAddressProps {
	sendGift?: boolean;
	selectedOption?: string;
	isName?: boolean;
	onNext?: () => void;
}
export default function useOrderAddress({
	sendGift,
	selectedOption,
	isName,
	onNext,
}: useOrderAddressProps) {
	const handleSubmit = (values: AddAddressInterface) => {
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
