import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, SelectItems } from 'src/app/components/optimized';
import { FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { getSelectcustomer_groups } from 'src/app/store/slices/marketing/groups/groupsAsyncThunks';
import CategoryViewSelect from 'src/app/components/page/discount/Selectors/CategoryViewSelect';
import { newDiscountInterface } from 'src/pages/MarketingPage/Discounts/NewDiscount/HookForNewDiscount';
import { UseFormReturn } from 'react-hook-form';

interface selectItemsInterface {
	id: string;
	name: string;
}

const SpecificGroups = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
	const { t } = useTranslation();
	const selectItems = [
		{ id: '1', name: 'Dress' },
		{ id: '2', name: 'Fashion' },
	];
	const handelAutoCompleteError = () => {
		return (
			formStore.watch('specificCategories') &&
			formStore?.watch('specificCategories')?.length === 0 && (
				<p className='global_error'>{'choose categories required'}</p>
			)
		);
	};
	const dispatch = useDispatch();
	const { groups } = useSelector((state) => state.groups);
	const [state, setState] = useState({
		showSelect: false,
		showPopup: false,
		selectedItem: [],
	});
	const { showSelect, showPopup, selectedItem } = state;

	useEffect(() => {
		dispatch(getSelectcustomer_groups());
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
					RightIcon={FaChevronRight}
					onClick={() => setState({ ...state, showSelect: true })}
				>
					{t('select groups')}
				</Button>

				{showSelect && (
					<SelectItems
						title={t('Groups')}
						variant='groups'
						onClose={() => setState({ ...state, showSelect: false })}
						select={groups}
						addBtn={handleAddButtonClick}
					/>
				)}

				{selectedItem?.map((item) => {
					console.log('selectedItem', item);
					const { count, title, id, subtitle } = item;
					return (
						<div>
							<CategoryViewSelect
								key={id}
								variant='groups'
								count={count}
								title={title}
								subtitle={subtitle}
								handleDelete={() => setState({ ...state, showPopup: true })}
								handleDeleteItem={() => handleDeleteItem(id)}
								showPopup={showPopup}
								onClose={() => setState({ ...state, showPopup: false })}
							/>
						</div>
					);
				})}
			</div>
			<ToastContainer position='top-center' />
		</div>
	);
};

export default SpecificGroups;
