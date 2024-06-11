import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';
import { selectItemsInterface } from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/GeneralInfoCustomerForm';

export interface PaymentFormProps {
	formStore: UseFormReturn<BankTransferTypes>;
}
export interface BankTransferTypes {
	accountNumber: number;
	instructions: string;
	accountName: string;
	orderItems: number;
	applyWith: string;
	bankName: string;
	price: number;
	iban: string;
	specificProducts?: selectItemsInterface[];
	specificCustomers?: selectItemsInterface[];
}

export default function useBankTransfer(applyWith: string) {
	//  hooks
	const { t } = useTranslation();
	const bankTransferSchema = {
		accountNumber: z.coerce
			.number()
			.positive({ message: t('Account number must be a positive number') }),
		orderItems: z.coerce
			.number()
			.positive({ message: t('Order items number must be a positive number') }),
		price: z.coerce.number().positive({ message: t('Price number must be a positive number') }),
		instructions: z.string().min(1, { message: t('Instructions cannot be empty') }),
		accountName: z.string().min(1, { message: t('Account name cannot be empty') }),
		applyWith: z.string().min(1, { message: t('Apply with cannot be empty') }),
		bankName: z.string().min(1, { message: t('Bank name cannot be empty') }),
		iban: z.string().min(1, { message: t('IBAN cannot be empty') }),
		specificProducts:
			applyWith === 'Specific products'
				? z
						.array(
							z.object({
								id: z.string().min(1),
								name: z.string().min(1),
							}),
						)
						.min(1)
				: z.optional(
						z.array(
							z.object({
								id: z.string().min(1),
								name: z.string().min(1),
							}),
						),
				  ),
		specificCustomers:
			applyWith === 'Specific customers'
				? z
						.array(
							z.object({
								id: z.string().min(1),
								name: z.string().min(1),
							}),
						)
						.min(1)
				: z.optional(
						z.array(
							z.object({
								id: z.string().min(1),
								name: z.string().min(1),
							}),
						),
				  ),
	};
	const handelDefaultValue = (): BankTransferTypes => {
		return {
			applyWith: 'All',
			accountNumber: 0,
			instructions: '',
			accountName: '',
			orderItems: 0,
			bankName: '',
			price: 0,
			iban: '',
			specificProducts: [],
			specificCustomers: [],
		};
	};
	const handleSubmit = (values: BankTransferTypes) => {
		console.log(values);
	};
	const { formStore, onSubmit } = useForm({
		schema: bankTransferSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	return { formStore, onSubmit };
}
