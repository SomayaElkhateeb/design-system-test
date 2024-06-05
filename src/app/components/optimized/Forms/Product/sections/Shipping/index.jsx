import { Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import Button from '../../../../Buttons/Button';
import { FaCirclePlus } from 'react-icons/fa6';
import { useState } from 'react';
import {
	productShippingRateCollection,
	productStatesOfTheProductCollection,
	productShippingRateMap,
	productShippingMethodCollection,
	productDimensionUnitCollection,
	productWeightUnitCollection,
} from './utils';
import { useWatch } from 'react-hook-form';
import {
	SelectItem,
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';
import ControllerContainer from 'src/app/components/ui/form/controller-container';

// /*
// import { z } from 'zod';

// export const productStatesOfTheProductCollection = /** @type {const} */ ([
// 	'fragile',
// 	'food',
// 	'solid',
// 	'Needs lower temperature',
// ]);
// export const productStatesOfTheProductMap =
// 	/** @type {{ [Key in typeof productStatesOfTheProductCollection[number]]: typeof productStatesOfTheProductCollection[number] }} */ (
// 		Object.fromEntries(productStatesOfTheProductCollection.map((state) => [state, state]))
// 	);

// export const productShippingRateCollection = /** @type {const} */ (['fixed rate', 'free shipping']);
// export const productShippingRateMap =
// 	/** @type {{ [Key in typeof productShippingRateCollection[number]]: typeof productShippingRateCollection[number] }} */ (
// 		Object.fromEntries(productShippingRateCollection.map((rate) => [rate, rate]))
// 	);

// export const productShippingMethodCollection = /** @type {const} */ (['Dhl (main)', 'Aramex']);

// export const productShippingSchema = {
// 	isShippableOrPickupable: z.boolean().default(true),
// 	weight: z.coerce.number().min(0),
// 	weightUnit: z.enum(['kg', 'g', 'lb', 'oz']),
// 	dimensions: z.object({
// 		length: z.coerce.number().min(0),
// 		width: z.coerce.number().min(0),
// 		height: z.coerce.number().min(0),
// 	}),
// 	dimensionUnit: z.enum(['cm', 'm', 'mm', 'in', 'ft']),
// 	statesOfTheProduct: z.enum(productStatesOfTheProductCollection),
// 	shippingRate: z.enum(productShippingRateCollection),
// 	shippingRateValue: z.number().min(0).optional(),
// 	shippingMethod: z.enum(productShippingMethodCollection),
// 	// more advanced shipping options???
// };
// */

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
function AdvancedShippingOptionsManager(props) {
	const { t } = useTranslation();
	const [isActive, setIsActive] = useState(false);
	const isFixedRate =
		useWatch({
			control: props.formStore.control,
			name: 'shippingRate',
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
				name='statesOfTheProduct'
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
									<span>{rate !== fieldMap[rate] ? <>✔</> : <>+</>}</span>
									<span className='capitalize'>{rate}</span>
								</button>
							))}
						</div>
					);
				}}
			/>
			<FormField
				formStore={props.formStore}
				name='shippingRate'
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
											props.formStore.setValue('shippingRateValue', 0);
										} else {
											props.formStore.setValue('shippingRateValue', undefined);
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
					name='shippingRateValue'
					render={(field) => <Input {...field} type='number' />}
					label={{ children: t('Shipping Rate') }}
					container={{ className: 'md:w-1/2' }}
				/>
			)}
			<FormField
				formStore={props.formStore}
				name='shippingMethod'
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
									<span>{rate !== rate ? <>✔</> : <>+</>}</span>
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

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormShippingSection(props) {
	const { t } = useTranslation();

	return (
		<Card id={props.id}>
			<CardHeader>
				<CardTitle>{t('Shipping')}</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				<FormField
					formStore={props.formStore}
					name='isShippableOrPickupable'
					container={{ className: 'gap-x-2' }}
					label={{
						children: (
							<div className='flex flex-col'>
								<p>{t('Is this product require shipping or pickup?')}</p>
								<p className='text-sm text-gray-400'>
									{t(
										"Enable this option if the product needs to be physically delivered to customers either via shipping or by self-pickup. If this product is a service or a downloadable item that doesn't require delivery, keep this option disabled.",
									)}
								</p>
							</div>
						),
						className: 'self-center mt-0.5',
					}}
					render={({ value, ...field }) => (
						<Checkbox
							{...field}
							checked={value}
							style={{ gridArea: 'input', padding: 0 }}
							className='justify-self-start'
						/>
					)}
					layout='inline-reversed'
				/>
				<div className='flex flex-col gap-4 items-start'>
					<FormField
						formStore={props.formStore}
						name='weight'
						label={t('Weight')}
						render={(field) => (
							<ControllerContainer
								end={
									<FormField
										formStore={props.formStore}
										name='weightUnit'
										render={(field) => (
											<Select
												onValueChange={(value) => {
													// @ts-ignore
													props.formStore.setValue('weightUnit', value);
												}}
												value={field.value}
											>
												<SelectTrigger
													id={field.id}
													className='border-0'
													style={{
														minWidth: 2 * 3.5 + 'ch',
													}}
												>
													<SelectValue />
												</SelectTrigger>
												<SelectContent>
													{productWeightUnitCollection.map((item) => {
														return (
															<SelectItem key={item} value={item}>
																{item}
															</SelectItem>
														);
													})}
												</SelectContent>
											</Select>
										)}
									/>
								}
								endSeparator
							>
								<Input {...field} type='number' className='border-0' />
							</ControllerContainer>
						)}
					/>
					<div className='flex items-center text-gray border rounded-md px-2'>
						<FormField
							formStore={props.formStore}
							name='dimensions.length'
							render={(field) => (
								<Input
									{...field}
									type='number'
									className='border-0 px-0'
									placeholder={t('Length')}
									style={{ width: t('Length').length * 1.2 + 'ch' }}
									min='0'
								/>
							)}
						/>
						<span className='me-8'>x</span>
						<FormField
							formStore={props.formStore}
							name='dimensions.width'
							render={(field) => (
								<Input
									{...field}
									type='number'
									className='border-0 px-0'
									placeholder={t('Width')}
									style={{ width: t('Width').length * 1.2 + 'ch' }}
									min='0'
								/>
							)}
						/>
						<span className='me-8'>x</span>
						<FormField
							formStore={props.formStore}
							name='dimensions.height'
							render={(field) => (
								<Input
									{...field}
									type='number'
									className='border-0 px-0'
									placeholder={t('Height')}
									style={{ width: t('Height').length * 1.2 + 'ch' }}
									min='0'
								/>
							)}
						/>
						<span className='me-8'>x</span>
						<FormField
							formStore={props.formStore}
							name='dimensionUnit'
							render={(field) => (
								<Select
									onValueChange={(value) => {
										// @ts-ignore
										props.formStore.setValue('dimensionUnit', value);
									}}
									value={field.value}
								>
									<SelectTrigger id={field.id} className='border-0'>
										<SelectValue />
									</SelectTrigger>
									<SelectContent>
										{productDimensionUnitCollection.map((item) => {
											return (
												<SelectItem key={item} value={item}>
													{item}
												</SelectItem>
											);
										})}
									</SelectContent>
								</Select>
							)}
						/>
					</div>
				</div>
				<AdvancedShippingOptionsManager formStore={props.formStore} />
			</CardContent>
		</Card>
	);
}
