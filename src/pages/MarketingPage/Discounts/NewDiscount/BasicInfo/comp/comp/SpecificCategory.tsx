import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'src/app/components/optimized';
import SelectItems from 'src/app/components/optimized/SelectItems/SelectItems';
import { getSelectCategories } from 'src/app/store/slices/marketing/categories/categoriesAsyncThunks';

interface SpecificCategoryProps {}

const SpecificCategory: React.FC<SpecificCategoryProps> = (props) => {
	const [showSelect, setShowSelect] = useState(false);
	const dispatch = useDispatch();
	const { isLoading, categories } = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(getSelectCategories());
	}, [dispatch]);

	console.log('categories', categories);

	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
					select category
				</Button>

				{showSelect && <SelectItems title='categories' onClose={() => setShowSelect(false)} select={categories} />}
			</div>
		</div>
	);
};

export default SpecificCategory;
