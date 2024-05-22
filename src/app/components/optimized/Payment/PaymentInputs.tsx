import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import { Input } from 'src/app/components/ui/input';

import FormField from 'src/app/components/ui/form/field';
import { IPaymentCardInterface } from './HookForPayment';
import { CreditTransactions, CvvLabel } from '../../page/SettingPage/BillingAndPlans/AddPayment';

export default function PaymentInputs({
	formStore,
}: {
	formStore: UseFormReturn<IPaymentCardInterface>;
}) {
	const { t } = useTranslation();
	return (
		<div className='grid grid-cols-4 gap-6 items-start'>
			<div className='md:col-span-2 col-span-4'>
				<FormField
					formStore={formStore}
					name='number'
					label={
						<span className='flex justify-between'>
							<p>{t('Number')}</p>
							<CreditTransactions />
						</span>
					}
					render={(field) => <Input type='number' {...field} placeholder='0000 0000 0000 0000' />}
				/>
			</div>

			<div className='md:col-span-1 col-span-4'>
				<FormField
					formStore={formStore}
					name='expiryDate'
					label={t('Expiry date')}
					render={(field) => <Input placeholder='MM/YYYY' {...field} />}
				/>
			</div>

			<div className='md:col-span-1 col-span-4  md:-translate-y-1'>
				<FormField
					formStore={formStore}
					name='cvv'
					label={CvvLabel}
					render={(field) => <Input type='number' {...field} placeholder='123' />}
				/>
			</div>
		</div>
	);
}
