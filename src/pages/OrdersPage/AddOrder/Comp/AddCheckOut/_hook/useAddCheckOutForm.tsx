import { useEffect, useState } from 'react';

import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { useAppDispatch } from 'src/app/store';
import { setAdd_Order_Data_DeliveryData } from 'src/app/store/slices/AddOrderPage/AddOrderSlice';
export interface AddCheckOutFormValues {
	purchase_method: string;
	branch?: string;
	payment_method: string;
	// creditCard?: string;
	// bankTransfer?: string;
	// creditCardOption?: string;
	// creditCardNote?: string;
	status: string;
	delivery_method: string;
	shipping_rate?: string;
	// fixedRate?: string;
	shipping_method: string;
	// aramex?: string;
	// dhlStatus?: string;
	// dhlNote?: string;
	// aramexStatus?: string;
	// aramexNote?: string;
}
const defaultValues: AddCheckOutFormValues = {
	purchase_method: 'branch',
	branch: '',
	payment_method: 'cashOnDelivery',
	status: '',
	// creditCard: '',
	// bankTransfer: '',
	// creditCardOption: '',
	// creditCardNote: '',
	delivery_method: 'pickup',
	shipping_rate: 'free shipping',
	// fixedRate: '',
	shipping_method: 'DHLRate',
	// aramex: '',
	// dhlStatus: '',
	// dhlNote: '',
	// aramexStatus: '',
	// aramexNote: '',
};

export default function useAddCheckOutForm({ onFinish }: { onFinish: () => void }) {
	const dispatch = useAppDispatch();
	const [formValues, setFormValues] = useState<AddCheckOutFormValues>({
		purchase_method: 'branch',
		payment_method: 'cashOnDelivery',
		delivery_method: 'pickup',
		shipping_method: 'DHLRate',
		status: '',
	});

	const createCheckOutSchema = () => {
		const stringValidation = z.string().min(3);
		const optionalStringValidation = (condition: boolean) =>
			condition ? stringValidation : z.optional(stringValidation).or(z.literal(''));

		return {
			purchase_method: stringValidation,
			branch: optionalStringValidation(formValues.purchase_method === 'branch'),
			payment_method: stringValidation,
			// creditCardOption: optionalStringValidation(formValues.payment_method === 'Credit card'),
			// creditCardNote: z.optional(stringValidation).or(z.literal('')),
			delivery_method: stringValidation,
			status: stringValidation,
			shipping_rate: optionalStringValidation(formValues.delivery_method === 'delivery'),
			// fixedRate: optionalStringValidation(formValues.shipping_rate === 'Fixed rate'),
			shipping_method: stringValidation,
			// dhlStatus: optionalStringValidation(formValues.shipping_method === 'DHLRate'),
			// dhlNote: z.optional(stringValidation).or(z.literal('')),
			// aramexStatus: optionalStringValidation(formValues.shipping_method === 'Aramex'),
			// aramexNote: z.optional(stringValidation).or(z.literal('')),
		};
	};

	const handleSubmit = (values: AddCheckOutFormValues) => {
		dispatch(setAdd_Order_Data_DeliveryData(values));
		onFinish();
	};

	const { formStore, onSubmit } = useForm({
		schema: createCheckOutSchema(),
		handleSubmit,
		defaultValues,
	});

	useEffect(() => {
		const subscription = formStore.watch((values) => {
			setFormValues((prevValues) => ({
				...prevValues,
				...values,
			}));
		});
		return () => subscription.unsubscribe();
	}, [formStore]);

	return {
		formStore,
		onSubmit,
		formValues,
	};
}
