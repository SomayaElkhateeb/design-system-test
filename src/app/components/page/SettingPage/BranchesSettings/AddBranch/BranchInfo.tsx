import { UseFormReturn } from 'react-hook-form';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';

import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { useTranslation } from 'react-i18next';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { useState } from 'react';
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
	SelectItem,
} from 'src/app/components/ui/select';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
import { BranchSettingsInterface } from './HookForAddBranchForm';
import FormChoiceChips from 'src/pages/SettingsPage/CustomizationsSettings/comp/FormChoiceChips';
import GoogleMapComponent from 'src/app/components/ui/GoogleMapComponent';

export const countries = [
	{
		name: 'Egypt',
		value: 'eg',
		cities: [
			{ name: 'Cairo', value: 'cairo' },
			{ name: 'Alexandria', value: 'alexandria' },
			{ name: 'Giza', value: 'giza' },
		],
	},
	{
		name: 'Kingdom of Saudi Arabia (KSA)', // More descriptive country name
		value: 'ksa',
		cities: [
			{ name: 'Riyadh', value: 'riyadh' },
			{ name: 'Jeddah', value: 'jeddah' },
			{ name: 'Dammam', value: 'dammam' },
		],
	},
	{
		name: 'United Arab Emirates (UAE)', // More descriptive country name
		value: 'uae',
		cities: [
			{ name: 'Dubai', value: 'dubai' },
			{ name: 'Abu Dhabi', value: 'abu_dhabi' },
			{ name: 'Sharjah', value: 'sharjah' },
		],
	},
];

interface BranchInfoProps {
	formStore: UseFormReturn<BranchSettingsInterface>;
	selectedOption: string;
	setSelectedOption: (e: string) => void;
}

export default function BranchInfo({
	formStore,
	selectedOption,
	setSelectedOption,
}: BranchInfoProps) {
	//  hooks
	const [locationEnabled, setLocationEnabled] = useState<boolean>(false);
	const [isDisablePickButton, setDisablePickButton] = useState<boolean>(false);
	const { t } = useTranslation();

	const handleAddressOption = (option: string) => {
		setSelectedOption(option);
	};
	// -------------------------------------

	return (
		<div className='grid  col-span-2 grid-cols-3 gap-5'>
			<div className='grid gap-5 sm:col-span-3 col-span-6 cardDetails-sharedClass p-5'>
				<section className='grid gap-4'>
					<FormChoiceChips<BranchSettingsInterface>
						formStore={formStore}
						name='branchType'
						label={t('Branch Type')}
						options={['Commercial branch', 'Warehouse']}
					/>

					<TabbedFormField
						formStore={formStore}
						keys={[
							{ name: 'branchNameEn', label: 'En' },
							{ name: 'branchNameAr', label: 'عربي' },
						]}
						label={t('Branch Name')}
						renderer={(field) => <Input {...field} placeholder={'e.g., Riyadh warehouse'} />}
					/>
				</section>
				<section className='grid gap-4'>
					<div>
						<h2 className='title mb-2'>{t('Address')}</h2>
						<SingleChoiceChips
							options={['Add manually', 'Use a map']}
							setSelected={handleAddressOption}
							selected={selectedOption}
						/>
					</div>
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
						name='branchPhoneNumber'
						render={(field) => (
							<CustomPhoneInput
								value={field.value}
								onHandleChange={field.onChange}

								// isLoading={isLoading}
							/>
						)}
					/>
				</section>
			</div>
		</div>
	);
}
