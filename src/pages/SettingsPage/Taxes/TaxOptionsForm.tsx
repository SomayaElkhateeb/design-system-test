import { useTranslation } from 'react-i18next';

import { TaxesProps } from './TaxesSettings';
import { CheckBox } from 'src/app/components/optimized';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import FormChoiceChips from '../CustomizationsSettings/comp/FormChoiceChips';

export default function TaxOptionsForm({ formStore }: TaxesProps) {
	const { t } = useTranslation();
	return (
		<div className='cardDetails-sharedClass p-5 flex-col-top-section-pages'>
			<h2 className='title'>{t('Tax applies to')}</h2>
			<div>
				<h3 className='title text-base'>{t('Tax applies to')}</h3>
				<SingleChoiceChips
					options={[t('Subtotal'), t('Subtotal + shipping')]}
					setSelected={(option: string) => {
						formStore.setValue('taxAppliesTo', option);
					}}
					selected={formStore.watch('taxAppliesTo')}
				/>
			</div>
			<CheckBox
				label={t('Include tax in product prices')}
				checked={formStore.watch('includeTaxInProductPrices')}
				handleOnChange={(option: string) => {
					formStore.setValue('includeTaxInProductPrices', option);
				}}
			/>
			<div>
				<h3 className='title text-base'>{t('Default Tax Class ')}</h3>
				<SingleChoiceChips
					options={[t('None'), t('Taxable goods')]}
					setSelected={(option: string) => {
						formStore.setValue('defaultTaxClass', option);
					}}
					selected={formStore.watch('defaultTaxClass')}
				/>
				<p className='paragraph text-subtitle'>
					This tax class will be applied automatically to any new added product.
				</p>
			</div>
			<div>
				<h3 className='title text-base'>{t('Tax display in checkout')}</h3>
				<SingleChoiceChips
					options={[t('Hide tax'), t('Show tax value'), t('Only show “included tax” text')]}
					setSelected={(option: string) => {
						formStore.setValue('taxDisplayInCheckout', option);
					}}
					selected={formStore.watch('taxDisplayInCheckout')}
				/>
			</div>
			<div>
				<h3 className='title text-base'>{t('Zone defines by')}</h3>
				<SingleChoiceChips
					options={[t('Shipping address'), t('Payment address')]}
					setSelected={(option: string) => {
						formStore.setValue('zoneDefinedBy', option);
					}}
					selected={formStore.watch('zoneDefinedBy')}
				/>
			</div>
			<FormChoiceChips<CustomizationsInterface>
				formStore={formStore}
				name='checkOutWith'
				label='Customer can check out with'
				options={['Email & phone', 'Email only', 'Phone only']}
			/>
		</div>
	);
}
