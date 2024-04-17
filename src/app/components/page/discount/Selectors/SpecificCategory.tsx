import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'src/app/components/optimized';
import SelectItems from 'src/app/components/optimized/SelectItems/SelectItems';
import { getSelectCategories } from 'src/app/store/slices/marketing/categories/categoriesAsyncThunks';
import CategoryView from 'src/pages/MarketingPage/CategoryView';

const SpecificCategory = () => {
	const { t } = useTranslation();
	const [showSelect, setShowSelect] = useState(false);
	const [selectedItem, setSelectedItem] = useState([]);

	const dispatch = useDispatch();
	// get select categories
	const { categories } = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(getSelectCategories());
	}, [dispatch]);

	const handleAddButtonClick = (selectedItem) => {
		setSelectedItem(selectedItem);
		setShowSelect(false);
	};

	return (
		<div className='mt-[1rem] flex flex-col gap-[1rem]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setShowSelect(true)}>
					{t('select category')}
				</Button>

				{showSelect && (
					<SelectItems
						title={t('categories')}
						onClose={() => setShowSelect(false)}
						select={categories}
						addBtn={handleAddButtonClick}
					/>
				)}

				{selectedItem?.map((item) => {
					const { title, id, img, subtitle } = item;
					return (
						<CategoryView
							key={id}
							img={img}
							title={title}
							subtitle={subtitle}
							// onClick={() => dispatch(deleteCategory(item.id))}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default SpecificCategory;
