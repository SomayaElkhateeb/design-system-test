import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import { Input } from 'src/app/components/ui/input';
import { IPaymentCard } from './PaymentCard';
import { getImageUrl } from 'src/app/utils';
import { TooltipIcon } from 'src/app/utils/icons';
import FormField from 'src/app/components/ui/form/field';

export default function PaymentInputs({ formStore }: { formStore: UseFormReturn<IPaymentCard> }) {
	const { t } = useTranslation();
	return (
		<div className='grid grid-cols-4 gap-6'>
			<div className='col-span-2'>
				<FormField
					formStore={formStore}
					name='number'
					label={
						<span className='flex justify-between'>
							<p>{t('Number')}</p>
							<CreditTransactions />
						</span>
					}
					render={(field) => <Input {...field} placeholder='0000 0000 0000 0000' />}
				/>
			</div>

			<div className='col-span-1'>
				<FormField
					formStore={formStore}
					name='expiryDate'
					label={t('Expiry date')}
					render={(field) => <Input {...field} />}
				/>
			</div>

			<div className='col-span-1'>
				<FormField
					formStore={formStore}
					name='cvv'
					label={CvvLabel}
					render={(field) => <Input {...field} placeholder='123' />}
				/>
			</div>
		</div>
	);
}

function CreditTransactions() {
	return (
		<div className='flex gap-1'>
			<img src={getImageUrl('companies/mada.svg')} className='w-5 h-4' />
			<img src={getImageUrl('companies/visa.svg')} className='w-5 h-4' />
			<img src={getImageUrl('companies/amex.svg')} className='w-5 h-4' />
			<img src={getImageUrl('companies/masterCard.svg')} className='w-5 h-4' />
		</div>
	);
}

const CvvLabel = (
	<span className='flex'>
		CVV&nbsp;
		<TooltipIcon className='fill-secondary' />
	</span>
);
