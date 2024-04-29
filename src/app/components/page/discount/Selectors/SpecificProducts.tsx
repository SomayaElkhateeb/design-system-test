import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Button } from 'src/app/components/optimized';
import SelectItems from 'src/app/components/optimized/SelectItems/SelectItems';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectProducts } from 'src/app/store/slices/marketing/products/productsAsyncThunks';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import CategoryViewSelect from 'src/app/components/page/discount/Selectors/CategoryViewSelect';
interface SpecificProductsProps {}

const SpecificProducts: React.FC<SpecificProductsProps> = ({ name = 'select products' }) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.products);
	const [state, setState] = useState({
		showSelect: false,
		showPopup: false,
		selectedItem: [],
	});

	const { showSelect, showPopup, selectedItem } = state;

	useEffect(() => {
		dispatch(getSelectProducts());
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
				<Button
					variant='secondary'
					RightIcon={'ltr' ? FaChevronRight : FaChevronLeft}
					onClick={() => setState({ ...state, showSelect: true })}
				>
					{t(name)}
				</Button>

				{showSelect && (
					<SelectItems
						title={t('products')}
						onClose={() => setState({ ...state, showSelect: false })}
						select={products}
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

export default SpecificProducts;
