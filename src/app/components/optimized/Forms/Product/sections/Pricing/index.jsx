import { Checkbox } from '@mui/material';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import Button from '../../../../Buttons/Button';
import { FaCirclePlus } from 'react-icons/fa6';

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
function ProfitField(props) {
	const { t } = useTranslation();
	const price = useWatch({ name: 'price', control: props.formStore });
	const discountPrice = useWatch({ name: 'discountPrice', control: props.formStore });
	const costPrice = useWatch({ name: 'costPrice', control: props.formStore });

	const profit = Number(price || 0) + Number(costPrice || 0) - Number(discountPrice || 0);

	return (
		<FormField
			formStore={props.formStore}
			name='price'
			label={t('Profit')}
			render={() => (
				<Input
					value={profit}
					type='number'
					disabled
					readOnly
					className='grayscale brightness-[0.85]'
				/>
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
		<Card>
			<CardHeader>
				<CardTitle>{t('Pricing')}</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col gap-4'>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					<FormField
						formStore={props.formStore}
						name='price'
						label={t('Price')}
						render={(field) => <Input {...field} type='number' />}
					/>
					<FormField
						formStore={props.formStore}
						name='discountPrice'
						label={`${t('Discount price')} (${t('Optional')})`}
						render={(field) => <Input {...field} type='number' />}
					/>
					<FormField
						formStore={props.formStore}
						name='costPrice'
						label={`${t('Cost price')} (${t('Optional')})`}
						render={(field) => <Input {...field} type='number' />}
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
				{/* ??? */}
				{/* TODO: to be implemented */}
				<Button
					variant='secondary'
					textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap'
					className='px-0 border-0'
				>
					<FaCirclePlus className='size-5' />
					{t('Add Bulk Pricing')}
				</Button>
			</CardContent>
		</Card>
	);
}
