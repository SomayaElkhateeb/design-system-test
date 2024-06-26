import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import { CheckBox } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import { ValidFormStoreByValues } from 'src/utils/types';
import { AddAddressInterface } from './Comp/useOrderAddress';
import LocationPicker from 'src/app/components/ui/LocationPicker';
import SelectFormField from 'src/pages/AuthPage/Registration/comp/SelectFormField';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
import { countries } from '../../../../../pages/SettingsPage/BranchesSettings/AddBranch/BranchInfo';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';

interface AddressProps<TFormStore> {
	formStore: ValidFormStoreByValues<TFormStore, AddAddressInterface>;
	isName?: boolean;
	giftOption?: boolean;
	useMapPicker?: boolean;
	sendGift: boolean;
	setSendGift: (value: boolean) => void;
	selectedOption: string;
	setSelectedOption: (option: string) => void;
}

export default function Address<TFormStore>(props: AddressProps<TFormStore>) {
	const {
		formStore,
		isName,
		giftOption,
		useMapPicker,
		sendGift,
		setSendGift,
		selectedOption,
		setSelectedOption,
	} = props;
	const { t } = useTranslation();

	const [locationEnabled, setLocationEnabled] = useState<boolean>(false);
	const [isDisablePickButton, setDisablePickButton] = useState<boolean>(false);

	const handleGiftOptionChange = useCallback(
		() => setSendGift((prev: boolean) => !prev),
		[setSendGift],
	);
	const handleOptionChange = useCallback(
		(option: string) => setSelectedOption(option),
		[setSelectedOption],
	);

	return (
		<Form {...formStore}>
			<div className='lg:col-span-2 grid grid-cols-2 gap-4'>
				<div className='grid gap-4 col-span-2'>
					{useMapPicker && (
						<SingleChoiceChips
							options={[t('Add manually'), t('Use a map')]}
							setSelected={handleOptionChange}
							selected={selectedOption}
						/>
					)}
					{giftOption && (
						<CheckBox
							checked={sendGift}
							handleOnChange={handleGiftOptionChange}
							label={t('Send as a gift')}
						/>
					)}
				</div>
				{sendGift && (
					<div className='col-span-2 xl:col-span-1'>
						<FormField
							formStore={formStore}
							name='giftName'
							label={t('Gift receiver name')}
							render={(field) => <Input {...field} />}
						/>
					</div>
				)}
				{selectedOption === 'Add manually' ? (
					<div className='col-span-2'>
						<ManualAddressForm formStore={formStore} isName={isName} />
					</div>
				) : (
					<div className='col-span-2'>
						<LocationPicker
							formStore={formStore}
							setLocationEnabled={setLocationEnabled}
							setDisablePickButton={setDisablePickButton}
						/>
					</div>
				)}
				<div className='grid gap-4 col-span-2 xl:col-span-1'>
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
						name='phoneNumber'
						render={(field) => (
							<CustomPhoneInput value={field.value} onHandleChange={field.onChange} />
						)}
					/>
				</div>
			</div>
		</Form>
	);
}

function ManualAddressForm<TFormStore>({
	formStore,
	isName,
}: {
	formStore: ValidFormStoreByValues<TFormStore, AddAddressInterface>;
	isName?: boolean;
}) {
	const { t } = useTranslation();
	return (
		<section className='grid grid-cols-2 lg:col-span-2'>
			<div className='grid col-span-2 xl:col-span-1 gap-4 '>
				{isName && (
					<FormField
						formStore={formStore}
						name='name'
						label={t('Full Name')}
						render={(field) => <Input {...field} placeholder={t('Full Name')} />}
					/>
				)}
				<SelectFormField
					name='countryName'
					label={t('Country')}
					formStore={formStore}
					options={countries}
					placeholder={t('Select option')}
				/>
				<SelectFormField
					name='cityName'
					label={t('City')}
					formStore={formStore}
					options={countries}
					placeholder={t('Select option')}
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
			</div>
		</section>
	);
}
