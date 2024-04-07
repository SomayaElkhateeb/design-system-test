import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StackedColumnChart } from 'src/app/components/optimized';
import CampaignBtns from './CampaignBtns';
import CampaignInfoCard from './CampaignInfoCard';
import CampaignStatus from './CampaignStatus';
import CampaignTable from './CampaignTable';
import CampaignsHeader from './CampaignsHeader';
import campaignData from './data.json';

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

	return (
		<div>
			<CampaignStatus />
			{/* <CampaignBtns />
			<CampaignTable /> */}
		</div>
	);
};

const CampaignsData = [
	{
		name: 'Summer campaign',
		status: 'running',
		sales: 'SAR 10000.00',
		expenses: 'SAR 10000.00',
		netProfit: 'SAR 10000.00',
	},
	{
		name: 'Ramadan campaign ',
		status: 'ended',
		sales: 'SAR 10000.00',
		expenses: 'SAR 10000.00',
		netProfit: 'SAR 10000.00',
	},
	{
		name: 'Ramadan campaign ',
		status: 'in review',
		sales: 'SAR 10000.00',
		expenses: 'SAR 10000.00',
		netProfit: 'SAR 10000.00',
	},
	{
		name: 'Ramadan campaign ',
		status: 'refused',
		sales: 'SAR 10000.00',
		expenses: 'SAR 10000.00',
		netProfit: 'SAR 10000.00',
	},
];

// const CampaignTable = () => {

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(/** @type {string | null | undefined} */ (null));
	const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

	/** @param {string} option */
	function handleSelect(option) {
		setSelectedOption(option);
		setIsOpen(false);
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
