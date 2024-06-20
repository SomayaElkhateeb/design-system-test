import { RefObject, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { StackedColumnChart, SubHeader } from 'src/app/components/optimized';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import CampaignBtns from '../CampaignBtns';
import CampaignElementTable from '../CampaignElementTable';
import CampaignInfoCard from '../CampaignInfoCard';
import CampaignStatus from '../CampaignStatus';
import { campaindata } from '../Campaigns';

export default function CampaignElement() {
	//  hooks
	const { t } = useTranslation();
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
			<SubHeader title={!activity ? campainName : 'Facebook'} />

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

			{activity && (
				<StackedColumnChart
					title={t('Sales')}
					percentage='4.75'
					colors={['rgba(236, 81, 81, 1)', 'rgba(255, 204, 115, 1)']}
				/>
			)}
		</div>
	);
}
