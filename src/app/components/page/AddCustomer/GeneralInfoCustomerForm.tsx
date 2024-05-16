import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { addcustomerSettingsInterface } from 'src/pages/AddCustomerPage/AddCustomerPage';
import SingleChoiceChips from '../../optimized/ChoiceChips/SingleChoiceChips';
import FormField from '../../ui/form/field';
import { Input } from '../../ui/input';
import CustomPhoneInput from '../../optimized/UiKits/CustomPhoneInput';
import CustomAutoComplete from '../../optimized/InputsFields/AutoCompleteMultiple';
import { CheckBox } from '../../optimized';
export interface selectItemsInterface {
	id: string;
	name: string;
}
const selectItems = [
	{ id: '1', name: 'Dress' },
	{ id: '2', name: 'Fashion' },
];
export default function GeneralInfoCustomerForm({
	formStore,
}: {
	formStore: UseFormReturn<addcustomerSettingsInterface>;
}) {
	//  hooks
	const { t } = useTranslation();
	const handleBranchType = (option: string) => {
		formStore.setValue('humanType', option);
	};
	// ///////////////////////////
	const handelAutoCompleteError = () => {
		return (
			formStore.watch('groupCustomer').length === 0 &&
			formStore.formState.isSubmitted && (
				<p className='global_error'>{'choose group customer required'}</p>
			)
		);
	};

	return (
		<div className='global-cards gap-[1.3rem]'>
			<h2 className='title'>{t('General Info')}</h2>

			<div className='flex-col-top-section-pages md:w-[65%]'>
				<SingleChoiceChips
					options={[t('Male'), t('Female')]}
					setSelected={handleBranchType}
					selected={formStore.watch('humanType')}
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
				<div className='flex-col-top-section-pages gap-0'>
					<FormField
						formStore={formStore}
						name='groupCustomer'
						label={t('Meta keywords')}
						render={(field) => (
							<CustomAutoComplete<selectItemsInterface>
								placeholder={'Select or add new'}
								getvalue={(value) => formStore.setValue('groupCustomer', value)}
								name='groupCustomer'
								array={selectItems}
								MainValue={formStore.watch('groupCustomer')}
							/>
						)}
					/>
					{handelAutoCompleteError()}
				</div>
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
						<h2 className='title text-sm'>{t('Email subscribtion')}</h2>
						<p className='subtitle text-sm'>{t('Customer agreed to receive marketing emails')}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
