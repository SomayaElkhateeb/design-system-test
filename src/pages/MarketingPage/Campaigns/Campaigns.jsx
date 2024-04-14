import campaignData from './data.json';
import useCampaigns from './useCampaigns';
import CampaignBtns from './CampaignBtns';
import CampaignTable from './CampaignTable';
import CampaignStatus from './CampaignStatus';
import CampaignsHeader from './CampaignsHeader';
import CampaignInfoCard from './CampaignInfoCard';
import { StackedColumnChart } from 'src/app/components/optimized';

const Campaigns = () => {
	const { title, tableData, arrange, handleArrangeChange, campaignTableRef, activityDetails } =
		useCampaigns(campaignData);

	return (
		<>
			{title && <CampaignsHeader title={title} />}
			<div className='p-4'>
				{activityDetails && <CampaignInfoCard />}
				<CampaignStatus />
				<CampaignBtns onSelectOption={handleArrangeChange} selectedOption={arrange} data={tableData} campaignTableRef={campaignTableRef} />
				{!activityDetails && tableData.length > 0 && (
					<CampaignTable sortBy={arrange} data={tableData} ref={campaignTableRef} />
				)}
				{activityDetails && <StackedColumnChart />}
			</div>
		</>
	);
};

export default Campaigns;
