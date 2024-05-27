import { z } from 'zod';

export interface orderFormInterface {
	status: string;
	comment?: string;
	notifyCustomer: boolean;
}

export default function useCustomOrderForm() {
	const handelDefaultValue = () => {
		return {
			status: '',
			comment: '',
			notifyCustomer: false,
		};
	};

	const orderSchema = {
		status: z.string().min(5, { message: 'Please choose order status is required' }),
		comment: z.string().optional(),
		notifyCustomer: z.boolean().default(false),
	};

	return {
		handelDefaultValue,
		orderSchema,
	};
}
