import { useTranslation } from 'react-i18next';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import { Button } from 'src/app/components/optimized';
import useCustomCheckOutForm, { checkOutInterface } from './HookCheckoutForm';
import ChoosePurchase from '../Comp/ChoosePurchase';
import { EditIcon } from 'src/app/utils/icons';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { useEffect, useState } from 'react';
import { getImageUrl } from 'src/app/utils';
import FormChoiceChips from 'src/pages/SettingsPage/CustomizationsSettings/comp/FormChoiceChips';
export default function CheckoutForm({
	handleChckOutFormForm,
}: {
	handleChckOutFormForm: () => void;
}) {
	const { t } = useTranslation();

	// custom hook
	const { handelDefaultValue, checkOutSchema } = useCustomCheckOutForm();

	const handleSubmit = (values: checkOutInterface) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: checkOutSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages gap-5'>
				<div className='flex-col-top-section-pages gap-4'>
					{/* <FormChoiceChips<checkOutInterface>
						formStore={formStore}
						name='purchase'
						label={t('Payment methods')}
						options={['Commercial branch', 'Warehouse']}
					/> */}
				</div>

				<FormChoiceChips<checkOutInterface>
					checkoutForm
					formStore={formStore}
					name='payment'
					label={t('Payment methods')}
					options={['Cash']}
				/>
				<FormChoiceChips<checkOutInterface>
					checkoutForm
					formStore={formStore}
					name='delivery'
					label={t('Delivery method')}
					options={['Shipping']}
				/>
				<FormChoiceChips<checkOutInterface>
					checkoutForm
					formStore={formStore}
					name='shipping'
					label={t('Shipping method')}
					options={['DHL (main)']}
				/>

				<div className='flex-btn-end'>
					<Button onClick={handleChckOutFormForm} variant='secondary'>
						{t('Discard')}
					</Button>
					<Button onClick={onSubmit} variant='primary'>
						{t('Save')}
					</Button>
				</div>
			</form>
		</Form>
	);
}

function Row({ title, arrOptions }: { title: string; arrOptions: string[] | React.ReactNode[] }) {
	const { t } = useTranslation();
	const [selectedOption, setSelectedOption] = useState('');

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
	};
	return (
		<div className='flex flex-col gap-0'>
			<div className='flex items-center justify-between'>
				<h4 className='text-title text-sm'>{title}</h4>
				<Button LeftIcon={EditIcon} variant='tertiary' className='font-normal'>
					{t('edit')}
				</Button>
			</div>

			<SingleChoiceChips
				options={arrOptions}
				setSelected={handleOptionSelect}
				selected={selectedOption}
			/>
		</div>
	);
}

// const Dhl = () => {
// 	return (
// 		<div className='rounded-lg border border-constrained w-[2.6875rem] h-[2.4375rem] relative'>
// 			<img src={getImageUrl('companies/dhl.svg')} alt='DHL Logo' />
// 			<span>DHL</span>
// 			<span>(main)</span>
// 		</div>
// 	);
// };
