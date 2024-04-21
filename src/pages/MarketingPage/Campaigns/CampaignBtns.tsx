import { nanoid } from 'nanoid';
import { Button } from 'src/app/components/optimized';
import * as XLSX from 'xlsx/xlsx.mjs';
import { useReactToPrint } from 'react-to-print';

import { AddBgIcon } from 'src/app/utils/icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ActionsButtonsCampains from './ActionsButtonsCampains';
import { RefObject } from 'react';

interface CampaignBtnsInterface {
	selectedOption: string;
	onSelectOption: (e: string) => void;
	data: any;
	campaignTableRef: RefObject<HTMLElement | undefined>;
	activity?:boolean
}
const CampaignBtns = ({ data, campaignTableRef, selectedOption, onSelectOption,activity }: CampaignBtnsInterface) => {
	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();

	const sortMenus = [
		{ id: nanoid(), text: 'Campaign (A-Z)' },
		{ id: nanoid(), text: 'Campaign (Z-A)' },
		{ id: nanoid(), text: 'Status (A-Z)' },
		{ id: nanoid(), text: 'Status (Z-A)' },
		{ id: nanoid(), text: 'Sales Descending' },
		{ id: nanoid(), text: 'Sales Ascending' },
		{ id: nanoid(), text: 'Expenses Descending' },
		{ id: nanoid(), text: 'Expenses Ascending' },
		{ id: nanoid(), text: 'Net Profit Descending' },
		{ id: nanoid(), text: 'Net Profit Ascending' },
	];

	//  deal with excel
	//  notice :this function will be handeled to be global in future

	const handleExportFile = () => {
		const expotData = data?.length > 0 ? data : [];
		const worksheet = XLSX.utils.json_to_sheet(expotData);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
		XLSX.writeFile(workbook, 'data.xlsx');
	};

	const handlePrint = useReactToPrint({
		content: () => campaignTableRef.current,
		documentTitle: 'Campaigns Data',
		removeAfterPrint: true,
	});

	return (
		<div className='flex flex-col gap-5'>
			<div className='  flex justify-between items-center '>
				<Button
					onClick={() => {
						navigate('/marketing/campaigns/addCampaign');
					}}
					variant='primary'
					LeftIcon={AddBgIcon}
				>
					{!activity?t('Add Campaign'):t('Add Activity')}
				</Button>

				<ActionsButtonsCampains
					sortMenus={sortMenus}
					selectedOption={selectedOption}
					handleExportFile={handleExportFile}
					handlePrint={handlePrint}
					onSelectOption={onSelectOption}
				/>
			</div>

			<hr />
		</div>
	);
};
export default CampaignBtns;
