import React, { useEffect, useState } from 'react';
import { Button, SelectItems } from 'src/app/components/optimized';
import { FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectCustomers } from 'src/app/store/slices/marketing/customers/customersAsyncThunks';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import CategoryViewSelect from 'src/app/components/page/discount/Selectors/CategoryViewSelect';

const SpecificCustomers: React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { customers } = useSelector((state) => state.customers);
	const [state, setState] = useState({
		showSelect: false,
		showPopup: false,
		selectedItem: [],
	});

	const { showSelect, showPopup, selectedItem } = state;

	useEffect(() => {
		dispatch(getSelectCustomers());
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
					{t('select customers')}
				</Button>

				{showSelect && (
					<SelectItems
						title={t('Customers')}
						variant='customers'
						onClose={() => setState({ ...state, showSelect: false })}
						select={customers}
						addBtn={handleAddButtonClick}
					/>
				)}

				{selectedItem?.map((item) => {
					const { fName, lName, id, img, subtitle } = item;
					return (
						<CategoryViewSelect
							variant='customers'
							key={id}
							img={img}
							title={fName + ' ' + lName}
							subtitle={subtitle}
							handleDelete={() => setState({ ...state, showPopup: true })}
							handleDeleteItem={() => handleDeleteItem(id)}
							showPopup={showPopup}
						/>
					);
				})}
			</div>
			<ToastContainer position='top-center' />
		</div>
	);
};

export default SpecificCustomers;
