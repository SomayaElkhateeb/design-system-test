import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from '../../ui/form/field';
import { Input } from '../../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import CustomPhoneInput from '../../optimized/UiKits/CustomPhoneInput';
import { countries } from '../SettingPage/BranchesSettings/AddBranch/BranchInfo';
import { addCustomerInterface } from './HookForAddCustomerForm';
export default function PrimaryAddresseForm({
	formStore,
}: {
	formStore: UseFormReturn<addCustomerInterface>;
}) {
	//  hooks
	const { t } = useTranslation();
	return (
		<div className='global-cards gap-[1.3rem]'>
			<h2 className='title'>{t('Add primary address')}</h2>
			<div className='flex-col-top-section-pages md:w-[65%]'>
				<FormField
					formStore={formStore}
					name='fullNameAddresse'
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
					name='addressePhoneNumber'
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
