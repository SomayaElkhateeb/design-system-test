import React, { useEffect, useState } from 'react';
import { MoreIcon } from 'src/app/utils/icons';
import { FaChevronRight } from 'react-icons/fa';
import { AiOutlinePercentage } from 'react-icons/ai';
import { Button } from 'src/app/components/optimized';
import SelectItems from 'src/app/components/optimized/SelectItems/SelectItems';

import { selectProducts } from '../../../comp/data';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectProducts } from 'src/app/store/slices/marketing/products/productsAsyncThunks';
interface SpecificProductsProps {}

const SpecificProducts: React.FC<SpecificProductsProps> = (props) => {
	const [showSelect, setShowSelect] = useState(false);
	const dispatch = useDispatch();
	const { isLoading, products } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(getSelectProducts());
	}, [dispatch]);

	console.log('products', products);
	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
					select products
				</Button>

				{showSelect && <SelectItems title='products' onClose={() => setShowSelect(false)} select={products} />}
			</div>
		</div>
	);
};

export default SpecificProducts;
