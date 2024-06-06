import { Checkbox } from '@mui/material';
import { useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import Button from '../../../../Buttons/Button';
import { Dialog, DialogContent, DialogTrigger } from 'src/app/components/ui/dialog';
import { FaCirclePlus } from 'react-icons/fa6';
import { Label } from 'src/app/components/ui/label';
import AddBranch from 'src/app/components/page/SettingPage/BranchesSettings/AddBranch/AddBranch';
import { ScrollArea, ScrollBar } from 'src/app/components/ui/scroll-area';

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
function AddBranchManager(props) {
	const { t } = useTranslation();

	return (
		<Dialog>
			<DialogTrigger>
				<Button
					variant='secondary'
					textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
					className='px-0 border-0'
				>
					<FaCirclePlus className='size-5' />
					{t('Add New branch')}
				</Button>
			</DialogTrigger>
			<DialogContent>
				<ScrollArea className='w-full max-h-[90dvh]'>
					<AddBranch
						handleSubmit={(values) => {
							// console.log(values);
						}}
						hideHeader
					/>
					<ScrollBar />
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
}

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
function ProductInventoryBranches(props) {
	const { t } = useTranslation();
	const { fields, append, remove, prepend } = useFieldArray({
		control: props.formStore.control,
		name: 'branches',
	});

	return (
		<>
			<Label className='font-semibold capitalize'>{t('Inventory branches')}</Label>

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
									name={`branches.${index}.name`}
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
									name={`branches.${index}.quantity`}
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

			<AddBranchManager formStore={props.formStore} />
		</>
	);
}

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormStockSection(props) {
	const { t } = useTranslation();

	return (
		<Card id={props.id}>
			<CardHeader>
				<CardTitle>{t('Stock')}</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				<FormField
					formStore={props.formStore}
					name='quantity'
					label={t('Price')}
					render={(field) => <Input {...field} type='number' />}
				/>
				<FormField
					formStore={props.formStore}
					name='canContinueSellingWhenOutOfStock'
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
				<ProductInventoryBranches formStore={props.formStore} />
			</CardContent>
		</Card>
	);
}
