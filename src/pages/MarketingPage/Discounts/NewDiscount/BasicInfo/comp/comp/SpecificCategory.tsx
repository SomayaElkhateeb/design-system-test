import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'src/app/components/optimized';
import SelectItems from 'src/app/components/optimized/SelectItems/SelectItems';
import {
	getSelectCategories,
	postSelectCategories,
} from 'src/app/store/slices/marketing/categories/categoriesAsyncThunks';

const SpecificCategory: React.FC = () => {
	const [showSelect, setShowSelect] = useState(false);
	const dispatch = useDispatch();
	// get select categories
	const { isLoading, categories, error } = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(getSelectCategories());
	}, [dispatch]);

	// post select categories

	return (
		<div className='mt-[18px] flex flex-col gap-[1rem]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
					select category
				</Button>

				{showSelect && <SelectItems title='categories' onClose={() => setShowSelect(false)} select={categories} />}

				{/* post categories */}
			</div>
		</div>
	);
};

export default SpecificCategory;
