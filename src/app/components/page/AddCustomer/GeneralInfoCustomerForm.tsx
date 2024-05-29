import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from '../../ui/form/field';
import { Input } from '../../ui/input';
import CustomPhoneInput from '../../optimized/UiKits/CustomPhoneInput';
import CustomAutoComplete from '../../optimized/InputsFields/AutoCompleteMultiple';
import { CheckBox } from '../../optimized';
import { addCustomerInterface } from './HookForAddCustomerForm';
import FormChoiceChips from 'src/pages/SettingsPage/CustomizationsSettings/comp/FormChoiceChips';
import SpecificAutoCompleteInput from '../discount/Selectors/SpecificAutoCompleteInput';
export interface selectItemsInterface {
	id: string;
	name: string;
}

export default function GeneralInfoCustomerForm({
	formStore,
}: {
	formStore: UseFormReturn<addCustomerInterface>;
}) {
	//  hooks
	const { t } = useTranslation();

	// ///////////////////////////

	return (
		<div className='global-cards gap-[1.3rem]'>
			<h2 className='title'>{t('General Info')}</h2>

			<div className='flex-col-top-section-pages md:w-[65%]'>
				<FormChoiceChips<addCustomerInterface>
					formStore={formStore}
					name='humanType'
					label='Customer can check out with'
					options={['Male', 'Female']}
				/>
				<FormField
					formStore={formStore}
					name='fullName'
					label={t('Full name')}
					render={(field) => <Input {...field} placeholder={''} />}
				/>
				<FormField
					formStore={formStore}
					name='email'
					label={t('Email')}
					render={(field) => <Input {...field} placeholder={''} />}
				/>

				<SpecificAutoCompleteInput<addCustomerInterface>
					name='groupMeta'
					label={t('Meta keywords')}
					formStore={formStore}
				/>
				<FormField
					formStore={formStore}
					name='PhoneNumber'
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
					<div className='flex-col-top-section-pages gap-[.25rem]'>
						<h2 className='title text-sm'>{t('Email subscription')}</h2>
						<p className='subtitle text-sm'>{t('Customer agreed to receive marketing emails')}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
