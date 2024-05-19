import { useState } from 'react';
import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import { getImageUrl } from 'src/app/utils';
import { Checkbox, FormControlLabel } from '@mui/material';
import FormField from '../../ui/form/field';
import PaymentInputs from './PaymentInputs';
import PaymentAccordion from './PaymentAccordion';
import { PaymentIcon } from 'src/app/utils/icons';
import { Button } from '..';

export interface IPaymentCard {
	number: number;
	expiryDate: string;
	cvv: number;
	hours: number;
}

export default function PaymentCard() {
	const [agreeToTerms, setAgreeToTerms] = useState(false);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
	const { t } = useTranslation();
	const navigate = useNavigate();

	// zod validation
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
	const handleSubmit = (values: IPaymentCard) => {
		console.log(values);
		navigate('successfullyPurchased');
	};

	const handelDefaultValue = () => ({
		number: 0,
		expiryDate: '',
		cvv: 0,
		hours: 0,
	});

	const { formStore, onSubmit } = useForm({
		schema: paymentSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	// handle changes
	const isButtonDisabled = !agreeToTerms || !selectedPaymentMethod;
	const handlePaymentMethodChange = (method: string) => {
		setSelectedPaymentMethod(method === selectedPaymentMethod ? null : method);
	};
	const handleTermsCheckbox = () => {
		setAgreeToTerms(!agreeToTerms);
	};

	// data methods accordion
	const paymentMethods = [
		{ id: 1, icon: <PaymentIcon />, title: t('Credit/Debit Card'), name: 'credit' },
		{
			id: 2,
			icon: <img src={getImageUrl('companies/apple.svg')} className='w-5 h-4' alt='Apple Pay' />,
			title: t('Apple Pay'),
			name: 'applePay',
		},
		{
			id: 3,
			icon: <img src={getImageUrl('companies/stcPay.svg')} className='w-5 h-4' alt='STC Pay' />,
			title: t('STC Pay'),
			name: 'stcPay',
		},
	];

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='cardDetails-sharedClass p-5'>
				<h2 className='text-lg font-semibold text-title'>{t('Select payment method')}</h2>

				<div className='py-5'>
					{paymentMethods.map((item) => (
						<PaymentAccordion
							key={item.id}
							isOpen={selectedPaymentMethod === item.name}
							icon={item.icon}
							title={item.title}
							onToggle={() => handlePaymentMethodChange(item.name)}
						>
							<PaymentInputs formStore={formStore} />
						</PaymentAccordion>
					))}
				</div>

				<div className='flex flex-col gap-4'>
					<FormControlLabel
						control={<Checkbox checked={agreeToTerms} onChange={handleTermsCheckbox} />}
						label={
							<div className='flex items-center text-sm text-subtitle gap-1'>
								<span className='text-title'>{t('I agree to')}</span>
								<p className='text-primary cursor-pointer'>
									{t('Terms and Conditions, Privacy Policy')}
									<span className='text-title'>{t('and')} </span>
									{t('Selling policy')}
								</p>
							</div>
						}
					/>
					{agreeToTerms && (
						<div className='w-[50%]'>
							<FormField
								formStore={formStore}
								name='hours'
								label={t('Number of hours')}
								render={(field) => <Input {...field} placeholder={t('Hours')} />}
							/>
						</div>
					)}
					<div className='flex justify-end'>
						{agreeToTerms ? (
							<Button variant='primary' onClick={onSubmit}>
								{t('Confirm Purchase')} ({t('SAR')} 50)
							</Button>
						) : (
							<Button disabled={isButtonDisabled}>
								{t('Confirm Purchase')} ({t('SAR')} 50)
							</Button>
						)}
					</div>
				</div>
			</form>
		</Form>
	);
}
