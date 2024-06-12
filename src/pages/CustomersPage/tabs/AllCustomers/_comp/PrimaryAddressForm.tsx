import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
import { countries } from 'src/app/components/page/SettingPage/BranchesSettings/AddBranch/BranchInfo';
import { AddCustomerPageSchemaValues } from './AddCustomerPageSchema';
export default function PrimaryAddressForm({
	formStore,
}: {
	formStore: UseFormReturn<AddCustomerPageSchemaValues>;
}) {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='global-cards gap-[1.3rem]'>
			<h2 className='title'>{t('Add primary address')}</h2>
			<div className='flex-col-global md:w-[65%]'>
				<FormField
					formStore={formStore}
					name='fullNameAddress'
					label={t('Full name')}
					render={(field) => <Input {...field} placeholder={''} />}
				/>

				<FormField
					formStore={formStore}
					name='countryName'
					label={t('Country')}
					render={(field) => (
						<Select
							onValueChange={field.onChange}
							value={field.value}
							required={field.required}
							name={field.name}
						>
							<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
								<SelectValue placeholder='Select option' />
							</SelectTrigger>
							<SelectContent>
								{countries.map((country) => (
									<SelectItem key={country.value} value={country.value}>
										{country.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>
				<FormField
					formStore={formStore}
					name='cityName'
					label={t('City')}
					render={(field) => (
						<Select
							onValueChange={field.onChange}
							value={field.value}
							required={field.required}
							name={field.name}
						>
							<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
								<SelectValue placeholder='Select option' />
							</SelectTrigger>
							<SelectContent>
								{countries.map((country) => (
									<SelectItem key={country.value} value={country.value}>
										{country.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>

				<FormField
					formStore={formStore}
					name='area'
					label={t('Area / District')}
					render={(field) => <Input {...field} placeholder={'area'} />}
				/>
				<FormField
					formStore={formStore}
					name='street'
					label={t('Street')}
					render={(field) => <Input {...field} placeholder={'street'} />}
				/>

				<FormField
					formStore={formStore}
					name='building'
					label={t('Building')}
					render={(field) => <Input {...field} placeholder={'building'} />}
				/>
				<FormField
					formStore={formStore}
					name='landmark'
					label={t('Landmark')}
					render={(field) => <Input {...field} placeholder={'landmark'} />}
				/>
				<FormField
					formStore={formStore}
					name='AddressPhoneNumber'
					label={t('Phone Number')}
					render={(field) => (
						<CustomPhoneInput
							value={field.value}
							onHandleChange={field.onChange}

							// isLoading={isLoading}
						/>
					)}
				/>
			</div>
		</div>
	);
}
