import { Button } from 'src/app/components/optimized';
import BudgetDetails from './BudgetDetails';
import CampaignDetails from './CampaignDetails';
import TargetingDetails from './TargetingDetails';
import { IoIosArrowForward } from 'react-icons/io';
import { BackIcon } from 'src/app/utils/icons';
import { Link } from 'react-router-dom';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';

const NewCampaign = () => {
	const language = UseLanguage();
	return (
		<form>
			<div className='flex justify-between items-center bg-white px-4 py-3'>
				<div className='flex justify-between items-center'>
					<Link to={-1}>{language === 'ar' ? <IoIosArrowForward /> : <BackIcon />}</Link>
					<h2 className='text-lg font-semibold capitalize text-title'>Add activity</h2>
				</div>
				<div className='flex  gap-2'>
					<Button
						variant='secondary'
						text='Discard'
						// onClick={}
					/>
					<Button
						variant='primary'
						text='Publish'
						// onClick={}
					/>
				</div>
			</div>

			<div className='p-5 grid gap-5'>
				<CampaignDetails />
				<TargetingDetails />
				<BudgetDetails />
			</div>
		</form>
	);
};

export default NewCampaign;
