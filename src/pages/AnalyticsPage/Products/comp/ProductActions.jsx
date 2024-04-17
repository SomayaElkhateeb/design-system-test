import { nanoid } from 'nanoid';
import { Button } from 'src/app/components/optimized';
import * as XLSX from 'xlsx/xlsx.mjs';
import { useReactToPrint } from 'react-to-print';
import ArrangeButton from 'src/app/components/page/Customers/ArrangeButton.tsx';
const sortMenus = [
	{ id: nanoid(), text: 'Day (Latest)' },
	{ id: nanoid(), text: 'Day (Oldest)' },
	{ id: nanoid(), text: 'Orders (High-Low)' },
	{ id: nanoid(), text: 'Orders  (Low-High)' },
	{ id: nanoid(), text: 'Average units ordered (High-Low)' },
	{ id: nanoid(), text: 'Average units ordered  (Low-High)' },
	{ id: nanoid(), text: 'Average order value (High-Low)' },
	{ id: nanoid(), text: 'Average order value  (Low-High)' },
	{ id: nanoid(), text: 'Delivered (High-Low)' },
	{ id: nanoid(), text: 'Delivered (Low-High)' },
	{ id: nanoid(), text: 'Returned quantity (Low-High)' },
	{ id: nanoid(), text: 'Returned quantity  (Low-High)' },
];
import { ExportIcon, PrintIcon } from 'src/app/utils/icons';
const ProductActions = () => {
	// { onSelectOption, data, campaignTableRef, selectedOption }
	// const handleSelectOption = (option) => {
	// 	onSelectOption(option);
	// };

	// const handleExportFile = () => {
	// 	const expotData = data?.length ? data : [];
	// 	const worksheet = XLSX.utils.json_to_sheet(expotData);
	// 	const workbook = XLSX.utils.book_new();
	// 	XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
	// 	XLSX.writeFile(workbook, 'data.xlsx');
	// };

	// const handlePrint = useReactToPrint({
	// 	content: () => campaignTableRef.current,
	// 	documentTitle: 'Campaigns Data',
	// 	onBeforePrint: () => console.log('before printing...'),
	// 	onAfterPrint: () => console.log('after printing...'),
	// 	removeAfterPrint: true,
	// });

	return (
		<div className='flex  gap-3 justify-end items-center h-[70px] mb-4 border-b border-borders-lines'>
			<ArrangeButton sortMenus={sortMenus} selectedOption={selectedOption} handelSelect={handleSelectOption} />
			<Button variant='secondary' LeftIcon={ExportIcon} text='Export' 
			// onClick={handleExportFile} 
			/>
			<Button variant='secondary' LeftIcon={PrintIcon} text='Print' 
			// onClick={handlePrint} 
			/>
		</div>
	);
};
export default ProductActions;
