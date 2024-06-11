import { UseFormReturn } from 'react-hook-form';
import { Input } from 'src/app/components/ui/input';
import { useTranslation } from 'react-i18next';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import { BranchSettingsInterface } from './HookForAddBranchForm';
import FormChoiceChips from 'src/app/components/ui/form/FormChoiceChips';
import { Address } from '../../..';

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
	sendGift: boolean;
	setSendGift: (e: boolean) => void;
	selectedOption: string;
	setSelectedOption: (e: string) => void;
}

export default function BranchInfo({
	formStore,
	sendGift,
	setSendGift,
	selectedOption,
	setSelectedOption,
}: BranchInfoProps) {
	//  hooks
	const { t } = useTranslation();
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
					<h2 className='title mb-2'>{t('Address')}</h2>
					<Address<BranchSettingsInterface>
						formStore={formStore}
						sendGift={sendGift}
						setSendGift={setSendGift}
						selectedOption={selectedOption}
						setSelectedOption={setSelectedOption}
						branch={true}
					/>
				</section>
			</div>
		</div>
	);
}
