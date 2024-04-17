import { nanoid } from 'nanoid';
import { Button } from 'src/app/components/optimized';
import * as XLSX from 'xlsx/xlsx.mjs';
import { useReactToPrint } from 'react-to-print';
import ArrangeButton from 'src/app/components/page/Customers/ArrangeButton.tsx';
const sortMenus = [
	{ id: nanoid(), text: 'Campaign (A-Z)' },
	{ id: nanoid(), text: 'Campaign (Z-A)' },
	{ id: nanoid(), text: 'Status (A-Z)' },
	{ id: nanoid(), text: 'Status (Z-A)' },
	{ id: nanoid(), text: 'Sales (High-Low)' },
	{ id: nanoid(), text: 'Sales (Low-High)' },
	{ id: nanoid(), text: 'Expenses (High-Low)' },
	{ id: nanoid(), text: 'Expenses (Low-High)' },
	{ id: nanoid(), text: 'Net Profit (High-Low)' },
	{ id: nanoid(), text: 'Net Profit (Low-High)' },
];
import { AddBgIcon, ExportIcon, PrintIcon } from 'src/app/utils/icons';
import { useNavigate } from 'react-router-dom';

const CampaignBtns = ({ onSelectOption, data, campaignTableRef, selectedOption }) => {
	const navigate = useNavigate();
	const handleSelectOption = (option) => {
		onSelectOption(option);
	};

	const handleExportFile = () => {
		const expotData = data?.length ? data : [];
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
		<div className=' relative flex justify-between items-center h-[70px] mb-4 border-b border-borders-lines'>
			<div>
				<Button
					LeftIcon={AddBgIcon}
					text='Add Campaign'
					onClick={() => {
						navigate('addCampaign');
					}}
				/>
			</div>
			<div className='flex gap-3'>
				<ArrangeButton sortMenus={sortMenus} selectedOption={selectedOption} handelSelect={handleSelectOption} />

				<Button variant='secondary' LeftIcon={ExportIcon} text='Export' onClick={handleExportFile} />

				<Button variant='secondary' LeftIcon={PrintIcon} text='Print' onClick={handlePrint} />
			</div>
		</div>
	);
};
export default CampaignBtns;
