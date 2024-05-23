import { z } from 'zod';
import { UseFormReturn } from 'react-hook-form';
import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';

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
}

export default function useBankTransfer() {
	const { t } = useTranslation();
	const bankTransferSchema = {
		accountNumber: z.number().positive({ message: t('Account number must be a positive number') }),
		orderItems: z.number().positive({ message: t('Order items number must be a positive number') }),
		price: z.number().positive({ message: t('Price number must be a positive number') }),
		instructions: z.string().min(1, { message: t('Instructions cannot be empty') }),
		accountName: z.string().min(1, { message: t('Account name cannot be empty') }),
		applyWith: z.string().min(1, { message: t('Apply with cannot be empty') }),
		bankName: z.string().min(1, { message: t('Bank name cannot be empty') }),
		iban: z.string().min(1, { message: t('IBAN cannot be empty') }),
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
