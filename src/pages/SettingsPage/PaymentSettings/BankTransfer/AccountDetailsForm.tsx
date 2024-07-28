import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import CardHeader from 'src/app/components/optimized/UiKits/CardHeader';
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
	SelectItem,
} from 'src/app/components/ui/select';
import { Input } from 'src/app/components/ui/input';
import { PaymentFormProps } from './useBankTransfer';

export default function AccountDetailsForm({ formStore }: PaymentFormProps) {
	//  hooks
	const { t } = useTranslation();
	const banks = ['Riyadh', 'Al Ahly', 'Al-Rajhi', 'Al Enmaa', 'El Belad', 'SAB', 'ANB', 'QNB'];

	return (
		<div className='global-cards grid grid-cols-2'>
			<CardHeader
				title='Account details'
				className='col-span-2'
				description='Fill in your account details, for customers to pay through'
			/>
			<div className='grid gap-4 col-span-2 xl:col-span-1'>
				<FormField
					formStore={formStore}
					name='account_number'
					label={t('Account number')}
					render={(field) => <Input type='number' {...field} />}
				/>
				<FormField
					formStore={formStore}
					name='account_name'
					label={t('Account name')}
					render={(field) => <Input {...field} placeholder={'Sary'} />}
				/>
				<FormField
					formStore={formStore}
					name='bank_name'
					label={t('Bank name')}
					render={(field) => (
						<Select
							onValueChange={field.onChange}
							value={field.value}
							required={field.required}
							name={field.name}
						>
							<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
								<SelectValue placeholder={t('Select option')} />
							</SelectTrigger>
							<SelectContent>
								{banks.map((bank, index) => (
									<SelectItem key={index} value={bank}>
										{bank}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>
				<FormField
					formStore={formStore}
					name='iban'
					label={t('IBAN')}
					render={(field) => <Input {...field} />}
				/>
				<FormField
					formStore={formStore}
					name='additional_data'
					label={t('Additional details & instructions')}
					render={(field) => <Input {...field} />}
				/>
			</div>
		</div>
	);
}
