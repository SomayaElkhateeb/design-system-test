import { useTranslation } from 'react-i18next';

import FormChoiceChips from '../../CustomizationsSettings/comp/FormChoiceChips';
import { BankTransferTypes, PaymentFormProps } from './useBankTransfer';
import CardHeader from 'src/app/components/optimized/UiKits/CardHeader';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import ApplyToOptions from './ApplyToOptions';

export default function ActivateConditions({ formStore }: PaymentFormProps) {
	const { t } = useTranslation();
	return (
		<div className='global-cards grid grid-cols-2'>
			<CardHeader
				title='Activate if'
				className='col-span-2'
				description='you’ll need this If you want this method to activate with certain conditions, otherwise keep defaults'
			/>
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
					<FormChoiceChips<BankTransferTypes>
						formStore={formStore}
						name='applyWith'
						label='Apply with'
						options={['All', 'Specific products', 'Specific customers']}
					/>
					<ApplyToOptions applyTo={formStore.watch('applyWith')} />
				</div>
			</div>
		</div>
	);
}
