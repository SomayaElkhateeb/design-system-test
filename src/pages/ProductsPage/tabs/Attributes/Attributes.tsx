import ThreeDotsButton from "src/app/components/optimized/Buttons/ThreedotsButton";
import AttributesHeader from "./_comp/AttributesHeader"
import AttributesTable from "./_comp/AttributesTable"
import { UseDeleteItem } from "src/app/utils/hooks/CustomDelete";
import { EditIcon } from 'src/app/utils/icons';
import { LiaTrashAlt } from 'react-icons/lia';
import useSelectBox from "src/app/components/optimized/Menu/useSelectBox";
import { useAppDispatch, useAppSelector } from "src/app/store";
import { useEffect, useMemo } from "react";
import { deleteAttribute, getAttributes } from "src/app/store/slices/Attributes/Attribute/attributeAsyncThunks";
import { useNavigate } from "react-router-dom";
import PopupDelete from "src/app/components/optimized/Popups/PopupDelete";
import { useTranslation } from "react-i18next";


const Attributes = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { t } = useTranslation();

	const { attributesList, isLoading } = useAppSelector((state) => state.attributesProducts);

	useEffect(() => {
		dispatch(getAttributes());
	}, [dispatch]);

	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();


	const options = [
		{
			id: '1',
			text: 'edit',
			icon: <EditIcon className='fill-title' />,
		},
		{
			id: '2',
			text: 'delete',
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];
	console.log(attributesList)
	const {
		openDeleteDialog,
		custom_Id,
		handelDeleteItem,
		handelCloseDeleteDialog,
		handelId,
		handelOpenDialog,
	} = UseDeleteItem();


	const handelDeleteAttribute = () => {
		dispatch(deleteAttribute(custom_Id)).then((promiseResponse: any) => {
			if ((promiseResponse.payload.code = 200)) {
				handelCloseDeleteDialog();
				dispatch(getAttributes());
			}
		});
	};

	useMemo(() => {
		switch (selectedOption) {
			case 'delete':
				handelOpenDialog();
				setSelectedOption('');
				break;
			case 'edit':
				setSelectedOption('');
				custom_Id && navigate(`add-attribute?id=${custom_Id}`);
				break;
				case 'Delete all categories':
				CategoriesArrangedData?.length > 0
					? dispatch(deleteAllCategoriesAction({ indexes: categoriesIds })).then(
						(promiseResponse: any) => {
							if ((promiseResponse.payload.code = 200)) {
								dispatch(getCategoriesTable());
							}
						},
					)
					: toast.error('There are no data to delete it');
				setSelectedOption('');
				break;
			case 'Copy category link':
				navigator.clipboard.writeText(copyLink);
				setSelectedOption('');
				toast.success(`${copyLink}`)
				break;
		}
	}, [selectedOption, custom_Id]);

	return (
		<div className='flex-col-global gap-2 px-5'>
			<AttributesHeader />
			<hr />
			<AttributesTable handelId={handelId} data={attributesList} isLoading={isLoading}>
				<ThreeDotsButton
					sortMenus={options}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
			</AttributesTable>

			{/* openDeleteDialog */}
			{openDeleteDialog && (
				<PopupDelete
					open={openDeleteDialog}
					onClose={handelCloseDeleteDialog}
					title={t('Delete Item')}
					subTitle={t('Do You Want To Delete This Item')}
					onDelete={handelDeleteAttribute}
				/>
			)}
		</div>
	)
}

export default Attributes;
