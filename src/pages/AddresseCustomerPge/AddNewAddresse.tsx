import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CheckBox, HeaderSettings } from 'src/app/components/optimized';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
import useCustomHookAddCustomerAddresseForm, { AddaddresseInterface } from 'src/app/components/page/CustomerAddresseForm/HookForAddCustomerAddresse';
import { countries } from 'src/app/components/page/SettingPage/BranchesSettings/AddBranch/BranchInfo';
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
import { z } from 'zod';



export default function AddNewAddresseCustomer() {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [selectedOption, setSelectedOption] = useState('Add manually');
	const [sendGift, setSendGift] = useState(false);
	// ///////////////////
	// //////////////////
	const handleSubmit = (values: AddaddresseInterface) => {
		console.log(values);
		
	};

	//  custom hook
	const { handelDefaultValue, AddCustomerAdddrsseSchema } = useCustomHookAddCustomerAddresseForm(
		sendGift,
		selectedOption,
	);
	// /////////////////
	// /////////////////
	const { formStore, onSubmit } = useForm({
		schema: AddCustomerAdddrsseSchema,
		handleSubmit: handleSubmit,
		defaultValues: handelDefaultValue(),
	});
	// ///////////////////
	// //////////////////
	const handleAddressOption = (option: string) => {
		setSelectedOption(option);
	};
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages'>
				<HeaderSettings
					submit
					variant='settingTwoBtns'
					title={t('Add new address')}
					btn1={{
						text: t('Discard'),
						onClick: () => {
							navigate(-1);
						},
					}}
					btn2={{
						text: t('Save Changes'),
						onClick: () => {},
					}}
				/>
				<div className='grid gap-5 lg:grid-cols-3 container mx-auto'>
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
															{country.name}
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
			</form>
		</Form>
	);
}
