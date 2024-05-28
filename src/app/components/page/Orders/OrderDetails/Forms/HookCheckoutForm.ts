import { z } from 'zod';
import { selectItemsInterface } from '../../../AddCustomer/GeneralInfoCustomerForm';

export interface checkOutInterface {
	purchase: string;
	onLine: boolean;
	branch: selectItemsInterface[];
	payment: boolean;
	delivery: boolean;
	shipping: boolean;
}

export default function useCustomCheckOutForm() {
	const handelDefaultValue = () => {
		return {
			purchase: 'onLine',
			onLine: false,
			branch: [],
			payment: false,
			delivery: false,
			shipping: false,
		};
	};

	const checkOutSchema = (purchase: string) => {
		return {
			purchase: z.string().min(3),
			onLine: purchase === 'onLine' ? z.boolean().default(true) : z.boolean().default(false),
			branch:
				purchase === 'branch'
					? z.array(
							z.object({
								id: z.string().min(1),
								name: z.string().min(1),
							}),
					  )
					: z.optional(
							z.array(
								z.object({
									id: z.string().min(1),
									name: z.string().min(1),
								}),
							),
					  ),

			payment: z.boolean().default(false),
			delivery: z.boolean().default(false),
			shipping: z.boolean().default(false),
		};
	};

	return {
		handelDefaultValue,
		checkOutSchema,
	};
}
