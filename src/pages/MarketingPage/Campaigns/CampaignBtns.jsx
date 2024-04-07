import { nanoid } from 'nanoid';
import { Button, Menu } from 'src/app/components/optimized';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import * as XLSX from 'xlsx/xlsx.mjs';

const sortMenus = [
	{ id: nanoid(), text: 'Campaign' },
	{ id: nanoid(), text: 'Status' },
	{ id: nanoid(), text: 'Sales' },
	{ id: nanoid(), text: 'Expenses' },
	{ id: nanoid(), text: 'Net Profit' },
];
import { AddBgIcon, ArrangeIcon, DownIcon, ExportIcon, PrintIcon } from 'src/app/utils/icons';

const CampaignBtns = ({ onSelectOption, data }) => {
	const { isOpen, selectedOption, handleSelect, handleButtonClick } = useSelectBox();

	const handleSelectOption = (option) => {
		handleSelect(option);
		onSelectOption(option);
	};

	const handleExportFile = () => {
		const expotData = data?.length ? data : [];
		const worksheet = XLSX.utils.json_to_sheet(expotData);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
		XLSX.writeFile(workbook, 'data.xlsx');
	};

	return (
		<div className=' relative flex justify-between items-center h-[70px] mb-4 border-b border-borders-lines'>
			<div>
				<Button
					LeftIcon={AddBgIcon}
					text='Add campaign'
					// onClick={}
				/>
			</div>
			<div className='flex gap-3'>
				<Button
					variant='secondary'
					LeftIcon={ArrangeIcon}
					RightIcon={DownIcon}
					text='Arrange'
					onClick={handleButtonClick}
				/>
				{isOpen && <Menu options={sortMenus} selectedOption={selectedOption} onSelect={handleSelectOption} />}
				<Button variant='secondary' LeftIcon={ExportIcon} text='Export' onClick={handleExportFile} />

				<Button
					variant='secondary'
					LeftIcon={PrintIcon}
					text='Print'
					// onClick={}
				/>
			</div>
		</div>
	);
};
export default CampaignBtns;
