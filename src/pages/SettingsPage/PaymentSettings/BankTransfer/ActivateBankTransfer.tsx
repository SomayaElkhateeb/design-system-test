import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { z } from 'zod';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import { HeaderSettings } from 'src/app/components/optimized';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import AccountDetailsForm from './AccountDetailsForm';
import ActivateConditions from './ActivateConditions';
import { UseFormReturn } from 'react-hook-form';

interface bankTransferInterface {
	accountNumber: number;
	accountName: string;
	bankName: string;
	iban: string;
	instructions: string;
	orderItems: number;
	price: number;
}
export interface FormProps {
	formStore: UseFormReturn<bankTransferInterface>;
}

export default function ActivateBankTransfer() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handelDefaultValue = () => {
		return {
			accountNumber: '',
			accountName: '',
			bankName: '',
			iban: '',
			instructions: '',
			orderItems: '',
			price: '',
		};
	};
	const handleSubmit = (values: bankTransferInterface) => {
		console.log(values);
	};
	const data = [
		{
			id: 1,
			title: t('Assign as main location'),
		},
		{
			id: 2,
			title: t('Show on footer'),
		},
		{
			id: 3,
			title: t('Available for pickup'),
		},
	];

	const bankTransferSchema = {
		accountNumber: z.number().min(1, { message: t('Account number must be a positive number') }),
		accountName: z.string().min(1, { message: t('Account name cannot be empty') }),
		bankName: z.string().min(1, { message: t('Bank name cannot be empty') }),
		iban: z.string().min(1, { message: t('IBAN cannot be empty') }),
		instructions: z.string().min(1, { message: t('Instructions cannot be empty') }),
		orderItems: z
			.string()
			.min(1, { message: t('Order items Account number must be a positive number') }),
		price: z.string().min(1, { message: t('Price number must be a positive number') }),
	};

	const { formStore, onSubmit } = useForm({
		schema: bankTransferSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages '>
				<HeaderSettings
					submit
					variant='settingTwoBtns'
					title={t('Activate bank transfer')}
					btn1={{
						text: t('Discard'),
						onClick: () => {
							navigate(-1);
						},
					}}
					btn2={{
						text: t('Save Changes'),
						onClick: () => {},
					}}
				/>
				<div className='grid gap-5 p-5 grid-cols-3'>
					<div className='grid gap-5 col-span-2 lg:col-span-2'>
						<AccountDetailsForm formStore={formStore} />
						<ActivateConditions formStore={formStore} />
					</div>
					<div className='col-span-1'>
						<QuickActions data={data} />
					</div>
				</div>
			</form>
		</Form>
	);
}
