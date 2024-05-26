import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import useCampaign from '../useCampaign';
import BudgetDetails from './BudgetDetails';
import CampaignDetails from './CampaignDetails';
import TargetingDetails from './TargetingDetails';
import { Form } from 'src/app/components/ui/form';
import { HeaderSettings } from 'src/app/components/optimized';


const NewCampaign = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { formStore, onSubmit } = useCampaign();
	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit}>
				<HeaderSettings
					submit
					variant='settingTwoBtns'
					title={t('Add activity')}
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
				<div className='grid p-5 grid-cols-3'>
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
