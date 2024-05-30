import { useTranslation } from 'react-i18next';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from 'src/app/components/ui/card';
import Button from '../../../../Buttons/Button';
import { FaCirclePlus } from 'react-icons/fa6';
import { useId, useMemo, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem } from 'src/app/components/ui/accordion';
import {
	optionNameCollection,
	optionNameMap,
	optionTypeCollection,
	optionTypeMap,
	productOptionSchema,
} from './utils';
import { useForm } from 'src/app/utils/hooks/form';
import FormField from 'src/app/components/ui/form/field';
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
	SelectItem,
} from 'src/app/components/ui/select';
import { useFieldArray, useWatch } from 'react-hook-form';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown, TrashIcon } from 'lucide-react';
import { Checkbox } from '@mui/material';
import { cn } from 'src/app/utils';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from 'src/app/components/ui/dialog';
import { FormLabel } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';

/**
 * @param {{
 * 	start?: import('react').ReactNode;
 * 	startSeparator?: boolean;
 * 	end?: import('react').ReactNode;
 * 	endSeparator?: boolean;
 * 	children: import('react').ReactNode;
 * }} props
 */
function ControllerContainer(props) {
	return (
		<div className={cn('flex border rounded-md', props.start && 'ps-2.5', props.end && 'pe-2.5')}>
			{props.start}
			{props.start && props.startSeparator && (
				<div className='border-r h-[80%] my-[1.25%] border-gray-200 ps-2.5' />
			)}
			{props.children}
			{props.end && props.endSeparator && (
				<div className='border-l h-[80%] my-[1.25%] border-gray-200 pe-2.5' />
			)}
			{props.end}
		</div>
	);
}

/**
 * @param {{
 * 	start: {
 * 		trigger: import('react').ReactNode;
 * 		after?: import('react').ReactNode;
 * 	}
 *  end: {
 *  	before?: import('react').ReactNode;
 *  }
 * 	children: import('react').ReactNode;
 * } & Parameters<typeof AccordionItem>[0]} props
 */
function CustomAccordionItem({ start, end, children, ...props }) {
	return (
		<AccordionItem
			{...props}
			className={cn(
				'data-[state=open]:bg-[#F9FAFC] border-gray/50 p-2 rounded-xl border data-[state=open]:px-4',
				props.className,
			)}
		>
			<AccordionPrimitive.Header className='flex py-2 justify-between'>
				<div className='flex items-center gap-2'>
					<AccordionPrimitive.Trigger className='flex items-center gap-2'>
						{start.trigger}
					</AccordionPrimitive.Trigger>
					{start.after}
				</div>

				<div className='flex items-center gap-2'>
					{end.before}
					<AccordionPrimitive.Trigger className='[&[data-state=open]>svg]:rotate-180'>
						<ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
					</AccordionPrimitive.Trigger>
				</div>
			</AccordionPrimitive.Header>
			<AccordionContent className='pt-6'>{children}</AccordionContent>
		</AccordionItem>
	);
}

const defaultOptionValuesByName = {
	[optionNameMap.color]: [
		{
			tempId: Date.now().toString() + Math.random().toString(),
			value: 'Red',
			nameEn: 'Red',
			nameAr: 'أحمر',
		},
		{
			tempId: Date.now().toString() + Math.random().toString(),
			value: 'Green',
			nameEn: 'Green',
			nameAr: 'أخضر',
		},
		{
			tempId: Date.now().toString() + Math.random().toString(),
			value: 'Blue',
			nameEn: 'Blue',
			nameAr: 'أزرق',
		},
	],
	[optionNameMap.size]: [
		{
			tempId: Date.now().toString() + Math.random().toString(),
			value: 'S',
			nameEn: 'Small',
			nameAr: 'صغير',
		},
		{
			tempId: Date.now().toString() + Math.random().toString(),
			value: 'M',
			nameEn: 'Medium',
			nameAr: 'متوسط',
		},
		{
			tempId: Date.now().toString() + Math.random().toString(),
			value: 'L',
			nameEn: 'Large',
			nameAr: 'كبير',
		},
	],
};

/**
 * @template TFormStore
 *
 * @param {{ formStore: import('./types').ProductOptionFormStore<TFormStore>; }} props
 */
function OptionValuesManager(props) {
	const { t } = useTranslation();
	const reactId = useId();
	const [value, setValue] = useState('');
	const selectValues = useWatch({
		control: props.formStore.control,
		name: 'option.values',
	});

	const optionName = useWatch({
		control: props.formStore.control,
		name: 'option.name',
	});

	const defaultOptionValues = useMemo(
		() => (optionName ? defaultOptionValuesByName[optionName] : []),
		[optionName],
	);

	const filteredOptionValues = useMemo(() => {
		if (!selectValues) {
			return defaultOptionValues;
		}

		const valuesMap = selectValues.reduce((acc, val) => {
			acc[val.tempId] = true;
			return acc;
		}, /** @type {Record<string, boolean>} */ ({}));
		return defaultOptionValues.filter((item) => {
			return !valuesMap[item.tempId];
		});
	}, [defaultOptionValues, selectValues]);

	return (
		<div className='flex flex-col gap-1.5'>
			<FormLabel htmlFor={reactId}>{t('Values')}</FormLabel>
			<ControllerContainer
				end={
					<Dialog>
						<DialogTrigger>
							<FaCirclePlus className='size-5' />
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Are you absolutely sure?</DialogTitle>
								<DialogDescription>
									This action cannot be undone. This will permanently delete your account and remove
									your data from our servers.
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				}
				endSeparator
			>
				<Select
					// required={field.required}
					// name={field.name}
					onValueChange={(value) => {
						const newValue = filteredOptionValues.find((item) => item.tempId === value);
						if (!newValue) {
							return;
						}

						const prevValues = props.formStore.getValues('option.values');
						props.formStore.setValue('option.values', [...prevValues, newValue]);
						setValue('');
					}}
					value={value}
				>
					<SelectTrigger
						// onBlur={field.onBlur}
						// disabled={field.disabled}
						id={reactId}
						className='border-0'
					>
						<SelectValue placeholder={t('Select or add new')} />
					</SelectTrigger>
					<SelectContent>
						{filteredOptionValues.map((item) => {
							return (
								<SelectItem key={item.tempId} value={item.tempId}>
									{item.nameEn}
								</SelectItem>
							);
						})}
					</SelectContent>
				</Select>
			</ControllerContainer>
			{/* Values will be displayed in badges below with an `x` remove button */}
			<div className='flex gap-2'>
				{(selectValues ?? []).map((value) => (
					<div
						key={value.tempId}
						className='flex gap-2 bg-gray text-white justify-center items-center rounded-md text-primary-500 bg-gray-700 px-2 py-1'
					>
						<div className='size-4 rounded-full' style={{ backgroundColor: value.value }} />
						<span>{value.nameEn}</span>
						<button
							type='button'
							className='text-gray-300 pe-2 '
							onClick={() => {
								const prevValues = props.formStore.getValues('option.values');
								const newValues = prevValues.filter((item) => item.tempId !== value.tempId);
								props.formStore.setValue('option.values', newValues);
							}}
						>
							x<span className='sr-only'>{t('Remove')}</span>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

/**
 * @param {{
 * 	handleSubmit: (values: import('./types').ProductOptionValues) => void,
 * }} props
 */
function AddOptionManager(props) {
	const { t } = useTranslation();
	const [isAdding, setIsAdding] = useState(true);
	const { formStore } = useForm({
		schema: productOptionSchema,
		defaultValues: {
			option: {
				tempId: Date.now().toString() + Math.random().toString(),
				type: optionTypeMap.text,
				values: [],
			},
		},
		handleSubmit: props.handleSubmit,
	});

	if (!isAdding) {
		return (
			<Button
				variant='secondary'
				textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap bg-transparent border-title px-4 py-3 rounded-lg border'
				className='px-0 border-0'
				onClick={() => setIsAdding(true)}
			>
				<FaCirclePlus className='size-5' />
				{t('Add Option')}
			</Button>
		);
	}

	return (
		<div className='flex flex-col gap-6'>
			<div className='grid grid-cols-2 gap-4'>
				<div className='flex flex-col gap-y-3'>
					<FormField
						formStore={formStore}
						name='option.name'
						label={t('Name')}
						render={(field) => (
							<Select
								onValueChange={field.onChange}
								value={field.value}
								required={field.required}
								name={field.name}
							>
								<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
									<SelectValue placeholder={t('Select Size, Color or add new')} />
								</SelectTrigger>
								<SelectContent>
									{optionNameCollection.map((item) => {
										return (
											<SelectItem key={item} value={item}>
												{t(item)}
											</SelectItem>
										);
									})}
								</SelectContent>
							</Select>
						)}
					/>
					<OptionValuesManager formStore={formStore} />
				</div>
				<div className='flex flex-col gap-y-3'>
					<FormField
						formStore={formStore}
						name='option.type'
						label={t('Type')}
						render={(field) => (
							<Select
								onValueChange={field.onChange}
								value={field.value}
								required={field.required}
								name={field.name}
							>
								<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									{optionTypeCollection.map((item) => (
										<SelectItem key={item} value={item}>
											{t(item)}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						)}
					/>
				</div>
			</div>
			<div className='flex gap-4'>
				<Button
					variant='primary'
					onClick={() => {
						const values = formStore.getValues();
						props.handleSubmit(values);
						setIsAdding(false);
						formStore.reset();
					}}
				>
					{t('Add')}
				</Button>
				<Button
					variant='secondary'
					onClick={() => {
						setIsAdding(false);
						formStore.reset();
					}}
				>
					{t('Discard')}
				</Button>
			</div>
		</div>
	);
}

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
function OptionsList(props) {
	const { t } = useTranslation();
	const { fields, append, remove, prepend, update } = useFieldArray({
		control: props.formStore.control,
		name: 'options',
	});

	return (
		<div className='flex flex-col gap-4'>
			<Accordion type='multiple' defaultValue={[fields[0]?.tempId]} className='flex flex-col gap-4'>
				{fields.map((option, index) => (
					<CustomAccordionItem
						start={{ trigger: option.name }}
						end={{
							before: (
								<button
									type='button'
									onClick={() => {
										remove(index);
										updateVariations(props.formStore);
									}}
								>
									<TrashIcon />
								</button>
							),
						}}
						key={option.tempId}
						value={option.tempId}
					>
						<div className='flex flex-col gap-4'>
							<div className='flex items-center justify-between gap-4'>
								<button type='button' className='flex gap-2 items-center'>
									<FaCirclePlus className='size-5' />
									{t('Add Another Value')}
								</button>

								<FormField
									formStore={props.formStore}
									name={`options.${index}.isRequired`}
									label={t('Required')}
									render={({ value, ...field }) => (
										<Checkbox
											{...field}
											checked={value}
											onChange={(e) => {
												const oldItem = fields[index];
												update(index, { ...oldItem, isRequired: e.target.checked });
												updateVariations(props.formStore);
											}}
											style={{ gridArea: 'input', padding: 0 }}
											className='justify-self-start'
										/>
									)}
									layout='inline-reversed'
								/>
							</div>

							<div className='flex flex-col gap-1'>
								<strong>{t('In stock')}</strong>
							</div>
							<div className='flex flex-col overflow-x-auto'>
								<div className='grid grid-cols-6 grid-col-[3fr_1fr_1fr] items-end gap-8 pb-4'>
									<p className='col-span-3'>{t('Option Values')}</p>
									<p className='col-span-2'>{t('Difference in price')}</p>
									<p>{t('Actions')}</p>
								</div>
								{option.values.map((value, valueIndex) => (
									<div
										key={value.tempId}
										className='grid grid-cols-6 grid-col-[3fr_1fr_1fr] items-end gap-8'
									>
										<div className='flex items-center gap-4 col-span-3 pb-4'>
											<div
												className='size-4 rounded-full flex'
												style={{ backgroundColor: value.value }}
											/>
											<TabbedFormField
												formStore={props.formStore}
												keys={[
													{ name: `options.${index}.values.${valueIndex}.nameEn`, label: 'En' },
													{
														name: `options.${index}.values.${valueIndex}.nameAr`,
														label: 'عربي',
													},
												]}
												renderer={(field) => <Input {...field} />}
											/>
										</div>
										<div className='pb-4 col-span-2'>
											<FormField
												formStore={props.formStore}
												name={`options.${index}.values.${valueIndex}.priceDifference`}
												render={(field) => (
													<Input
														{...field}
														value={field.value ?? 0}
														type='number'
														className='w-32'
													/>
												)}
											/>
										</div>
										<div className='pb-4'>
											<button
												type='button'
												onClick={() => {
													const newValues = option.values.filter(
														(item) => item.tempId !== value.tempId,
													);
													update(index, { ...option, values: newValues });
												}}
											>
												<TrashIcon />
											</button>
										</div>
									</div>
								))}
							</div>
						</div>
					</CustomAccordionItem>
				))}
			</Accordion>
		</div>
	);
}

/**
 * @param {import('src/app/utils/hooks/form').InferredZodSchema<typeof import('./utils').productOptionSchema>['option'][]} options
 * @param {number} currentIndex
 * @param {typeof options[0]['values']} currentVariation
 * @param {import('src/app/utils/hooks/form').InferredZodSchema<typeof import('./utils').productVariationSchema>['variation'][]} allVariations
 *
 * @description
 * This function will generate all possible combinations of the options values
 *
 */
function generateVariations(options, currentIndex = 0, currentVariation = [], allVariations = []) {
	if (currentIndex === options.length) {
		const forOptionValuesNames = currentVariation.map((v) => v.value).join(' ');
		const forOptionValuesTempIds = currentVariation.map((v) => v.tempId);
		allVariations.push({
			forOptionValuesNames,
			forOptionValuesTempIds,
			quantity: undefined,
			sku: undefined,
			price: undefined,
			discountPrice: undefined,
		});
		return;
	}

	const currentOption = options[currentIndex];
	const values = currentOption.values;

	for (const value of values) {
		currentVariation.push(value);
		generateVariations(options, currentIndex + 1, currentVariation, allVariations);
		currentVariation.pop();
	}

	return allVariations;
}

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>['formStore']} formStore
 */
function updateVariations(formStore) {
	const options = formStore.getValues('options');
	const variations = generateVariations(options);
	formStore.setValue('variations', variations);
}

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
function VariationsManager(props) {
	// It will be the every possible combination of the options values
	const { t } = useTranslation();
	// const { fields, append, remove, prepend, update } = useFieldArray({
	// 	control: props.formStore.control,
	// 	name: 'variations',
	// });
	const variations = useWatch({
		control: props.formStore.control,
		name: 'variations',
	});

	return (
		<div className='flex flex-col gap-4'>
			<Accordion type='multiple' className='flex flex-col gap-4'>
				{/* {fields.map((option, index) => (<CustomAccordionItem></CustomAccordionItem>)} */}
				{/* Test */}
			</Accordion>
		</div>
	);
}

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormOptionsAndVariationsSection(props) {
	const { t } = useTranslation();

	return (
		<Card>
			<CardHeader>
				<CardTitle>{t('Options & Variations')}</CardTitle>
				<CardDescription className='text-gray-400'>
					{t('Allow your customers to select from options such as Size and Color on your website.')}
				</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				{/* // ??? */}
				{/* // TODO: To be implemented  */}
				<OptionsList formStore={props.formStore} />
				<AddOptionManager
					handleSubmit={(values) => {
						const options = props.formStore.getValues('options');
						props.formStore.setValue('options', [...options, values.option]);
						updateVariations(props.formStore);
					}}
				/>
				<VariationsManager formStore={props.formStore} />
			</CardContent>
		</Card>
	);
}
