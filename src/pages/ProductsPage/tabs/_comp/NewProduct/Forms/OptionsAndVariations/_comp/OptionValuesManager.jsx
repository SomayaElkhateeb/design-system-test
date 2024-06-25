import { useId, useMemo, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaCirclePlus } from 'react-icons/fa6';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from 'src/app/components/ui/dialog';
import { FormLabel } from 'src/app/components/ui/form';
import HorizontalBox from 'src/app/components/ui/horizontal-box';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';
import {
	optionNameMap
} from '../utils';

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
 * @param {{ formStore: import('../types').ProductOptionFormStore<TFormStore>; }} props
 */
export default function OptionValuesManager(props) {
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
