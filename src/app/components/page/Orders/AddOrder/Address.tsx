import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { addAddressInterface } from './Comp/HookAddress';
import { Button, CheckBox } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
import { AddIcon, LocationIcon } from 'src/app/utils/icons';
import { getImageUrl } from 'src/app/utils';
import { FiMinus } from 'react-icons/fi';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
import GoogleMapComponent from 'src/app/components/ui/GoogleMapComponent';
import { countries } from '../../SettingPage/BranchesSettings/AddBranch/BranchInfo';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from 'src/app/components/ui/select';
import { ValidFormStoreByValues } from 'src/utils/types';

interface AddresseProps<TFormStore> {
	formStore: ValidFormStoreByValues<TFormStore, addAddressInterface>;
	sendGift: boolean;
	setSendGift: (e: boolean) => void;
	isName: boolean;
	setIsName: (e: boolean) => void;
	selectedOption?: string;
	setSelectedOption?: (e: string) => void;
	branch?: boolean;
	customer?: boolean;
	details?: boolean;
}

// /////////////////////
// /////////////////////
export default function Address<TFormStore>(props: AddresseProps<TFormStore>) {
	//  props
	const {
		formStore,
		sendGift,
		setSendGift,
		isName,
		setIsName,
		selectedOption,
		setSelectedOption,
		branch,
		customer,
		details,
	} = props;
	//  hooks
	const { t } = useTranslation();
	const language = UseLanguage();
	const [locationEnabled, setLocationEnabled] = useState<boolean>(false);
	const [isDisablePickButton, setDisablePickButton] = useState<boolean>(false);

	const handleAddressOption = (option: string) => {
		setSelectedOption(option);
	};

	useMemo(() => {
		if (customer || details) {
			setIsName(true);
		} else {
			setIsName(false);
		}
	}, [customer, details]);

	return (
		<Form {...formStore}>
			<div className=' lg:col-span-2 flex flex-col gap-4'>
				{customer || details ? undefined : (
					<SingleChoiceChips
						options={['Add manually', 'Use a map']}
						setSelected={handleAddressOption}
						selected={selectedOption}
					/>
				)}

				{branch || customer ? undefined : (
					<CheckBox
						checked={sendGift}
						handleOnChange={() => setSendGift(!sendGift)}
						label={t('Send as a gift')}
					/>
				)}

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
						{isName && (
							<FormField
								formStore={formStore}
								name='name'
								label={t('Full Name')}
								render={(field) => <Input {...field} placeholder={''} />}
							/>
						)}

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
										<SelectValue placeholder={t('Select option')} />
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
										<SelectTrigger onBlur={field.onBlur} disabled={field.disabled} id={field.id}>
											<SelectValue placeholder={t('Select option')} />
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
							render={(field) => <Input {...field} placeholder={t('Area')} />}
						/>
						<FormField
							formStore={formStore}
							name='street'
							label={t('Street')}
							render={(field) => <Input {...field} placeholder={t('Street')} />}
						/>
					</section>
				)}

				{customer || details
					? undefined
					: selectedOption !== 'Add manually' && (
							<div className='relative w-full h-[300px]'>
								<GoogleMapComponent
									setLocationEnabled={setLocationEnabled}
									setDisablePickButton={setDisablePickButton}
									height='300px'
								/>

								<div className='bg-white text-xs flex items-center w-fit shadow-md rounded-sm absolute top-2 left-2'>
									<p
										className={`text-title font-semibold p-2 ${
											language === 'ar' ? 'border-l' : 'border-r'
										} border-constrained`}
									>
										{t('Map')}
									</p>
									<p className='text-subtitle p-2'>{t('Satellite')}</p>
								</div>
								<div className='absolute md:top-2 md:left-[40%] md:inline hidden'>
									<FormField
										formStore={formStore}
										name='search'
										render={(field) => <Input {...field} placeholder={t('Search')} />}
									/>
								</div>
								<div className='flex flex-col items-end justify-between h-full'>
									<div className='flex flex-col gap-2 items-end absolute top-2 right-2'>
										<div className='flex flex-col gap-1.5 items-center bg-white p-1 shadow-md w-fit rounded-sm'>
											<AddIcon className='fill-grayIcon border-b border-hint' />
											<FiMinus color='#666666' />
										</div>
										<div className='bg-white flex items-center justify-center px-2 py-1 w-fit shadow-md rounded-sm'>
											<img src={getImageUrl('map.svg')} alt='Map Icon' />
										</div>
									</div>

									<Button
										variant='secondary'
										LeftIcon={LocationIcon}
										className='bg-white absolute bottom-2 right-2'
									>
										<span className='hidden md:inline'>{t('Locate Me')}</span>
									</Button>
								</div>
							</div>
					  )}

				<FormField
					formStore={formStore}
					name='building'
					label={t('Building')}
					render={(field) => <Input {...field} placeholder={t('Building')} />}
				/>
				<FormField
					formStore={formStore}
					name='landmark'
					label={t('Landmark')}
					render={(field) => <Input {...field} placeholder={t('Landmark')} />}
				/>
				<FormField
					formStore={formStore}
					label={t('Phone number')}
					name='PhoneNumber'
					render={(field) => (
						<CustomPhoneInput value={field.value} onHandleChange={field.onChange} />
					)}
				/>
			</div>
		</Form>
	);
}
