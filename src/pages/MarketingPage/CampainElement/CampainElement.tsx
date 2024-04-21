import { RefObject, useRef } from 'react';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import CampaignStatus from '../Campaigns/CampaignStatus';
import CampaignBtns from '../Campaigns/CampaignBtns';
import { campaindata } from '../Campaigns/Campaigns';
import { HeaderSettings, StackedColumnChart } from 'src/app/components/optimized';
import CampaignElementTable from '../Campaigns/CampaignElementTable';
import { useSearchParams } from 'react-router-dom';
import CampaignInfoCard from '../Campaigns/CampaignInfoCard';

export default function CampainElement() {
	//  hooks
	const [searchParams] = useSearchParams();
	const activity = searchParams.get('activityId');

	// Print ref to handle table print.
	const campaignTableRef: RefObject<HTMLElement | undefined> = useRef();

	const { selectedOption, handleSelect } = useSelectBox();

	//  get campaignName from localstorage
	let campainName: null | string = '';
	if (typeof window !== 'undefined') {
		campainName = localStorage.getItem('campainName');
	}
	return (
		<div className='p-4 flex flex-col gap-4'>
			<HeaderSettings to={-1} title={!activity ? campainName : 'Facebook'} />
			{activity && <CampaignInfoCard />}
			<CampaignStatus />

			{!activity && (
				<CampaignBtns
					activity
					onSelectOption={handleSelect}
					selectedOption={selectedOption}
					data={campaindata[0]?.activities}
					campaignTableRef={campaignTableRef}
				/>
			)}

			{!activity && <CampaignElementTable sortBy={selectedOption} ref={campaignTableRef} />}

			{activity && <StackedColumnChart />}
		</div>
	);
}
