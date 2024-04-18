import CampaignTable from './CampaignTable';
import CampaignStatus from './CampaignStatus';

import { StackedColumnChart } from 'src/app/components/optimized';

import CampaignBtns from './CampaignBtns';
import CampaignsData from './data.json';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { RefObject, useRef } from 'react';

const Campaigns = () => {
	// Print ref to handle table print.
	const campaignTableRef: RefObject<HTMLElement | undefined> = useRef();

	const { selectedOption, handleSelect } = useSelectBox();

	

	return (
		<>
			{/* {title && <CampaignsHeader title={title} />} */}
			<div className='p-4 flex flex-col gap-4'>
				{/* {activityDetails && <CampaignInfoCard />} */}
				<CampaignStatus />

				<CampaignBtns
					onSelectOption={handleSelect}
					selectedOption={selectedOption}
					data={data}
					campaignTableRef={campaignTableRef}
				/>
				
				<CampaignTable sortBy={selectedOption}  ref={campaignTableRef} />
				{/* {activityDetails && <StackedColumnChart />} */}
			</div>
		</>
	);
};

export default Campaigns;


export const data= [
	{
		"name": "Summer campaign",
		"status": "running",
		"sales": "1000.00",
		"expenses": "7000.00",
		"netProfit": "5000.00",
		"activities": [
			{
				"name": "Facebook summer ad",
				"status": "in review",
				"sessions": 28,
				"sales": "10000.00",
				"expenses": "10000.00",
				"netProfit": "10000.00"
			},
			{
				"name": "Google AdWords campaign",
				"status": "running",
				"sessions": 35,
				"sales": "15000.00",
				"expenses": "8000.00",
				"netProfit": "7000.00"
			},
			{
				"name": "Instagram sponsored post",
				"status": "refused",
				"sessions": 20,
				"sales": "12000.00",
				"expenses": "10000.00",
				"netProfit": "2000.00"
			}
		]
	}
	
]
