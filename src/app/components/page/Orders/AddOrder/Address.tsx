import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import { CheckBox } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import { ValidFormStoreByValues } from 'src/utils/types';
import LocationPicker from 'src/app/components/ui/LocationPicker';
import useOrderAddress, { addAddressInterface } from './Comp/useOrderAddress';
import SelectFormField from 'src/pages/AuthPage/Registration/comp/SelectFormField';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
import { countries } from '../../SettingPage/BranchesSettings/AddBranch/BranchInfo';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';

interface AddressProps<TFormStore> {
	formStore: ValidFormStoreByValues<TFormStore, addAddressInterface>;
	isName?: boolean;
	giftOption?: boolean;
	geoPicker?: boolean;
}

export default function Address<TFormStore>(props: AddressProps<TFormStore>) {
	const { formStore, isName, giftOption, geoPicker } = props;
	const { t } = useTranslation();

	const [sendGift, setSendGift] = useState(false);
	const [selectedOption, setSelectedOption] = useState('Add manually');

	const [locationEnabled, setLocationEnabled] = useState<boolean>(false);
	const [isDisablePickButton, setDisablePickButton] = useState<boolean>(false);

	const orderAddressHook = useOrderAddress(sendGift, selectedOption);

	return (
		<Form {...formStore}>
			<div className='lg:col-span-2 flex flex-col gap-4'>
				{!isName && (
					<SingleChoiceChips
						options={[t('Add manually'), t('Use a map')]}
						setSelected={(option: string) => setSelectedOption(option)}
						selected={selectedOption}
					/>
				)}
				{giftOption && (
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
					</section>
				)}
				{geoPicker && selectedOption !== 'Add manually' && (
					<LocationPicker
						formStore={formStore}
						setLocationEnabled={setLocationEnabled}
						setDisablePickButton={setDisablePickButton}
					/>
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
