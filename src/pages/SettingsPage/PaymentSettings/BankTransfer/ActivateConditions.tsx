import { useTranslation } from 'react-i18next';

import FormChoiceChips from '../../CustomizationsSettings/comp/FormChoiceChips';
import { BankTransferTypes, PaymentFormProps } from './useBankTransfer';
import CardHeader from 'src/app/components/optimized/UiKits/CardHeader';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import ApplyToOptionsBankTransfer from './ApplyToOptions';

export default function ActivateConditions({ formStore }: PaymentFormProps) {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='global-cards grid lg:grid-cols-2 '>
			<CardHeader
				title='Activate if'
				className='col-span-2'
				description='you\"ll need this If you want this method to activate with certain conditions, otherwise keep defaults'
			/>
			<div className='  flex-col-top-section-pages '>
				<FormField
					formStore={formStore}
					name='price'
					label={t('Price is more than')}
					render={(field) => <Input type='number' {...field} />}
				/>
				<FormField
					formStore={formStore}
					name='orderItems'
					label={t('Order items are more than')}
					render={(field) => <Input type='number' {...field} />}
				/>

				<FormChoiceChips<BankTransferTypes>
					formStore={formStore}
					name='applyWith'
					label='Apply with'
					options={['All', 'Specific products', 'Specific customers']}
				/>

				<ApplyToOptionsBankTransfer formStore={formStore} applyTo={formStore.watch('applyWith')} />
			</div>
		</div>
	);
}
