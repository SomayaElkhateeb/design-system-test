import { z } from 'zod';

export interface customerFormInterface {
	name: string;
	email: string;
	phone: string;
}

export default function useCustomCustomerForm() {
	const handelDefaultValue = () => {
		return {
			name: '',
			email: '',
			phone: '',
		};
	};

	const customerSchema = {
		name: z.string().min(5, { message: 'Full name is required' }),
		email: z.string().min(1, { message: 'Email is required' }).email(),
		phone: z.string().min(7, { message: 'Phone is required' }),
	};

	return {
		handelDefaultValue,
		customerSchema,
	};
}
