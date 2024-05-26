import { z } from 'zod';

export interface OrdercustomerFormInterface {
	name: string;
	email: string;
	phone: string;
}

export default function useOrderCustomerForm() {
	const handelDefaultValue = () => {
		return {
			name: '',
			email: '',
			phone: '',
		};
	};

	const orderCustomerSchema = {
		name: z.string().min(5, { message: 'Full name is required' }),
		email: z.string().min(1, { message: 'Email is required' }).email(),
		phone: z.string().min(7, { message: 'Phone is required' }),
	};

	return {
		handelDefaultValue,
		orderCustomerSchema,
	};
}
