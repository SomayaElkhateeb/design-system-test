import { useEffect, useState } from 'react';

import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
export interface AddCheckOutFormValues {
	purchase: string;
	branch?: string;
	payment: string;
	creditCard?: string;
	bankTransfer?: string;
	creditCardOption?: string;
	creditCardNote?: string;
	delivery: string;
	shipping?: string;
	fixedRate?: string;
	method: string;
	aramex?: string;
	dhlStatus?: string;
	dhlNote?: string;
	aramexStatus?: string;
	aramexNote?: string;
}
const defaultValues: AddCheckOutFormValues = {
	purchase: 'In branch',
	branch: '',
	payment: 'Cash',
	creditCard: '',
	bankTransfer: '',
	creditCardOption: '',
	creditCardNote: '',
	delivery: 'Pickup',
	shipping: 'Free shipping',
	fixedRate: '',
	method: 'DHL (main)',
	aramex: '',
	dhlStatus: '',
	dhlNote: '',
	aramexStatus: '',
	aramexNote: '',
};

export default function useAddCheckOutForm({ onFinish }) {
	const [formValues, setFormValues] = useState<AddCheckOutFormValues>({
		purchase: 'In branch',
		payment: 'Cash',
		delivery: 'Pickup',
		method: 'DHL (main)',
	});

	const createCheckOutSchema = () => {
		const stringValidation = z.string().min(3);
		const optionalStringValidation = (condition: boolean) =>
			condition ? stringValidation : z.optional(stringValidation).or(z.literal(''));

		return {
			purchase: stringValidation,
			branch: optionalStringValidation(formValues.purchase === 'In branch'),
			payment: stringValidation,
			creditCardOption: optionalStringValidation(formValues.payment === 'Credit card'),
			creditCardNote: z.optional(stringValidation).or(z.literal('')),
			delivery: stringValidation,
			shipping: optionalStringValidation(formValues.delivery === 'Shipping'),
			fixedRate: optionalStringValidation(formValues.shipping === 'Fixed rate'),
			method: stringValidation,
			dhlStatus: optionalStringValidation(formValues.method === 'DHL (main)'),
			dhlNote: z.optional(stringValidation).or(z.literal('')),
			aramexStatus: optionalStringValidation(formValues.method === 'Aramex'),
			aramexNote: z.optional(stringValidation).or(z.literal('')),
		};
	};

	const handleSubmit = (values: AddCheckOutFormValues) => {
		console.log(values);
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
