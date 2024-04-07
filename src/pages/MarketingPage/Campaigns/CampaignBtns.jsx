import { nanoid } from 'nanoid';
import { Button, Menu } from 'src/app/components/optimized';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
const sortMenus = [
	{ id: nanoid(), text: 'Name A to Z' },
	{ id: nanoid(), text: 'Name Z to A' },
	{ id: nanoid(), text: 'Sales Ascending' },
	{ id: nanoid(), text: 'Sales Descending' },
	{ id: nanoid(), text: 'Expenses Ascending' },
	{ id: nanoid(), text: 'Expenses Descending' },
	{ id: nanoid(), text: 'Net profit Ascending' },
	{ id: nanoid(), text: 'Net profit Descending' },
];
import { AddBgIcon, ArrangeIcon, DownIcon, ExportIcon, PrintIcon } from 'src/app/utils/icons';


const CampaignBtns = ({onSelectOption }) => {
	const { isOpen, selectedOption, handleSelect, handleButtonClick } = useSelectBox();

    const handleSelectOption = (option) => {
      handleSelect(option); 
      onSelectOption(option);
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
				<Button
					variant='secondary'
					LeftIcon={ExportIcon}
					text='Export'
					// onClick={}
				/>
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
