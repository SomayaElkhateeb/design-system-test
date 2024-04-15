import CampaignTable from './CampaignTable';
import CampaignStatus from './CampaignStatus';

import { StackedColumnChart } from 'src/app/components/optimized';
import useCampaigns from './useCampaigns';
import CampaignsHeader from './CampaignsHeader';
import CampaignInfoCard from './CampaignInfoCard';
import CampaignBtns from './CampaignBtns';
import CampaignsData from "./data.json"

const Campaigns = () => {


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
				{!activityDetails  && (
					<CampaignTable sortBy={arrange} data={tableData} ref={campaignTableRef} />
				)}
				{activityDetails && <StackedColumnChart />}
			</div>
		</>
	);
};

export default Campaigns;
