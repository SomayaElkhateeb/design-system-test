import { Fragment } from 'react';
import { Checkbox } from '@mui/material';
import { useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import Button from '../../../Buttons/Button';
import { FaCirclePlus } from 'react-icons/fa6';
import { Label } from 'src/app/components/ui/label';

/** @param {{ formStore: import("..").ProductFormStore; }} props */
function InventoryBranches(props) {
	const { t } = useTranslation();
	const { fields, append, remove, prepend } = useFieldArray({
		control: props.formStore.control,
		name: 'generalInfo.branches',
	});

	return (
		<>
			<Label className='font-semibold '>{t('Inventory Branches')}</Label>

			<table>
				<thead>
					<tr className='text-left rtl:text-right'>
						<th className='py-2 font-medium w-10/12'>{t('Branch Name')}</th>
						<th className='py-2 font-medium w-2/12'>{t('Quantity')}</th>
					</tr>
				</thead>
				<tbody>
					{fields.map((field, index) => (
						<tr key={field.id} className='border-y'>
							<td className='w-10/12 py-2'>
								<FormField
									formStore={props.formStore}
									name={`generalInfo.branches.${index}.name`}
									render={(field) => (
										<Input
											{...field}
											value={field.value + ''}
											className='border-0'
											placeholder={t('Branch Name')}
										/>
									)}
								/>
							</td>
							<td className='w-2/12 py-2'>
								<FormField
									formStore={props.formStore}
									name={`generalInfo.branches.${index}.quantity`}
									render={(field) => (
										<Input
											{...field}
											value={
												typeof field.value === 'number' || typeof field.value === 'string'
													? field.value
													: 0
											}
											type='number'
										/>
									)}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<Button
				variant='secondary'
				textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
				className='px-0 border-0'
			>
				<FaCirclePlus className='size-5' />
				{t('AddAdd New branch')}
			</Button>
		</>
	);
}

/** @param {{ formStore: import("..").ProductFormStore; }} props */
export default function ProductFormStockSection(props) {
	const { t } = useTranslation();

	return (
		<Card>
			<CardHeader>
				<CardTitle>{t('Stock')}</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				<FormField
					formStore={props.formStore}
					name='generalInfo.quantity'
					label={t('Price')}
					render={(field) => <Input {...field} type='number' />}
				/>
				<FormField
					formStore={props.formStore}
					name='generalInfo.canContinueSellingWhenOutOfStock'
					label={{
						children: t('Can continue selling when out of stock'),
						className: 'self-center mt-0.5',
					}}
					container={{ className: 'grid grid-col-1' }}
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
				{/* ??? */}
				{/* TODO: to be implemented */}
				<InventoryBranches formStore={props.formStore} />
			</CardContent>
		</Card>
	);
}
