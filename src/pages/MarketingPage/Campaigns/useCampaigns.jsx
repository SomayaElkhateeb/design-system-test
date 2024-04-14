// useCampaigns.js (Custom Hook)
import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useCampaigns = (campaignData) => {
	// getting "searchParams" to Specifies what will be displayed in the table.
	const [searchParams, _] = useSearchParams();
	const campaignActivity = searchParams.get('campaign_activity');
	const activityDetails = searchParams.get('activity_details');

	// Filtering the table data based on Selected arrange Option.
	const [arrange, setArrange] = useState();
	const handleArrangeChange = (option) => {
		setArrange(option);
	};

	// Print ref to handle table print.
	const campaignTableRef = useRef();

	// title that shown in "CampaignsHeader" component
	const title = activityDetails || campaignActivity;
	// let title = activityDetails ? activityDetails : campaignActivity;

	// data that passing to "CampaignTable" component
	let tableData;
	if (campaignActivity === null) {
		tableData = campaignData.campaigns;
	} else {
		const matchedCampaign = campaignData.campaigns.find((campaign) => campaign.name === campaignActivity);
		if (matchedCampaign) {
			tableData = matchedCampaign.activities || [];
		} else {
			// Campaign activity does not match any campaign name
			return <div>Error: Campaign activity not found</div>;
		}
	}
	// const getCampaignData = () => {
	// 	if (campaignActivity === null) {
	// 		return campaignData.campaigns;
	// 	} else {
	// 		const matchedCampaign = campaignData.campaigns.find((campaign) => campaign.name === campaignActivity);
	// 		return matchedCampaign ? matchedCampaign.activities || [] : null;
	// 	}
	// };
	return {
		title,
		tableData,
		arrange,
		activityDetails,
		handleArrangeChange,
		campaignTableRef,
	};
};

export default useCampaigns;
