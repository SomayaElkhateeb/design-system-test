import { Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import ProductInventoryBranches from './_comp/ProductInventoryBranches';

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
