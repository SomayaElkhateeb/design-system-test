import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Button, SelectItems } from 'src/app/components/optimized';
import { getSelectCategories } from 'src/app/store/slices/marketing/categories/categoriesAsyncThunks';
import CategoryViewSelect from 'src/app/components/page/discount/Selectors/CategoryViewSelect';

const SpecificCategory = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { categories } = useSelector((state) => state.categories);
	const [state, setState] = useState({
		showSelect: false,
		showPopup: false,
		selectedItem: [],
	});

	const { showSelect, showPopup, selectedItem } = state;

	// get select categories
	useEffect(() => {
		dispatch(getSelectCategories());
	}, [dispatch]);
	// show select
	const handleAddButtonClick = (newItems) => {
		setState((prevState) => {
			const duplicates = newItems.filter(
				(newItem) => !prevState.selectedItem.some((prevItem) => prevItem.id === newItem.id),
			);

			if (duplicates.length === newItems.length) {
				toast.success('Successfully added.');
				return {
					...prevState,
					selectedItem: [...prevState.selectedItem, ...newItems],
					showSelect: false,
				};
			} else {
				toast.error('error: you added before. please click Cancel.');
				return prevState;
			}
		});
	};

	// delete item
	const handleDeleteItem = (idToDelete: number) => {
		const updatedItems = selectedItem.filter((el) => el.id !== idToDelete);
		setState({
			...state,
			selectedItem: updatedItems,
			showPopup: false,
		});
	};

	return (
		<div className='mt-[1rem] flex flex-col gap-[1rem]'>
			<div>
				<Button variant='secondary' RightIcon={FaChevronRight} onClick={() => setState({ ...state, showSelect: true })}>
					{t('select category')}
				</Button>

				{showSelect && (
					<SelectItems
						title={t('categories')}
						onClose={() => setState({ ...state, showSelect: false })}
						select={categories}
						addBtn={handleAddButtonClick}
					/>
				)}

				{selectedItem?.map((item) => {
					const { title, id, img, subtitle } = item;
					return (
						<CategoryViewSelect
							key={id}
							img={img}
							title={title}
							subtitle={subtitle}
							handleDelete={() => setState({ ...state, showPopup: true })}
							handleDeleteItem={() => handleDeleteItem(id)}
							showPopup={showPopup}
							onClose={() => setState({ ...state, showPopup: false })}
						/>
					);
				})}
			</div>
			<ToastContainer position='top-center' />
		</div>
	);
};

export default SpecificCategory;
