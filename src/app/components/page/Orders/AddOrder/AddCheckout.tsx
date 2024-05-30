import { useEffect, useState } from 'react';
import { Button } from 'src/app/components/optimized';
import FormChoiceChips from 'src/pages/SettingsPage/CustomizationsSettings/comp/FormChoiceChips';
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

export default function AddCheckout() {
	const { t } = useTranslation();
	const [purchase, setPurchase] = useState('branch');
	const [payment, setPayment] = useState('cash');
	const [delivery, setDelivery] = useState('Pickup');
	const [shipping, setShipping] = useState('Free shipping');
	const [shippingMethod, setShippingMethod] = useState('DHL (main)');
	// custom hook
	const { handelDefaultValue, addCheckOutSchema } = useCustomAddCheckOutForm(
		purchase,
		payment,
		delivery,
		shipping,
		shippingMethod,
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
		setShippingMethod(formStore.watch('shippingMethod'));
	}, [
		formStore.watch('purchase'),
		formStore.watch('payment'),
		formStore.watch('delivery'),
		formStore.watch('shipping'),
		formStore.watch('shippingMethod'),
	]);
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages gap-5 p-3'>
				<div className='flex-col-top-section-pages gap-5'>
					{/* purchase*/}
					<FormChoiceChips<addCheckOutInterface>
						checkoutForm
						formStore={formStore}
						name='purchase'
						label={t('Purchase method')}
						options={['onLine', 'branch']}
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
						<FormField
							formStore={formStore}
							name='creditCardOption'
							render={(field) => (
								<Select
									onValueChange={field.onChange}
									value={field.value}
									required={field.required}
									name={field.name}
								>
									<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
										<SelectValue placeholder='Select option' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='Saudi Arabia'>Saudi Arabia</SelectItem>
									</SelectContent>
								</Select>
							)}
						/>

						<FormField
							formStore={formStore}
							name='creditCardNote'
							label={t('Payment method')}
							render={(field) => <Textarea {...field} placeholder='Type note' />}
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
					name='shippingMethod'
					label={t('Shipping method')}
					options={['DHL (main)', 'Aramex']}
				/>

				{shippingMethod === 'DHL (main)' && (
					<>
						<FormField
							formStore={formStore}
							name='dhlStatus'
							label={t('Order status')}
							render={(field) => (
								<Select
									onValueChange={field.onChange}
									value={field.value}
									required={field.required}
									name={field.name}
								>
									<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
										<SelectValue placeholder='Select option' />
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
							render={(field) => <Textarea {...field} placeholder='Type note' />}
						/>
					</>
				)}

				{shippingMethod === 'Aramex' && (
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
										<SelectValue placeholder='Select option' />
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
							render={(field) => <Textarea {...field} placeholder='Type note' />}
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
