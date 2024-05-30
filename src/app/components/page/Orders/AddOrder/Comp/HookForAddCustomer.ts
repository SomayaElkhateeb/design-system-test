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

	// /////////////////////////////
	const RequireData = z.string().min(5);
	const addCustomerSchema = () => {
		return {
			fullName: RequireData,
			phone: RequireData,
			email: RequireData.email(),
		};
	};

	return {
		handelDefaultValue,
		addCustomerSchema,
	};
}
