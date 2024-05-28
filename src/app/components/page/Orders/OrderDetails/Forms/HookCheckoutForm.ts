import { z } from 'zod';
import { selectItemsInterface } from '../../../AddCustomer/GeneralInfoCustomerForm';

export interface checkOutInterface {
	purchase: string;
	onLine: boolean;
	branch: selectItemsInterface[];
	payment: string;
	delivery: string;
	shipping: string;
}

export default function useCustomCheckOutForm() {
	const handelDefaultValue = () => {
		return {
			purchase: 'onLine',
			onLine: false,
			branch: [],
			payment: "Cash",
			delivery: "Shipping",
			shipping: "DHL (main)",
		};
	};

	const checkOutSchema = (purchase: string) => {
		const stringValidation = z.string().min(3)
		return {
			purchase: stringValidation,
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

			payment: stringValidation,
			delivery: stringValidation,
			shipping: stringValidation,
		};
	};

	return {
		handelDefaultValue,
		checkOutSchema,
	};
}
