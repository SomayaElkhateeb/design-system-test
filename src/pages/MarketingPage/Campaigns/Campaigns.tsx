import CampaignStatus from './CampaignStatus';

import CampaignBtns from './CampaignBtns';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { RefObject, useRef } from 'react';
import CampaignTable from './CampaignTable';
import { Button } from 'src/app/components/optimized';
import { Link } from 'react-router-dom';

const Campaigns = () => {
	// Print ref to handle table print.
	const campaignTableRef: RefObject<HTMLElement | undefined> = useRef();

	const { selectedOption, handleSelect } = useSelectBox();

	return (
		<>
			<div className='flex-col-top-section-pages custom_container gap-4'>
				<CampaignStatus />
				{/* <div className='flex'>
					<Button variant='primary'>
						<Link to='/marketing/email-form'>Make Email Form</Link>
					</Button>
				</div> */}
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
