import { useState } from 'react';
import CampaignBtns from './CampaignBtns';
import CampaignStatus from './CampaignStatus';
import CampaignTable from './CampaignTable';
import { StackedColumnChart } from 'src/app/components/optimized';
import CampaignsHeader from './CampaignsHeader';
import campaignData from "./data.json"
import { useSearchParams } from 'react-router-dom';
import CampaignInfoCard from './CampaignInfoCard';
const Campaigns = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [searchParams, _] = useSearchParams();

	const campaignActivity = searchParams.get('campaign_activity');
	const activityDetails = searchParams.get('activity_details');
	const title = activityDetails ? activityDetails : campaignActivity;
	let tableData;
	if (campaignActivity === null) {
		tableData = campaignData.campaigns;
	} else {
		const matchedCampaign = campaignData.campaigns.find((campaign) => campaign.name === campaignActivity);
		tableData = matchedCampaign ? matchedCampaign.activities : [];
	}
	const handleSelectOption = (option) => {
		setSelectedOption(option);
	};


	return (
		<>
			{(activityDetails || campaignActivity) && <CampaignsHeader title={title} />}
			<div className='p-4'>
				{activityDetails && <CampaignInfoCard />}
				<CampaignStatus />
				<CampaignBtns onSelectOption={handleSelectOption} />
				{!activityDetails && <CampaignTable sortTerm={selectedOption} data={tableData} />}
				{activityDetails && <StackedColumnChart />}
			</div>
		</>
	);
};

export default Campaigns;

