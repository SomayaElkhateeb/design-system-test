import { Button } from 'src/app/components/optimized';
import FormChoiceChips from 'src/app/components/ui/form/FormChoiceChips';
import useAddCheckOutForm, { AddCheckOutFormValues } from './_hook/useAddCheckOutForm';
import { useTranslation } from 'react-i18next';
import { Form } from 'src/app/components/ui/form';
import { Textarea } from 'src/app/components/ui/textarea';
import FormField from 'src/app/components/ui/form/field';
import SelectFormField from 'src/app/components/ui/form/SelectFormField';

const branches = [
	{ value: 'eg', label: 'Egypt' },
	{ value: 'ksa', label: 'Kingdom of Saudi Arabia (KSA)' },
];

export default function AddCheckout({
	onFinish,
	onBack,
}: {
	onFinish: () => void;
	onBack: () => void;
}) {
	const { t } = useTranslation();

	const { formStore, onSubmit, formValues } = useAddCheckOutForm({ onFinish });

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global gap-5 cardDetails-sharedClass p-5'>
				<div className='flex-col-global gap-5'>
					{/* purchase*/}
					<FormChoiceChips<AddCheckOutFormValues>
						checkoutForm
						formStore={formStore}
						name='purchase'
						label={t('Purchase method')}
						options={['OnLine', 'In branch']}
					/>
					{formValues.purchase === 'In branch' && (
						<SelectFormField
							name='branch'
							label={t('Branch name')}
							formStore={formStore}
							options={branches}
							placeholder={t('Select branch')}
						/>
					)}
				</div>
				{/* payment */}
				<FormChoiceChips<AddCheckOutFormValues>
					checkoutForm
					formStore={formStore}
					name='payment'
					label={t('Payment methods')}
					options={['Credit card', 'Bank transfer', 'Cash']}
				/>
				{formValues.payment === 'Credit card' && (
					<>
						<SelectFormField
							name='creditCardOption'
							label={t('Order status')}
							formStore={formStore}
							options={branches}
							placeholder={t('Select option')}
						/>
						<FormField
							formStore={formStore}
							name='creditCardNote'
							label={t('Payment method')}
							render={(field) => <Textarea {...field} placeholder={t('Type note')} />}
						/>
					</>
				)}
				{/* delivery */}
				<FormChoiceChips<AddCheckOutFormValues>
					checkoutForm
					formStore={formStore}
					name='delivery'
					label={t('Delivery method')}
					options={['Shipping', 'Pickup']}
				/>
				{formValues.delivery === 'Shipping' && (
					<FormChoiceChips<AddCheckOutFormValues>
						checkoutForm
						formStore={formStore}
						name='shipping'
						label={t('Shipping rate')}
						options={['Fixed rate', 'Free shipping']}
					/>
				)}
				<FormChoiceChips<AddCheckOutFormValues>
					checkoutForm
					formStore={formStore}
					name='method'
					label={t('Shipping method')}
					options={['DHL (main)', 'Aramex']}
				/>
				{formValues.method === 'DHL (main)' && (
					<>
						<SelectFormField
							name='dhlStatus'
							label={t('Order Status')}
							formStore={formStore}
							options={branches}
							placeholder={t('Select option')}
						/>
						<FormField
							formStore={formStore}
							name='dhlNote'
							label={t('Customer note')}
							render={(field) => <Textarea {...field} placeholder={t('Type note')} />}
						/>
					</>
				)}
				{formValues.method === 'Aramex' && (
					<>
						<SelectFormField
							name='aramexStatus'
							label={t('Order status')}
							formStore={formStore}
							options={branches}
							placeholder={t('Select option')}
						/>
						<FormField
							formStore={formStore}
							name='aramexNote'
							label={t('Customer note')}
							render={(field) => <Textarea {...field} placeholder={t('Type note')} />}
						/>
					</>
				)}
				<div className='flex-btn-end'>
					<Button variant='secondary' text={t('Discard')} onClick={onBack} />
					<Button onClick={onSubmit} variant='primary' text={t('Save')} />
				</div>
			</form>
		</Form>
	);
}
