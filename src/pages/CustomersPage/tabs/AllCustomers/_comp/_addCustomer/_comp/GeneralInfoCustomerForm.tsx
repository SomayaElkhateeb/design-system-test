import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CheckBox } from 'src/app/components/optimized';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
import SpecificAutoCompleteInput from 'src/app/components/ui/SpecificAutoCompleteInput';
import FormChoiceChips from 'src/app/components/ui/form/FormChoiceChips';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { AddCustomerPageSchemaValues } from '../_hook/HookForAddCustomerForm';

export default function GeneralInfoCustomerForm({
	formStore,
}: {
	formStore: UseFormReturn<AddCustomerPageSchemaValues>;
}) {
	//  hooks
	const { t } = useTranslation();

	return (
		<div className='global-cards gap-[1.3rem]'>
			<h2 className='title'>{t('General Info')}</h2>

			<div className='flex-col-global md:w-[65%]'>
				<FormChoiceChips<AddCustomerPageSchemaValues>
					formStore={formStore}
					name='gender'
					label='Customer can check out with'
					options={['Male', 'Female']}
				/>
				<FormField
					formStore={formStore}
					name='first_name'
					label={t('First name')}
					render={(field) => <Input {...field} placeholder={''} />}
				/>
				<FormField
					formStore={formStore}
					name='last_name'
					label={t('Last name')}
					render={(field) => <Input {...field} placeholder={''} />}
				/>
				<FormField
					formStore={formStore}
					name='email'
					label={t('Email')}
					render={(field) => <Input {...field} placeholder={''} />}
				/>

				<SpecificAutoCompleteInput<AddCustomerPageSchemaValues>
					name='groupMeta'
					label={t('Meta keywords')}
					formStore={formStore}
				/>
				<FormField
					formStore={formStore}
					name='phone'
					label={t('Phone Number')}
					render={(field) => (
						<CustomPhoneInput
							value={field.value}
							onHandleChange={field.onChange}

							// isLoading={isLoading}
						/>
					)}
				/>

				<div className='flex-row-global-items-start gap-3'>
					<FormField
						formStore={formStore}
						name='emailSubescribe'
						render={(field) => (
							<CheckBox
								checked={formStore.watch('emailSubescribe')}
								handleOnChange={field.onChange}
							/>
						)}
					/>
					<div className='flex-col-global gap-[.25rem]'>
						<h2 className='title text-sm'>{t('Email subscription')}</h2>
						<p className='subtitle text-sm'>{t('Customer agreed to receive marketing emails')}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
