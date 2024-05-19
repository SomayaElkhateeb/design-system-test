import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import { useTranslation } from 'react-i18next';
import Inputs from './Inputs';

export interface IPaymentCard {
	quantity: number;
	expiryDate: string;
	cvv: number;
}
export default function PaymentCard() {
	const { t } = useTranslation();
	const paymentSchema = {
		quantity: z.coerce.number().min(16),
		expiryDate: z.string().refine((val) => /^\d{2}\/\d{4}$/.test(val), {
			message: 'Date must be in the format MM/YYYY',
		}),
		cvv: z.coerce.number().min(3),
	};
	const handleSubmit = (values: IPaymentCard) => {
		console.log(values);
	};

	const handelDefaultValue = () => {
		return {
			quantity: 0,
			expiryDate: '',
			cvv: 0,
		};
	};
	const { formStore, onSubmit } = useForm({
		schema: paymentSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='cardDetails-sharedClass p-5'>
				<h2 className='text-lg font-semibold text-title'>{t('Select payment method')}</h2>
				<div>{/* <Inputs /> */}</div>
			</form>
		</Form>
	);
}
