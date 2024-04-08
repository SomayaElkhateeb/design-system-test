
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import campaignData from './data.json';
import CampaignBtns from './CampaignBtns';


// import { useState } from 'react';
// import CampaignBtns from './CampaignBtns';
// import CampaignStatus from './CampaignStatus';

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

	}}
import CampaignBtns from './CampaignBtns';
import CampaignStatus from './CampaignStatus';

import { useState } from 'react';
import { Button, Menu } from 'src/app/components/optimized';
import { CalenderIcon, DownIcon } from 'src/app/utils/icons';

// const Campaigns = () => {
// 	return (
// 		<div>
// 			<CampaignStatus />
// 			<CampaignBtns />
// 			<CampaignTable />
// 		</div>
// 	);
// };

// export default Campaigns;
    
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

	return (
		<>
			{/* {(activityDetails || campaignActivity) && <CampaignsHeader title={title} />} */}
			<div className='p-4'>
				{/* {activityDetails && <CampaignInfoCard />} */}
				<CampaignStatus />

				<CampaignBtns onSelectOption={handleArrangeChange} data={tableData}/>
				{!activityDetails && <CampaignTable arrangeTerm={arrange} data={tableData} />}
				{activityDetails && <StackedColumnChart />}

  {/*<CampaignBtns onSelectOption={handleSelectOption} />*/}
				{/* {!activityDetails && <CampaignTable sortTerm={selectedOption} data={tableData} />}
				{activityDetails && <StackedColumnChart />} */}

			</div>
		</>
	);
};

export default Campaigns;
