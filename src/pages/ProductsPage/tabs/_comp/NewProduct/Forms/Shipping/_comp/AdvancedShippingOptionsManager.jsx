
import { useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaCheck, FaCirclePlus } from 'react-icons/fa6';
import { Button } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';

import {
	productShippingMethodCollection,
	productShippingRateCollection,
	productShippingRateMap,
	productStatesOfTheProductCollection
} from '../utils';

/**
 * @template TFormStore
 *
 * @param {import('../types').Props<TFormStore>} props
 */
export default function AdvancedShippingOptionsManager(props) {
	const { t } = useTranslation();
	const [isActive, setIsActive] = useState(false);
	const isFixedRate =
		useWatch({
			control: props.formStore.control,
			name: 'shipping.rateType',
		}) === productShippingRateMap['fixed rate'];

	if (!isActive) {
		return (
			<Button
				variant='secondary'
				textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
				className='px-0 border-0'
				onClick={() => setIsActive(true)}
			>
				<FaCirclePlus className='size-5' />
				{t('Add more advanced shipping options')}
			</Button>
		);
	}

	return (
		<>
			<FormField
				formStore={props.formStore}
				name='shipping.statesOfTheProduct'
				label={{ children: t('States of the product'), className: 'font-medium text-[1.1rem]' }}
				render={(field) => {
					const fieldMap = Object.fromEntries((field.value ?? []).map((rate) => [rate, rate]));
					return (
						<div className='flex flex-wrap gap-2'>
							{productStatesOfTheProductCollection.map((rate) => (
								<button
									type='button'
									key={rate}
									value={rate}
									className={`flex items-center gap-2 cursor-pointer rounded-full py-1.5 px-3.5 ${
										rate === fieldMap[rate]
											? 'bg-success text-white'
											: 'border border-success text-green bg-success/10'
									}`}
									onClick={() => {
										const newRates = field.value.includes(rate)
											? field.value.filter((r) => r !== rate)
											: [...field.value, rate];
										field.onChange(newRates);
									}}
								>
									<span>{rate !== fieldMap[rate] ? <FaCheck /> : <>+</>}</span>
									<span className='capitalize'>{rate}</span>
								</button>
							))}
						</div>
					);
				}}
			/>
			<FormField
				formStore={props.formStore}
				name='shipping.rateType'
				label={{ children: t('Shipping Rate'), className: 'font-medium text-[1.1rem]' }}
				render={(field) => {
					return (
						<div className='flex flex-wrap gap-2'>
							{productShippingRateCollection.map((rate) => (
								<button
									type='button'
									key={rate}
									value={rate}
									className={`flex items-center gap-2 cursor-pointer rounded-full py-1.5 px-3.5 capitalize ${
										rate === field.value
											? 'bg-success text-white'
											: 'border border-gray/50 text-black/70'
									}`}
									onClick={() => {
										if (rate === productShippingRateMap['fixed rate']) {
											props.formStore.setValue('shipping.rateValue', 0);
										} else {
											props.formStore.setValue('shipping.rateValue', undefined);
										}
										field.onChange(rate);
									}}
								>
									{rate}
								</button>
							))}
						</div>
					);
				}}
			/>
			{isFixedRate && (
				<FormField
					formStore={props.formStore}
					name='shipping.rateValue'
					render={(field) => <Input {...field} type='number' />}
					label={{ children: t('Shipping Rate') }}
					container={{ className: 'md:w-1/2' }}
				/>
			)}
			<FormField
				formStore={props.formStore}
				name='shipping.method'
				label={{ children: t('Shipping Method'), className: 'font-medium text-[1.1rem]' }}
				render={(field) => {
					return (
						<div className='flex flex-wrap gap-2'>
							{productShippingMethodCollection.map((rate) => (
								<button
									type='button'
									key={rate}
									value={rate}
									className={`flex items-center gap-2 cursor-pointer rounded-full py-1.5 px-3.5 ${
										rate === field.value
											? 'bg-success text-white'
											: 'border border-success text-green bg-success/10'
									}`}
									onClick={() => {
										field.onChange(rate);
									}}
								>
									<span>{rate !== rate ? <FaCheck /> : <>+</>}</span>
									<span className='capitalize'>{rate}</span>
								</button>
							))}
						</div>
					);
				}}
			/>
			<button className='text-pri-dark w-fit font-medium' onClick={() => setIsActive(false)}>
				{t('Less Advanced Options')}
			</button>
		</>
	);
}
