import { UseFormReturn } from 'react-hook-form';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import { BranchSettingsInterface } from './AddBranch';
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

const countries = [
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
}

export default function BranchInfo({ formStore }: BranchInfoProps) {
	//  hooks
	const { t } = useTranslation();
	const [selectedOption, setSelectedOption] = useState('Add manually');

	const handleBranchType = (option: string) => {
		formStore.setValue('branchType', option);
	};

	const handleAddressOption = (option: string) => {
		setSelectedOption(option);
	};
	// -------------------------------------

	return (
		<div className='grid  col-span-2 grid-cols-3 gap-5'>
			<div className='grid gap-5 col-span-3 cardDetails-sharedClass p-5'>
				<section className='grid gap-4'>
					<div>
						<h2 className='title mb-2'>{t('Branch Type')}</h2>
						<SingleChoiceChips
							options={[t('Commercial branch'), t('Warehouse')]}
							setSelected={handleBranchType}
							selected={formStore.watch('branchType')}
						/>
					</div>

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
						<h2 className='title text-lg mb-2'>{t('Address')}</h2>
						<SingleChoiceChips
							options={[t('Add manually'), t('Use a map')]}
							setSelected={handleAddressOption}
							selected={selectedOption}
						/>
					</div>
					<FormField
						formStore={formStore}
						name='countryName'
						label={t('Country')}
						render={(field) => (
							<div className='flex'>
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
							</div>
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
							</div>
						)}
					/>

					<FormField
						formStore={formStore}
						name='area'
						label={t('Area / District')}
						render={(field) => <Input {...field} placeholder={'Sary'} />}
					/>
					<FormField
						formStore={formStore}
						name='street'
						label={t('Street')}
						render={(field) => <Input {...field} placeholder={'Sary@gmail.com'} />}
					/>
					<FormField
						formStore={formStore}
						name='building'
						label={t('Building')}
						render={(field) => <Input {...field} placeholder={'Sary'} />}
					/>
					<FormField
						formStore={formStore}
						name='landmark'
						label={t('Landmark')}
						render={(field) => <Input {...field} placeholder={'Sary@gmail.com'} />}
					/>

					<div className='grid gap-1'>
						<p className='text-sm font-semibold'>{t('Phone number')}</p>

						<FormField
							formStore={formStore}
							name='branchPhoneNumber'
							render={(field) => (
								<CustomPhoneInput
									value={field.value}
									onHandleChange={field.onChange}

									// isLoading={isLoading}
								/>
							)}
						/>
					</div>
				</section>
			</div>
		</div>
	);
}
