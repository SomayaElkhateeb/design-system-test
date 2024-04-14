import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'src/app/components/optimized';
import SelectItems from 'src/app/components/optimized/SelectItems/SelectItems';
import CategoryView from 'src/app/components/optimized/UiKits/CategoryView';
import { getSelectCategories } from 'src/app/store/slices/marketing/categories/categoriesAsyncThunks';

const SpecificCategory: React.FC = () => {
	const [showSelect, setShowSelect] = useState(false);
	const [selectedItem, setSelectedItem] = useState([]);

	const dispatch = useDispatch();
	// get select categories
	const { categories } = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(getSelectCategories());
	}, [dispatch]);

	const handleAddButtonClick = (selectedItems) => {
		setSelectedItem(selectedItems);
		setShowSelect(false);
	};

	return (
		<div className='mt-[1rem] flex flex-col gap-[1rem]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
					select category
				</Button>

				{showSelect && (
					<SelectItems
						title='categories'
						onClose={() => setShowSelect(false)}
						select={categories}
						addBtn={handleAddButtonClick}
					/>
				)}

				{selectedItem?.map((item) => {
					console.log('selectedItem', item);
					const { title, id, img, subtitle } = item;
					return <CategoryView key={id} imageUrl={img} title={title} description={subtitle} />;
				})}
			</div>
		</div>
	);
};

export default SpecificCategory;
