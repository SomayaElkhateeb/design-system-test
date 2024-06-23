import { useEffect, useState } from 'react';
import { Button } from 'src/app/components/optimized';
import FormChoiceChips from 'src/app/components/ui/form/FormChoiceChips';
import useCustomAddCheckOutForm, { addCheckOutInterface } from './Comp/HookForAddCheckout';
import { useForm } from 'src/app/utils/hooks/form';
import { useTranslation } from 'react-i18next';
import { Form } from 'src/app/components/ui/form';
import { Textarea } from 'src/app/components/ui/textarea';
import FormField from 'src/app/components/ui/form/field';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from 'src/app/components/ui/select';
import SelectFormField from 'src/pages/AuthPage/Registration/comp/SelectFormField';

const branches = [
	{ value: 'eg', label: 'Egypt' },
	{ value: 'ksa', label: 'Kingdom of Saudi Arabia (KSA)' },
];

export default function AddCheckout() {
	const { t } = useTranslation();
	const [purchase, setPurchase] = useState('branch');
	const [payment, setPayment] = useState('cash');
	const [delivery, setDelivery] = useState('Pickup');
	const [shipping, setShipping] = useState('Free shipping');
	const [method, setShippingMethod] = useState('DHL (main)');
	// custom hook
	const { handelDefaultValue, addCheckOutSchema } = useCustomAddCheckOutForm(
		purchase,
		payment,
		delivery,
		shipping,
		method,
	);

	const handleSubmit = (values: addCheckOutInterface) => {
		console.log(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: addCheckOutSchema(),
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	useEffect(() => {
		setPurchase(formStore.watch('purchase'));
		setPayment(formStore.watch('payment'));
		setDelivery(formStore.watch('delivery'));
		setShipping(formStore.watch('shipping'));
		setShippingMethod(formStore.watch('method'));
	}, [
		formStore.watch('purchase'),
		formStore.watch('payment'),
		formStore.watch('delivery'),
		formStore.watch('shipping'),
		formStore.watch('method'),
	]);
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global gap-5 cardDetails-sharedClass p-5'>
				<div className='flex-col-global gap-5'>
					{/* purchase*/}
					<FormChoiceChips<addCheckOutInterface>
						checkoutForm
						formStore={formStore}
						name='purchase'
						label={t('Purchase method')}
						options={['onLine', 'branch']}
					/>
					{purchase === 'branch' && (
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
				<FormChoiceChips<addCheckOutInterface>
					checkoutForm
					formStore={formStore}
					name='payment'
					label={t('Payment methods')}
					options={['Credit card', 'Bank transfer', 'Cash']}
				/>

				{payment === 'Credit card' && (
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
				<FormChoiceChips<addCheckOutInterface>
					checkoutForm
					formStore={formStore}
					name='delivery'
					label={t('Delivery method')}
					options={['Shipping', 'Pickup']}
				/>
				{delivery === 'Shipping' && (
					<FormChoiceChips<addCheckOutInterface>
						checkoutForm
						formStore={formStore}
						name='shipping'
						label={t('Shipping rate')}
						options={['Fixed rate', 'Free shipping']}
					/>
				)}

				<FormChoiceChips<addCheckOutInterface>
					checkoutForm
					formStore={formStore}
					name='method'
					label={t('Shipping method')}
					options={['DHL (main)', 'Aramex']}
				/>

				{method === 'DHL (main)' && (
					<>
						<FormField
							formStore={formStore}
							name='dhlStatus'
							label={t('Order Status')}
							render={(field) => (
								<Select
									onValueChange={field.onChange}
									value={field.value}
									required={field.required}
									name={field.name}
								>
									<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
										<SelectValue placeholder={t('Select option')} />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='Saudi Arabia'>Saudi Arabia</SelectItem>
									</SelectContent>
								</Select>
							)}
						/>
						<FormField
							formStore={formStore}
							name='dhlNote'
							label={t('Customer note')}
							render={(field) => <Textarea {...field} placeholder={t('Type note')} />}
						/>
					</>
				)}

				{method === 'Aramex' && (
					<>
						<FormField
							formStore={formStore}
							name='aramexStatus'
							label={t('Order status')}
							render={(field) => (
								<Select
									onValueChange={field.onChange}
									value={field.value}
									required={field.required}
									name={field.name}
								>
									<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
										<SelectValue placeholder={t('Select option')} />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='Saudi Arabia'>Saudi Arabia</SelectItem>
									</SelectContent>
								</Select>
							)}
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
					<Button variant='secondary'>{t('Discard')}</Button>
					<Button onClick={onSubmit} variant='primary'>
						{t('Save')}
					</Button>
				</div>
			</form>
		</Form>
	);
}
