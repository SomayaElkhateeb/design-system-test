import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import campaignData from './data.json';
import CampaignBtns from './CampaignBtns';
import CampaignTable from './CampaignTable';
import CampaignStatus from './CampaignStatus';
import CampaignsHeader from './CampaignsHeader';
import CampaignInfoCard from './CampaignInfoCard';
import { StackedColumnChart } from 'src/app/components/optimized';

const Campaigns = () => {
	// getting "searchParams" to Specifies what will be displayed in the table.
	const [searchParams, _] = useSearchParams();
	const campaignActivity = searchParams.get('campaign_activity');
	const activityDetails = searchParams.get('activity_details');

	// Filtering the table data based on Selected arrange Option.
	const [arrange, setArrange] = useState(null);
	const handleArrangeChange = (option) => {
		setArrange(option);
	};

	// title that shown in "CampaignsHeader" component
	const title = activityDetails ? activityDetails : campaignActivity;

	// data that passing to "CampaignTable" component
	let tableData;
	if (campaignActivity === null) {
		tableData = campaignData.campaigns;
	} else {
		const matchedCampaign = campaignData.campaigns.find((campaign) => campaign.name === campaignActivity);
		tableData = matchedCampaign ? matchedCampaign.activities : [];
	}

	return (
		<>
			{(activityDetails || campaignActivity) && <CampaignsHeader title={title} />}
			<div className='p-4'>
				{activityDetails && <CampaignInfoCard />}
				<CampaignStatus />
				<CampaignBtns onSelectOption={handleArrangeChange} data={tableData}/>
				{!activityDetails && <CampaignTable arrangeTerm={arrange} data={tableData} />}
				{activityDetails && <StackedColumnChart />}
			</div>
		</>
	);
};

export default Campaigns;
