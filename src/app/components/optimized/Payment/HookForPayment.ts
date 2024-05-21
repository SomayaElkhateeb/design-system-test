import { useTranslation } from 'react-i18next';
import { z } from 'zod';
export interface IPaymentCard {
	number: number;
	expiryDate: string;
	cvv: number;
	hours: number;
}

export default function useCustomHookPayment() {
	const { t } = useTranslation();
	const handelDefaultValue = () => ({
		number: 0,
		expiryDate: '',
		cvv: 0,
		hours: 0,
	});

	const paymentSchema = {
		number: z.coerce.number().min(14, { message: t('Account number must be at least 14 numbers') }),
		expiryDate: z.string().refine((val) => /^\d{2}\/\d{4}$/.test(val), {
			message: t('Date must be in the format MM/YYYY'),
		}),
		cvv: z.coerce.number().refine((val) => /^\d{3}$/.test(val.toString()), {
			message: t('CVV must be 3 digits'),
		}),
		hours: z.coerce.number(),
	};

	return {
		handelDefaultValue,
		paymentSchema,
	};
}
