import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Input } from 'src/app/components/ui/input';
import FormField from 'src/app/components/ui/form/field';
import { FormProps } from './ActivateBankTransfer';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import SpecificProducts from 'src/app/components/page/discount/Selectors/SpecificProducts';
import SpecificCustomers from 'src/app/components/page/discount/Selectors/SpecificCustomers';

export default function ActivateConditions({ formStore }: FormProps) {
	const { t } = useTranslation();
	const [selectedOption, setSelectedOption] = useState('All');

	return (
		<div className='cardDetails-sharedClass p-5 flex-col-top-section-pages grid grid-cols-2'>
			<div className='col-span-2'>
				<h2 className='title  mb-2'>{t('Activate if')}</h2>
				<p className='paragraph'>
					{t(
						'you’ll need this If you want this method to activate with certain conditions, otherwise keep defaults',
					)}
				</p>
			</div>
			<div className='grid gap-4 col-span-2 xl:col-span-1'>
				<FormField
					formStore={formStore}
					name='price'
					label={t('Price is more than')}
					render={(field) => <Input {...field} />}
				/>
				<FormField
					formStore={formStore}
					name='orderItems'
					label={t('Order items are more than')}
					render={(field) => <Input {...field} />}
				/>
				<div>
					<SingleChoiceChips
						options={[t('All'), t('Specific products'), t('Specific customers')]}
						setSelected={(option: string) => setSelectedOption(option)}
						selected={selectedOption}
					/>
					{selectedOption === t('Specific products') ? (
						<SpecificProducts />
					) : selectedOption === t('Specific customers') ? (
						<SpecificCustomers />
					) : null}
				</div>
			</div>
		</div>
	);
}

