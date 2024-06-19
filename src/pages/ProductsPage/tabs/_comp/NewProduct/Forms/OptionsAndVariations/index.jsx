import { useTranslation } from 'react-i18next';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from 'src/app/components/ui/card';
import { Button } from 'src/app/components/optimized';
import { FaCirclePlus } from 'react-icons/fa6';
import { useId, useMemo, useState, useCallback } from 'react';
import { Accordion } from 'src/app/components/ui/accordion';
import CustomAccordionItem from 'src/app/components/ui/accordion/custom-item';
import {
	optionNameCollection,
	optionNameMap,
	optionTypeCollection,
	optionTypeMap,
	productOptionRawSchema,
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
import { TrashIcon } from 'lucide-react';
import { Checkbox } from '@mui/material';
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
import HorizontalBox from 'src/app/components/ui/horizontal-box';

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
			<HorizontalBox
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
					<SelectTrigger id={reactId} className='border-0 rounded-none'>
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
			</HorizontalBox>
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
 * 	handleSubmit: (values: import('./types').ProductOptionValues) => void;
 *  getOptionValuesNames: () => string[];
 * }} props
 */
function AddOptionManager(props) {
	const { t } = useTranslation();
	const [isAdding, setIsAdding] = useState(false);
	const { formStore } = useForm({
		schema: productOptionRawSchema,
		defaultValues: {
			option: {
				tempId: Date.now().toString() + Math.random().toString(),
				type: optionTypeMap.text,
				values: [],
			},
		},
		handleSubmit: props.handleSubmit,
	});

	const getOptionValuesNames = props.getOptionValuesNames;

	const filteredOptionNameCollection = useMemo(() => {
		const values = getOptionValuesNames();
		if (!values || values.length === 0) {
			return optionNameCollection;
		}

		const valuesMap = values.reduce((acc, val) => {
			acc[val] = true;
			return acc;
		}, /** @type {Record<string, boolean>} */ ({}));

		return optionNameCollection.filter((item) => {
			return !valuesMap[item];
		});
	}, [getOptionValuesNames]);

	if (!isAdding) {
		return (
			<Button
				variant='secondary'
				textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap bg-transparent border-title px-4 py-3 rounded-lg border'
				className='px-0 border-0 rounded-none'
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
									{filteredOptionNameCollection.map((item) => {
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
					onClick={async () => {
						const isValid = await formStore.trigger();

						if (!isValid) {
							return;
						}

						const values = formStore.getValues();
						props.handleSubmit(values);
						formStore.reset();
						setIsAdding(false);
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
	const { fields, remove, update } = useFieldArray({
		control: props.formStore.control,
		name: 'options',
	});

	return (
		<Accordion type='multiple' className='flex flex-col gap-4'>
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
											className='size-4 rounded-full flex translate-y-3/4'
											style={{ backgroundColor: value.value }}
										/>
										<TabbedFormField
											formStore={props.formStore}
											container={{ className: 'flex-grow' }}
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
											name={`options.${index}.values.${valueIndex}.differentInPrice`}
											container={{ className: 'flex-grow' }}
											render={(field) => (
												<Input {...field} value={field.value ?? 0} type='number' />
											)}
										/>
									</div>
									<div className='pb-4 flex'>
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
	);
}

/**
 * @param {import('src/app/utils/hooks/form').InferredZodSchema<typeof import('./utils').productOptionRawSchema>['option'][]} options
 * @param {number} currentIndex
 * @param {import('src/app/utils/hooks/form').InferredZodSchema<typeof productOptionRawSchema>['option']['values']} currentVariation
 * @param {import('src/app/utils/hooks/form').InferredZodSchema<typeof import('./utils').productVariationRawSchema>['variation'][]} allVariations
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
		return allVariations;
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
	const { t } = useTranslation();
	const { fields, remove } = useFieldArray({
		control: props.formStore.control,
		name: 'variations',
	});

	return (
		<div className='flex flex-col gap-4'>
			<Accordion type='multiple' className='flex flex-col gap-4'>
				{fields.map((option, index) => {
					const key = option.forOptionValuesTempIds.join('|');

					return (
						<CustomAccordionItem
							start={{ trigger: option.forOptionValuesNames }}
							end={{
								before: (
									<button type='button' onClick={() => remove(index)}>
										<TrashIcon />
									</button>
								),
							}}
							key={key}
							value={key}
						>
							<div className='flex flex-col gap-4'>
								<div className='flex flex-col gap-1'>
									<strong>{t('Stock')}</strong>
								</div>
								<div className='flex flex-col overflow-x-auto'>
									<div className='grid grid-cols-4 grid-col-4 items-end gap-8 pb-4'>
										<p>{t('Price')}</p>
										<p>
											{t('Discount price')} ({t('Optional')})
										</p>
										<p>{t('SKU')}</p>
										<p>{t('Quantity')}</p>
									</div>
									<div className='grid grid-cols-4 grid-col-4 items-end gap-8 pb-4'>
										<FormField
											formStore={props.formStore}
											container={{ className: 'flex-grow' }}
											name={`variations.${index}.price`}
											render={(field) => (
												<Input {...field} value={field.value ?? 0} type='number' />
											)}
										/>
										<FormField
											formStore={props.formStore}
											container={{ className: 'flex-grow' }}
											name={`variations.${index}.discountPrice`}
											render={(field) => (
												<Input {...field} value={field.value ?? 0} type='number' />
											)}
										/>
										<FormField
											formStore={props.formStore}
											container={{ className: 'flex-grow' }}
											name={`variations.${index}.sku`}
											render={(field) => <Input {...field} />}
										/>
										<FormField
											formStore={props.formStore}
											container={{ className: 'flex-grow' }}
											name={`variations.${index}.quantity`}
											render={(field) => (
												<HorizontalBox end={<>&infin;</>}>
													<Input {...field} />
												</HorizontalBox>
											)}
										/>
									</div>
								</div>
							</div>
						</CustomAccordionItem>
					);
				})}
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

	const getOptionValuesNames = useCallback(() => {
		const options = props.formStore.getValues('options');
		return options.map((option) => option.name);
	}, [props.formStore]);

	return (
		<Card id={props.id}>
			<CardHeader>
				<CardTitle>{t('Options & Variations')}</CardTitle>
				<CardDescription className='text-gray-400'>
					{t('Allow your customers to select from options such as Size and Color on your website.')}
				</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				<OptionsList formStore={props.formStore} />
				<AddOptionManager
					getOptionValuesNames={getOptionValuesNames}
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
