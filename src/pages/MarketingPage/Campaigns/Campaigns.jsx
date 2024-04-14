import CampaignTable from './CampaignTable';
import CampaignStatus from './CampaignStatus';

import { StackedColumnChart } from 'src/app/components/optimized';
import useCampaigns from './useCampaigns';
import CampaignsHeader from './CampaignsHeader';
import CampaignInfoCard from './CampaignInfoCard';
import CampaignBtns from './CampaignBtns';


const Campaigns = () => {
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

	const { title, tableData, arrange, handleArrangeChange, campaignTableRef, activityDetails } =
		useCampaigns(CampaignsData);

	return (
		<>
			{title && <CampaignsHeader title={title} />}
			<div className='p-4'>
				{activityDetails && <CampaignInfoCard />}
				<CampaignStatus />

				<CampaignBtns
					onSelectOption={handleArrangeChange}
					selectedOption={arrange}
					data={tableData}
					campaignTableRef={campaignTableRef}
				/>
				{!activityDetails && tableData?.length > 0 && (
					<CampaignTable sortBy={arrange} data={tableData} ref={campaignTableRef} />
				)}
				{activityDetails && <StackedColumnChart />}
			</div>
		</>
	);
};

export default Campaigns;
