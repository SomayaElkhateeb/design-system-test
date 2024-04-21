import * as XLSX from 'xlsx/xlsx.mjs';
import { useReactToPrint } from 'react-to-print';
import { Button } from 'src/app/components/optimized';
import ArrangeButton from 'src/app/components/page/Customers/ArrangeButton.tsx';
import { ExportIcon, PrintIcon } from 'src/app/utils/icons';

const AnalyticsTableActions = ({ sortMenus, onSelectOption, selectedOption, customersTableRef, data, documentTitle }) => {
	const handleSelectOption = (option) => {
		onSelectOption(option);
	};
	const handleExportFile = () => {
		const expotData = data?.length ? data : [];
		const worksheet = XLSX.utils.json_to_sheet(expotData);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
		XLSX.writeFile(workbook, `${documentTitle}.xlsx`);
	};
	const handlePrint = useReactToPrint({
		content: () => customersTableRef.current,
		documentTitle: documentTitle,
		removeAfterPrint: true,
	});
	return (
		<div className='flex gap-3 justify-end items-center h-[70px] mb-4 border-b border-borders-lines'>
			<ArrangeButton sortMenus={sortMenus} selectedOption={selectedOption} handelSelect={handleSelectOption} />
			<Button variant='secondary' LeftIcon={ExportIcon} text='Export' onClick={handleExportFile} />
			<Button variant='secondary' LeftIcon={PrintIcon} text='Print' onClick={handlePrint} />
		</div>
	);
};
export default AnalyticsTableActions;
