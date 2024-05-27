// import { selectItemsInterface } from 'src/app/components/page/AddCustomer/GeneralInfoCustomerForm';
import { z } from 'zod';

export interface IAddOrder {
	selectCustomer: string;
}

export default function useCustomHookAddOrder() {
	const handelDefaultValue = () => {
		return {
			selectCustomer: '',
		};
	};

	const addOrderSchema = () => {
		return {
			selectCustomer: z.string().min(1, { message: 'Select customer is required' }),
		};
	};

	return {
		handelDefaultValue,
		addOrderSchema,
	};
}
