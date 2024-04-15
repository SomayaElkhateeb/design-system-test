import { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from 'src/app/utils';
import { LiaSearchSolid } from 'react-icons/lia';
import { Button, CheckBox, InputRow } from '..';
import SelectItem from './SelectItem';

/**
 * @typedef {{
 *  id: string | number;
 *  img: string;
 *  title?: string;
 *  subTitle: string;
 *  fName?: string;
 *  lName?: string;
 *  count?: number;
 * }} Item
 */

/**
 * @param {{
 *  title: string;
 *  onClose: () => void;
 *  select: Item[];
 *  variant?: "customers" | "groups";
 * }} props
 */

function SelectItems(props) {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedItems, setSelectedItems] = useState(/** @type {{ id: string | number; title: string; }[]}  */ ([]));
	const [queryItems, setQueryItems] = useState(props.select);

	useEffect(() => {
		setQueryItems(props.select);
	}, [props.select]);

	/**
	 * @param {boolean} isChecked
	 * @param {{ id: string | number; title: string; }} item
	 */
	function handleChange(isChecked, item) {
		const updatedItems = isChecked ? [...selectedItems, item] : selectedItems.filter((item) => item.id !== item.id);
		setSelectedItems(updatedItems);
		console.log('Checkbox checked:', isChecked);
	}

	function handleAddButtonClick() {
		const itemsData = props.select
			.filter((item) => selectedItems.some((selectedItem) => selectedItem.id === item.id))
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
		props.onClose();
	}

	/** @param {import("react").MouseEvent<HTMLDivElement>} event */
	function handleClickOutside(event) {
		if (event.target === event.currentTarget) {
			props.onClose();
		}
	}

	/** @param {string} query */
	function handleSearchChange(query) {
		setSearchQuery(query);
		const filteredItems = props.select.filter((item) => {
			if ('fName' in item || 'lName' in item) {
				return (
					(item.fName && item.fName.toLowerCase().includes(query.toLowerCase())) ||
					(item.lName && item.lName.toLowerCase().includes(query.toLowerCase()))
				);
			}

			if ('title' in item) {
				return item.title && item.title.toLowerCase().includes(query.toLowerCase());
			}
			return false;
		});
		setQueryItems(filteredItems);
	}

	return (
		<div
			className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50'
			onClick={handleClickOutside}
		>
			<label className='w-[39rem] rounded bg-white py-[1rem]'>
				<div>
					<h3 className='text-title font-semibold mb-3 ml-[1rem]'>Select {capitalizeFirstLetter(props.title)}</h3>

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
							{selectedItems.length} {props.title} out of {props.select.length}
						</p>

						{queryItems.length > 0 && (
							<CheckBox
								variant={queryItems.length === selectedItems.length ? undefined : 'minus'}
								handleOnChange={(isChecked) => {
									if (isChecked) {
										return setSelectedItems(queryItems.map((item) => ({ id: item.id, title: item.title ?? '' })));
									}

									setSelectedItems([]);
								}}
								checked={selectedItems.length > 0}
							/>
						)}
					</div>
				</div>

				<div className='flex flex-col gap-2 my-2 h-[25rem] overflow-auto'>
					{queryItems.map((item) => (
						<SelectItem
							variant={props.variant}
							key={item.id}
							// variant={variant}
							{...item}
							isChecked={selectedItems.some((selectedItem) => selectedItem.id === item.id)}
							handleOnCheckChange={(isChecked) =>
								handleChange(isChecked, {
									id: item.id,
									title: item.title ?? '',
								})
							}
						/>
					))}
				</div>

				<div className='flex mt-4 justify-end mr-[1rem] gap-[1rem]'>
					<Button onClick={() => props.onClose()} variant='tertiary'>
						cancel
					</Button>
					<Button onClick={handleAddButtonClick}>{`add (${selectedItems.length})`}</Button>
				</div>
			</label>
		</div>
	);
}

export default SelectItems;
