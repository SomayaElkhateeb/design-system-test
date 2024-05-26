import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import useCampaign from '../useCampaign';
import BudgetDetails from './BudgetDetails';
import CampaignDetails from './CampaignDetails';
import TargetingDetails from './TargetingDetails';
import { Form } from 'src/app/components/ui/form';
import { HeaderSettings } from 'src/app/components/optimized';

const NewCampaign = () => {
	const [target, setTarget] = useState('having specific interests');
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { formStore, onSubmit } = useCampaign(target);

	useEffect(() => {
		setTarget(formStore.watch('targetSimilarPeople'));
	}, [formStore]);
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='flex-col-top-section-pages'>
				<HeaderSettings
					submit
					variant='settingTwoBtns'
					title={t('Add Activity')}
					btn1={{
						text: t('Discard'),
						onClick: () => {
							navigate(-1);
						},
					}}
					btn2={{
						text: t('Publish'),
					}}
				/>
				<div className='grid custom_container grid-cols-3'>
					<div className='grid gap-5 col-span-3 lg:col-span-2'>
						<CampaignDetails formStore={formStore} />
						<TargetingDetails formStore={formStore} />
						<BudgetDetails formStore={formStore} />
					</div>
				</div>
			</form>
		</Form>
	);
};

export default NewCampaign;
