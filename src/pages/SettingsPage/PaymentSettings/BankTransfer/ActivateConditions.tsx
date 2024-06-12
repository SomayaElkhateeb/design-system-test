import { useTranslation } from 'react-i18next';
import CardHeader from 'src/app/components/optimized/UiKits/CardHeader';
import FormChoiceChips from 'src/app/components/ui/form/FormChoiceChips';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import ApplyToOptionsBankTransfer from './ApplyToOptions';
import { BankTransferTypes, PaymentFormProps } from './useBankTransfer';

export default function ActivateConditions({ formStore }: PaymentFormProps) {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='global-cards grid lg:grid-cols-2 '>
			<CardHeader
				title='Activate if'
				className='col-span-2'
				description="you\'ll need this If you want this method to activate with certain conditions, otherwise keep defaults"
			/>
			<div className='  flex-col-global '>
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
