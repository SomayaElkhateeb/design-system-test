import { Checkbox } from '@mui/material';
import { useFieldArray, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import Button from '../../../../Buttons/Button';
import { FaCirclePlus } from 'react-icons/fa6';
import { TrashIcon } from 'lucide-react';
import HorizontalBox from 'src/app/components/ui/horizontal-box';

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
function BulkPricesManager(props) {
	const { t } = useTranslation();
	const { fields, append, remove, prepend } = useFieldArray({
		control: props.formStore.control,
		name: 'bulkPrices',
	});

	if (fields.length === 0) {
		return (
			<Button
				variant='secondary'
				textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
				className='px-0 border-0 rounded-none'
				onClick={() =>
					append({
						tempId: (Date.now() + Math.random()).toString(36).substring(2),
						from: 0,
						to: 10,
						currency: 'SAR',
					})
				}
			>
				<FaCirclePlus className='size-5' />
				{t('Add Bulk Pricing')}
			</Button>
		);
	}

	return (
		<>
			<div className='flex flex-col gap-4 w-fit'>
				<p className='font-medium'>{t('Bulk pricing')}</p>

				{fields.map((field, index) => (
					<div key={field.tempId} className='flex flex-wrap gap-4 items-center'>
						<div className='grid grid-cols-2'>
							<FormField
								formStore={props.formStore}
								name={`bulkPrices.${index}.from`}
								label={t('From')}
								render={(field) => <Input {...field} type='number' className='w-fit' />}
							/>
							<FormField
								formStore={props.formStore}
								name={`bulkPrices.${index}.to`}
								label={t('To')}
								render={(field) => <Input {...field} type='number' className='w-fit' />}
							/>
						</div>
						<FormField
							formStore={props.formStore}
							name={`bulkPrices.${index}.currency`}
							label={t('Price')}
							render={(field) => <Input {...field} className='w-fit' />}
						/>
						<Button
							variant='secondary'
							textClassName='flex items-end justify-center gap-1.5 whitespace-nowrap'
							className='px-0 border-0 rounded-none'
							onClick={() => remove(index)}
						>
							<TrashIcon className='size-5' />
							<span className='sr-only'>{t('Remove')}</span>
						</Button>
					</div>
				))}
				<Button
					variant='secondary'
					textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
					className='px-0 border-0 rounded-none'
					onClick={() =>
						append({
							tempId: (Date.now() + Math.random()).toString(36).substring(2),
							from: 0,
							to: 10,
							currency: 'SAR',
						})
					}
				>
					<FaCirclePlus className='size-5' />
					{t('Add More')}
				</Button>
			</div>
			<Button
				variant='secondary'
				textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
				className='px-0 border-0 rounded-none'
				onClick={() => {
					props.formStore.setValue('bulkPrices', []);
				}}
			>
				&#x2717; {t('Remove bulk pricing')}
			</Button>
		</>
	);
}

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
function ProfitField(props) {
	const { t } = useTranslation();
	const price = useWatch({ name: 'price', control: props.formStore.control });
	const discountPrice = useWatch({ name: 'discountPrice', control: props.formStore.control });
	const costPrice = useWatch({ name: 'costPrice', control: props.formStore.control });

	const profit = Number(price || 0) - Number(costPrice || 0) - Number(discountPrice || 0);

	return (
		<FormField
			formStore={props.formStore}
			name='price'
			label={t('Profit')}
			render={() => (
				<HorizontalBox start={<span className='pe-2'>SAR</span>}>
					<Input
						value={profit}
						type='number'
						disabled
						readOnly
						className='border-0 rounded-none grayscale brightness-[0.85]'
					/>
				</HorizontalBox>
			)}
		/>
	);
}

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormPricingSection(props) {
	const { t } = useTranslation();

	return (
		<Card id={props.id}>
			<CardHeader>
				<CardTitle>{t('Pricing')}</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					<FormField
						formStore={props.formStore}
						name='price'
						label={t('Price')}
						render={(field) => (
							<HorizontalBox start='SAR' startSeparator>
								<Input {...field} type='number' className='border-0 rounded-none' />
							</HorizontalBox>
						)}
					/>
					<FormField
						formStore={props.formStore}
						name='discountPrice'
						label={`${t('Discount price')} (${t('Optional')})`}
						render={(field) => (
							<HorizontalBox start='SAR' startSeparator>
								<Input {...field} type='number' className='border-0 rounded-none' />
							</HorizontalBox>
						)}
					/>
					<FormField
						formStore={props.formStore}
						name='costPrice'
						label={`${t('Cost price')} (${t('Optional')})`}
						render={(field) => (
							<HorizontalBox start='SAR'>
								<Input {...field} type='number' className='border-0 rounded-none' />
							</HorizontalBox>
						)}
					/>
					<ProfitField formStore={props.formStore} />
					<FormField
						formStore={props.formStore}
						name='isTaxable'
						label={{
							children: t('Taxable product'),
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
				</div>
				<BulkPricesManager formStore={props.formStore} />
			</CardContent>
		</Card>
	);
}
