import { z } from 'zod';
import { useForm } from 'src/app/utils/hooks/form';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { useTranslation } from 'react-i18next';
import { Checkbox } from '@mui/material';
import { Button } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import { TooltipIcon } from 'src/app/utils/icons';
export interface IAddPayment {
	name: string;
	cardNumber: number;
	expiryDate: string;
	cvv: number;
}
export default function AddPayment({ handleClose }: { handleClose: (e: boolean) => void }) {
	const { t } = useTranslation();
	const addPaymentSchema = {
		name: z.string().min(10, { message: t('Name is required') }),
		cardNumber: z.coerce.number().min(16),
		expiryDate: z.string().date(),
		cvv: z.coerce.number().min(3),
	};
	const handleSubmit = (values: IAddPayment) => {
		console.log(values);
		handleClose();
	};

	const handelDefaultValue = () => {
		return {
			name: '',
			cardNumber: 0,
			expiryDate: '',
			cvv: 0,
		};
	};
	const { formStore, onSubmit } = useForm({
		schema: addPaymentSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='fixed inset-0 z-50 flex items-center justify-center'>
				<div className='fixed inset-0 bg-black opacity-50' onClick={handleClose}></div>
				<div className='relative flex flex-col content-between rounded-md lg:w-[50%] md:w-[80%]  p-5 bg-white'>
					<h3 className='font-semibold text-title capitalize mb-5'>{t('Add payment method')}</h3>
					<div className='w-[60%] flex flex-col gap-4'>
						<FormField
							formStore={formStore}
							name='name'
							label={t('Name on card')}
							render={(field) => <Input {...field} />}
						/>
						<FormField
							formStore={formStore}
							name='cardNumber'
							label={QuantityLabel}
							render={(field) => <Input {...field} placeholder='0000 0000 0000 0000' />}
						/>
						<div className='flex items-start justify-between w-full'>
							<div>
								<FormField
									formStore={formStore}
									name='expiryDate'
									label={t('Expiry date')}
									render={(field) => <Input {...field} placeholder='MM/YY' />}
								/>
							</div>
							<div>
								<FormField
									formStore={formStore}
									name='cvv'
									label={CvvLabel}
									render={(field) => <Input {...field} placeholder='123' />}
								/>
							</div>
						</div>
					</div>
					<div>
						<Checkbox />
						<span className='text-title text-sm'>Assign as main</span>
					</div>
					<div className='flex items-center justify-end gap-6'>
						<Button variant='tertiary' onClick={handleClose}>
							{t('Cancel')}
						</Button>
						<Button variant='primary' onClick={onSubmit}>
							{t('Add')}
						</Button>
					</div>
				</div>
			</form>
		</Form>
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

const QuantityLabel = (
	<span className='flex justify-between'>
		<p>Card number</p>
		<CreditTransactions />
	</span>
);
