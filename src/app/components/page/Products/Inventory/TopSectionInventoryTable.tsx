import { useTranslation } from 'react-i18next';

import { nanoid } from 'nanoid';

import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';

import ActionsComp from '../../Customers/ActionsComp';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

export default function TopSectionInventoryTable() {
	//  hooks
	const [age, setAge] = useState('');
	//  custom hook for select arrang item

	const { selectedOption, handleSelect } = useSelectBox();

	const sortMenus = [
		{ id: nanoid(), text: 'Name A to Z' },
		{ id: nanoid(), text: 'Name Z to A' },
		{ id: nanoid(), text: 'SKU Ascending' },
		{ id: nanoid(), text: 'SKU Descending' },
		{ id: nanoid(), text: 'Price Low in first' },
		{ id: nanoid(), text: 'Price High in first' },
		{ id: nanoid(), text: 'Date Added' },
		{ id: nanoid(), text: 'Date modified' },
	];

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};

	return (
		<div className='flex-row-global justify-between'>
			{/*  left select box */}

			<FormControl sx={{ width: '12rem', backgroundColor: 'white' }}>
				<InputLabel id='demo-simple-select-label'>Riyadh warehouse</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={age}
					label='Riyadh warehouse'
					onChange={handleChange}
				>
					<MenuItem value={10}>Riyadh warehouse</MenuItem>
				</Select>
			</FormControl>

			{/*   arrange,... */}
			<div className='flex-row-global  gap-[1.2rem]'>
				<ActionsComp sortMenus={sortMenus} selectedOption={selectedOption} handelSelect={handleSelect} />
			</div>
		</div>
	);
}