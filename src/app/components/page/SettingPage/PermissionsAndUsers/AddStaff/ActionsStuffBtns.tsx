import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrangeButton, Button } from 'src/app/components/optimized';
import FilterButton from 'src/app/components/optimized/Buttons/FilterButton';
import { User } from 'src/app/interface/settingsInterface/UsersSettingsInterface';
import ActionHandler from 'src/app/utils/ActionMethods';
import { ExportIcon } from 'src/app/utils/icons';

const ActionsStuffBtns = ({
	data,
	sortMenus,
	handleSelect,
	selectedOption,
}: {
	data: User[];
	sortMenus: { id: string; text: string }[];
	handleSelect: (e: string) => void;
	selectedOption: string;
}) => {
	const { t } = useTranslation();

	const handleExportFile = () => {
		ActionHandler.exportToExcel(data, 'staff_data.xlsx');
	};
	return (
		<div className='md:flex-row-global flex-col-global justify-between w-full '>
			<div>
				<input placeholder='Search' />
			</div>
			<div className='flex-row-global gap-3'>
				{/* search */}
				<Button onClick={handleExportFile} variant='secondary' LeftIcon={ExportIcon}>
					{t('Export')}
				</Button>
				<ArrangeButton
					sortMenus={sortMenus}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
				<FilterButton
					sortMenus={sortMenus}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
			</div>
		</div>
	);
};
export default ActionsStuffBtns;
