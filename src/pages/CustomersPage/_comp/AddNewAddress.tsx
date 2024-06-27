import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckBox, SubHeader } from 'src/app/components/optimized';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
import {
	SubHeaderDefaultBtns,
	SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { countries } from 'src/pages/SettingsPage/BranchesSettings/AddBranch/BranchInfo';
import GoogleMapComponent from 'src/app/components/ui/GoogleMapComponent';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';
import { useForm } from 'src/app/utils/hooks/form';
import useCustomHookAddCustomerAddressForm, {
	AddAddressInterface,
} from 'src/pages/CustomersPage/tabs/AllCustomers/_comp/_addAddresse/_hook/HookForAddCustomerAddress';

export default function AddNewAddressCustomer() {
	//  hooks
	const { t } = useTranslation();
	const [selectedOption, setSelectedOption] = useState('Add manually');
	const [locationEnabled, setLocationEnabled] = useState<boolean>(false);
	const [isDisablePickButton, setDisablePickButton] = useState<boolean>(false);
	const [sendGift, setSendGift] = useState(false);

	const handleSubmit = (values: AddAddressInterface) => {
		console.log(values);
	};

	//  custom hook
	const { handelDefaultValue, AddCustomerAddressSchema } = useCustomHookAddCustomerAddressForm(
		sendGift,
		selectedOption,
	);

	const { formStore, onSubmit } = useForm({
		schema: AddCustomerAddressSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});

	const handleAddressOption = (option: string) => {
		setSelectedOption(option);
	};

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-global'>
				<SubHeader title={t('Add new address')}>
					<SubHeaderDefaultBtns onSubmit={onSubmit} />
				</SubHeader>
				<div className='grid gap-5 lg:grid-cols-3 custom_container'>
					<div className='global-cards lg:col-span-2 '>
						<SingleChoiceChips
							options={['Add manually', 'Use a map']}
							setSelected={handleAddressOption}
							selected={selectedOption}
						/>

						<CheckBox
							checked={sendGift}
							handleOnChange={() => setSendGift(!sendGift)}
							label={t('Send as a gift')}
						/>
						{sendGift && (
							<FormField
								formStore={formStore}
								name='giftName'
								label={t('Gift receiver name')}
								render={(field) => <Input {...field} placeholder={''} />}
							/>
						)}

						{selectedOption === 'Add manually' && (
							<section className='grid gap-4'>
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
														{country.label}
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
										<div className='flex'>
											<Select
												onValueChange={field.onChange}
												value={field.value}
												required={field.required}
												name={field.name}
											>
												<SelectTrigger
													onBlur={field.onBlur}
													disabled={field.disabled}
													id={field.id}
												>
													<SelectValue placeholder='Select option' />
												</SelectTrigger>
												<SelectContent>
													{countries.map((country) => (
														<SelectItem key={country.value} value={country.value}>
															{country.label}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</div>
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
									name='landmark'
									label={t('Landmark')}
									render={(field) => <Input {...field} placeholder={'landmark'} />}
								/>
							</section>
						)}

						{selectedOption !== 'Add manually' && (
							<GoogleMapComponent
								setLocationEnabled={setLocationEnabled}
								setDisablePickButton={setDisablePickButton}
								height='300px'
							/>
						)}

						<FormField
							formStore={formStore}
							name='building'
							label={t('Building')}
							render={(field) => <Input {...field} placeholder={'building'} />}
						/>

						<FormField
							formStore={formStore}
							label={t('Phone number')}
							name='PhoneNumber'
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
				<SubHeaderMobileBtns onSubmit={onSubmit} />
			</form>
		</Form>
	);
}
