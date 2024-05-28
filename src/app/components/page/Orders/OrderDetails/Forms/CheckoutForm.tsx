import { useTranslation } from 'react-i18next';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import { Button } from 'src/app/components/optimized';
import useCustomCheckOutForm, { checkOutInterface } from './HookCheckoutForm';
import { useState, useEffect } from 'react';

import FormChoiceChips from 'src/pages/SettingsPage/CustomizationsSettings/comp/FormChoiceChips';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from 'src/app/components/ui/select';
import FormField from 'src/app/components/ui/form/field';
export default function CheckoutForm({
	handleChckOutFormForm,
}: {
	handleChckOutFormForm: () => void;
}) {
	const { t } = useTranslation();
	const [purchase, setPurchase] = useState('branch');
	// custom hook
	const { handelDefaultValue, checkOutSchema } = useCustomCheckOutForm(purchase);

	const handleSubmit = (values: checkOutInterface) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: checkOutSchema(),
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	useEffect(() => {
		setPurchase(formStore.watch('purchase'));
	}, [formStore.watch('purchase')]);

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages gap-5'>
				<div className='flex-col-top-section-pages gap-5'>
					<FormChoiceChips<checkOutInterface>
						checkoutForm
						formStore={formStore}
						name='purchase'
						label={t('Purchase method')}
						options={['branch', 'onLine']}
					/>
					{purchase === 'branch' && (
						<FormField
							formStore={formStore}
							name='branch'
							render={(field) => (
								<Select
									onValueChange={field.onChange}
									value={field.value}
									required={field.required}
									name={field.name}
								>
									<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
										<SelectValue placeholder='Select branch' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='Saudi Arabia'>Saudi Arabia</SelectItem>
									</SelectContent>
								</Select>
							)}
						/>
					)}
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

