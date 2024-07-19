import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrangeButton, Button } from "src/app/components/optimized";
import FilterButton from "src/app/components/optimized/Buttons/FilterButton";
import { ExportIcon } from "src/app/utils/icons";

const ActionsBtn = () => {
	const { t } = useTranslation();

	const sortMenus = [
		{ id: '1', text: 'Sort by Name' },
		{ id: '2', text: 'Sort by Date' },
		{ id: '3', text: 'Sort by Size' },
	];

	const [selectedOption, setSelectedOption] = useState('name');

	const handleSelect = (optionId: string) => {
		setSelectedOption(optionId);
	};
	const handleExportFile = () => {
		// ActionHandler.exportToExcel(data, 'campaigns_data.xlsx');
	};
	return <div  className='flex-row-global gap-3'>
		{/* search */}
		<input placeholder='Search' />
		<Button onClick={handleExportFile} variant='secondary' LeftIcon={ExportIcon}>
			{t('Export')}
		</Button>
		<ArrangeButton sortMenus={sortMenus} selectedOption={selectedOption} handelSelect={handleSelect} />
		<FilterButton sortMenus={sortMenus} selectedOption={selectedOption} handelSelect={handleSelect} />
	</div>
}
export default ActionsBtn;