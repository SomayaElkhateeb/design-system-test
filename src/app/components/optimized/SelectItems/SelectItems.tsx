import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from 'src/app/utils';
import { LiaSearchSolid } from 'react-icons/lia';
import { Button, CheckBox, InputRow } from '..';
import SelectItem from './SelectItem';

interface Item {
	id: string;
	img: string;
	title: string;
	subTitle: string;
	fName: string;
	lName: string;
	count: number;
}

interface Props {
	title: string;
	onClose: () => void;
	select: Item[];
	variant: string;
}

const SelectItems: React.FC<Props> = ({ title, onClose, select, variant }) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedItems, setSelectedItems] = useState<string[]>([]);
	const [queryItems, setQueryItems] = useState<Item[]>(select);

	useEffect(() => {
		setQueryItems(select);
	}, [select]);

	const handleChange = (isChecked: boolean, itemId: string, title: string) => {
		const updatedItems = isChecked ? [...selectedItems, itemId] : selectedItems.filter((item) => item !== itemId);
		setSelectedItems(updatedItems);
		console.log('Checkbox checked:', isChecked);
	};

	const handleAddButtonClick = () => {
		const itemsData = select
			.filter((item) => selectedItems.includes(item.id))
			.map((item) => ({
				id: item.id,
				image: item.img,
				title: item.title,
				subTitle: item.subTitle,
				fName: item.fName,
				lName: item.lName,
				count: item.count,
			}));
		localStorage.setItem('selectedItemsData', JSON.stringify(itemsData));
		onClose();
	};

	const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};

	const handleSearchChange = (query: string) => {
		setSearchQuery(query);
		const filteredItems = select.filter((item) => {
			if ('title' in item) {
				return item.title && item.title.toLowerCase().includes(query.toLowerCase());
			}
			if ('fName' in item || 'lName' in item) {
				return (
					(item.fName && item.fName.toLowerCase().includes(query.toLowerCase())) ||
					(item.lName && item.lName.toLowerCase().includes(query.toLowerCase()))
				);
			}
			return false;
		});
		setQueryItems(filteredItems);
	};

	return (
		<div
			className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50'
			onClick={handleClickOutside}
		>
			<label className='w-[39rem] rounded bg-white py-[1rem]'>
				<div>
					<h3 className='text-title font-semibold mb-3 ml-[1rem]'>Select {capitalizeFirstLetter(title)}</h3>

					<div className='flex items-center justify-between px-[1rem]'>
						<div className='w-[24rem]'>
							<InputRow
								leftIcon={<LiaSearchSolid />}
								placeholder='Search'
								value={searchQuery}
								handleOnChange={handleSearchChange}
							/>
						</div>

						<p>
							{selectedItems.length} {title} out of {select.length}
						</p>

						{queryItems.length > 0 && (
							<CheckBox
								variant={queryItems.length === selectedItems.length ? undefined : 'minus'}
								handleOnChange={(isChecked) => {
									if (isChecked) {
										return setSelectedItems(
											queryItems.map((item) => {
												return item.id;
											}),
										);
									}

									setSelectedItems([]);
								}}
								checked={selectedItems.length > 0}
							/>
						)}
						{/* {selectedItems.length >= 1 && (
							<CheckBox variant='minus' initialChecked={true} handleOnChange={handleChange} />
						)}
						{selectedItems.length === select.length && <CheckBox initialChecked={true} handleOnChange={handleChange} />} */}
					</div>
				</div>

				<div className='flex flex-col gap-2 my-2 h-[25rem] overflow-auto'>
					{queryItems.map((item) => (
						<SelectItem
							variant={variant}
							key={item.id}
							{...item}
							isChecked={selectedItems.includes(item.id)}
							onCheckBoxChange={(isChecked) => handleChange(isChecked, item.id)}
						/>
					))}
				</div>

				<div className='flex mt-4 justify-end mr-[1rem] gap-[1rem]'>
					<Button onClick={() => onClose()} variant='tertiary'>
						cancel
					</Button>
					<Button onClick={handleAddButtonClick}>{`add (${selectedItems.length})`}</Button>
				</div>
			</label>
		</div>
	);
};

export default SelectItems;
