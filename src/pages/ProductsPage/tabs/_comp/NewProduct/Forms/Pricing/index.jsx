import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { Checkbox } from '@mui/material';
import HorizontalBox from 'src/app/components/ui/horizontal-box';
import ProfitField from './_comp/ProfitField';
import BulkPricesManager from './_comp/BulkPricesManager';

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