import { z } from 'zod';

export interface orderFormInterface {
	status: string;
	comment?: string;
}

export default function useCustomOrderForm() {
	const handelDefaultValue = () => {
		return {
			status: '',
			comment: '',
		};
	};

	const orderSchema = {
		status: z.string().min(5, { message: 'Please choose order status is required' }),
		comment: z.string().optional(),
	};

	return {
		handelDefaultValue,
		orderSchema,
	};
}
