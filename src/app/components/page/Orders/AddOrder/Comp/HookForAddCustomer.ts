import { z } from 'zod';
export interface IAddCustomer {
	fullName: string;
	phone: string;
	email: string;
}

export default function useCustomHookAddCustomer() {
	const handelDefaultValue = () => {
		return {
			fullName: '',
			phone: '',
			email: '',
		};
	};

	const addCustomerSchema = () => {
		return {
			fullName: z
				.string()
				.min(5, { message: 'Full name is required and should be at least 5 characters' }),
			phone: z
				.string()
				.min(7, { message: 'Phone is required and should be at least 7 characters' }),
			email: z.string().min(1, { message: 'Valid email is required' }).email(),
		};
	};

	return {
		handelDefaultValue,
		addCustomerSchema,
	};
}
