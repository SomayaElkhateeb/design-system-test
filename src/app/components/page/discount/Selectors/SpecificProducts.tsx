import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Button } from 'src/app/components/optimized';
import SelectItems from 'src/app/components/optimized/SelectItems/SelectItems';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectProducts } from 'src/app/store/slices/marketing/products/productsAsyncThunks';
import CategoryView from 'src/app/components/optimized/UiKits/CategoryView';
interface SpecificProductsProps {}

const SpecificProducts: React.FC<SpecificProductsProps> = (props) => {
	const [showSelect, setShowSelect] = useState(false);
	const [selectedItem, setSelectedItem] = useState([]);
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(getSelectProducts());
	}, [dispatch]);

	const handleAddButtonClick = (selectedItem) => {
		setSelectedItem(selectedItem);
		setShowSelect(false);
	};
	return (
		<div className='mt-[18px] flex flex-col gap-[18px]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
					select products
				</Button>

				{showSelect && (
					<SelectItems
						title='products'
						onClose={() => setShowSelect(false)}
						select={products}
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

export default SpecificProducts;
