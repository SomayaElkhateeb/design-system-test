import CampaignStatus from './CampaignStatus';

import CampaignBtns from './CampaignBtns';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { RefObject, useRef } from 'react';
import CampaignTable from './CampaignTable';

const Campaigns = () => {
	// Print ref to handle table print.
	const campaignTableRef: RefObject<HTMLElement | undefined> = useRef();

	const { selectedOption, handleSelect } = useSelectBox();

	return (
		<>
			<div className='p-4 flex flex-col gap-4'>
				<CampaignStatus />

				<CampaignBtns
					onSelectOption={handleSelect}
					selectedOption={selectedOption}
					data={campaindata}
					campaignTableRef={campaignTableRef}
				/>

				<CampaignTable sortBy={selectedOption} ref={campaignTableRef} />
			</div>
		</>
	);
};

export default Campaigns;

export const campaindata = [
	{
		id: '1',
		name: 'Summer campaign',
		status: 'running',
		sales: '1000.00',
		expenses: '7000.00',
		netProfit: '5000.00',
		activities: [
			{
				id: '1',
				name: 'Facebook summer ad',
				status: 'in review',
				sessions: 28,
				sales: '10000.00',
				expenses: '10000.00',
				netProfit: '10000.00',
			},
			{
				id: '2',
				name: 'Google AdWords campaign',
				status: 'running',
				sessions: 35,
				sales: '15000.00',
				expenses: '8000.00',
				netProfit: '7000.00',
			},
			{
				id: '3',
				name: 'Instagram sponsored post',
				status: 'refused',
				sessions: 20,
				sales: '12000.00',
				expenses: '10000.00',
				netProfit: '2000.00',
			},
		],
	},
];
