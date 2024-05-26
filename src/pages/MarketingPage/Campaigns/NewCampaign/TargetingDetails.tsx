import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchBox } from 'src/app/components/optimized';
import { CampaignInputsTypes, CampaignFormProps } from '../useCampaign';
import FormChoiceChips from 'src/pages/SettingsPage/CustomizationsSettings/comp/FormChoiceChips';

const targetingOptions = [
	'Purchased from you',
	'Visited your store',
	'liked your page',
	'having specific interests',
];

export default function TargetingDetails({ formStore }: CampaignFormProps) {
	const { t } = useTranslation();
	const interests = [
		t("Women's Clothing"),
		t('Beauty Products'),
		t('Home Appliances'),
		t("Men's Clothing"),
		t('Accessories'),
		t('Electronics'),
		t('Kitchenware'),
		t('Furniture'),
		t('Fashion'),
		t('Shoes'),
		t('dress'),
	];
	//!---------------------------------------------------
	// todo:  didn't finish yet.
	// todo:  Linking the interest array to the formStore.
	//!---------------------------------------------------

	const [selectedInterests, setSelectedInterests] = useState('');
	const handleSelectedInterests = (selectedInterests) => {
		setSelectedInterests(selectedInterests);
	};

	return (
		<div className='global-cards grid grid-cols-2'>
			<h2 className='title text-lg'>{t('Targeting')}</h2>
			<FormChoiceChips<CampaignInputsTypes>
				formStore={formStore}
				name='targetSimilarPeople'
				label='Target who is similar to people'
				options={targetingOptions}
			/>
			{formStore.watch('targetSimilarPeople') === t('having specific interests') && (
				<div>
					<SearchBox
						options={interests}
						onSelectedOptions={handleSelectedInterests}
						label={t('Specific interests')}
					/>
				</div>
			)}
		</div>
	);
}
