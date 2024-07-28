import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { selectItemsInterface } from 'src/pages/PagesPage/_comp/PagesSection/_comp/AddPage/_comp/ContentSeoPage';
import { InferredZodSchema } from 'src/app/utils/hooks/form';

export interface PaymentFormProps {
	formStore: UseFormReturn<BankTransferTypes>;
}
export interface BankTransferTypes {
	payment_method_id: number;
	account_number: number;
	account_name: string;
	bank_name: string;
	iban: number;
	price_more_than: number;
	items_more_than: number;
	apply_with: string;
	active: number;
	main_method: number;
	show_in_footer: number;
	additional_data: string;
	specificProducts?: selectItemsInterface[];
	specificCustomers?: selectItemsInterface[];
}

export default function useBankTransfer(apply_with: string) {
	const stringZod = z.string().min(1);
	const numberZod = z.coerce.number().positive();

	const AddMerchantPaymentMethodSchema = {
		payment_method_id: numberZod,
		account_number: numberZod,
		account_name: stringZod,
		bank_name: stringZod,
		iban: numberZod,
		price_more_than: numberZod,
		items_more_than: numberZod,
		apply_with: stringZod,
		active: numberZod,
		main_method: numberZod,
		show_in_footer: numberZod,
		additional_data: stringZod,
		////////////////////////////////////////////////////////////
		specificProducts:
			apply_with === 'Specific products'
				? z
					.array(
						z.object({
							id: stringZod,
							name: stringZod,
						}),
					)
					.min(1)
				: z.optional(
					z.array(
						z.object({
							id: stringZod,
							name: stringZod,
						}),
					),
				),
		specificCustomers:
			apply_with === 'Specific customers'
				? z
					.array(
						z.object({
							id: stringZod,
							name: stringZod,
						}),
					)
					.min(1)
				: z.optional(
					z.array(
						z.object({
							id: stringZod,
							name: stringZod,
						}),
					),
				),
	};
	const handelDefaultValue = (): BankTransferTypes => {
		return {
			payment_method_id: 0,
			account_number: 0,
			account_name: '',
			bank_name: '',
			iban: 0,
			price_more_than: 0,
			items_more_than: 0,
			apply_with: 'All',
			active: 0,
			main_method: 0,
			show_in_footer: 0,
			additional_data: '',
			specificProducts: [],
			specificCustomers: [],
		};
	};

	return { AddMerchantPaymentMethodSchema , bankTransferSchema, handelDefaultValue };
}

export type AddMerchantPaymentMethodSchemaValues = InferredZodSchema<typeof AddMerchantPaymentMethodSchema>;

