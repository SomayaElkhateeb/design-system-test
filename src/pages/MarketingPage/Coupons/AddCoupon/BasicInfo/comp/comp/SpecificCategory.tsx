// import React, { useEffect, useState } from 'react';
// import { MoreIcon } from 'src/app/utils/icons';
// import { FaChevronRight } from 'react-icons/fa';
// import { AiOutlinePercentage } from 'react-icons/ai';
// import { Button } from 'src/app/components/optimized';
// import SelectItems from 'src/app/components/optimized/SelectItems/SelectItems';

// import { selectCategories } from '../../../comp/data';

// // get category
// import { useDispatch, useSelector } from 'react-redux';
// import { getSelectCategories } from 'src/app/store/slices/marketing/marketingAsyncThunks';
// interface SpecificCategoryProps {}

// const SpecificCategory: React.FC<SpecificCategoryProps> = (props) => {
// 	const [showSelect, setShowSelect] = useState(false);
// 	const dispatch = useDispatch();
// 	// Assuming 'coupons' is the correct slice name in your Redux store
// 	const { isLoading, categories, error } = useSelector((state) => state.coupons.coupons);

// 	// Assuming 'categories' is the correct property in your state containing category information
// 	console.log('select category', categories);

// 	useEffect(() => {
// 		dispatch(getSelectCategories());
// 	}, [dispatch]);
// 	return (
// 		<div className='mt-[18px] flex flex-col gap-[18px]'>
// 			<div>
// 				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
// 					select category
// 				</Button>

// 				{showSelect && <SelectItems title='products' onClose={() => setShowSelect(false)} select={getSelectCategories} />}
// 			</div>
// 		</div>
// 	);
// };

// export default SpecificCategory;

import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Button } from 'src/app/components/optimized';
import SelectItems from 'src/app/components/optimized/SelectItems/SelectItems';

interface SpecificCategoryProps {}

const SpecificCategory: React.FC<SpecificCategoryProps> = (props) => {
	const [showSelect, setShowSelect] = useState(false);

	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
					select category
				</Button>

				{showSelect && <SelectItems title='categories' onClose={() => setShowSelect(false)} />}
			</div>
		</div>
	);
};

export default SpecificCategory;
