import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from 'src/app/components/ui/card';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';

/** @param {{ formStore: import("..").ProductFormStore; }} props */
function ProfitField(props) {
	const { t } = useTranslation();
	const price = useWatch({ name: 'generalInfo.price' });
	const discountPrice = useWatch({ name: 'generalInfo.discountPrice' });
	const costPrice = useWatch({ name: 'generalInfo.costPrice' });

	const profit = Number(price || 0) + Number(costPrice || 0) - Number(discountPrice || 0);

	return (
		<FormField
			formStore={props.formStore}
			name='generalInfo.price'
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

/** @param {{ formStore: import("..").ProductFormStore; }} props */
export default function ProductFormPricingSection(props) {
	const { t } = useTranslation();

	return (
		<Card>
			<CardHeader>
				<CardTitle>{t('Pricing')}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					<FormField
						formStore={props.formStore}
						name='generalInfo.price'
						label={t('Price')}
						render={(field) => <Input {...field} type='number' />}
					/>
					<FormField
						formStore={props.formStore}
						name='generalInfo.discountPrice'
						label={`${t('Discount price')} (${t('Optional')})`}
						render={(field) => <Input {...field} type='number' />}
					/>
					<FormField
						formStore={props.formStore}
						name='generalInfo.costPrice'
						label={`${t('Cost price')} (${t('Optional')})`}
						render={(field) => <Input {...field} type='number' />}
					/>
					<ProfitField formStore={props.formStore} />
				</div>
			</CardContent>
		</Card>
	);
}
