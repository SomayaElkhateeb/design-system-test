
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/app/components/optimized';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import PopupDelete from 'src/app/components/optimized/Popups/PopupDelete';
import { useAppDispatch } from 'src/app/store';
import { deleteBranch, getBranches } from 'src/app/store/slices/settingsPage/branches/branchesAsyncThunks';
import { UseDeleteItem } from 'src/app/utils/hooks/CustomDelete';
import { EditIcon, RemoveIcon, ViewIcon } from 'src/app/utils/icons';

export default function BranchCard({ data, currentLocale }: { data: any; currentLocale: any; }) {
	const iconClassName = 'fill-pri-dark cursor-pointer';
	const { t } = useTranslation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();

	const branchData = currentLocale === 'ar' ? data.ar : data.en; // i don't know how to use it

	const {
		openDeleteDialog,
		custom_Id,
		handelDeleteItem,
		handelCloseDeleteDialog,
		handelId,
		handelOpenDialog,
	} = UseDeleteItem();

	const handelDeleteBranch = () => {
		dispatch(deleteBranch(custom_Id)).then((promiseResponse: any) => {
			if ((promiseResponse.payload.code = 200)) {
				handelCloseDeleteDialog();
				dispatch(getBranches());
			}
		});
	};

	const handleEdit = () => {
		setSelectedOption('');
		custom_Id && navigate(`add-branch?id=${custom_Id}`);
	  }

	useEffect(() => {
		dispatch(getBranches());
	}, [dispatch]);

	const handelDelete = () => {
		handelOpenDialog();
		setSelectedOption('');
	}

	return (
		<div className='flex justify-between cardDetails-sharedClass p-5'>
			<div className='flex-col-global gap-2'>
				<div className='flex items-center gap-1.5'>
					<h2 className='title'>{data.name}</h2>
					{data.type && (
						<span className='bg-borders-lines paragraph text-subtitle p-1 px-2 rounded-sm '>
							{t('Main')}
						</span>
					)}
				</div>
				<div>
					<p className='paragraph'>{data.address}</p>
					<p className='paragraph'>{data.city}</p>
					<p className='paragraph text-subtitle'>{data.country}</p>
					<p className='paragraph'>{data.phone}</p>
				</div>
			</div>
			<div className='flex flex-col justify-between items-end'>
				<div className='flex items-center gap-5 '>
					<button onClick={handelDeleteBranch}>
						<RemoveIcon className={iconClassName} />
					</button>
					<button onClick={handleEdit}>
						<EditIcon className={iconClassName} />
					</button>
				</div>
				<Button variant='tertiary' text={t('View Inventory')} LeftIcon={ViewIcon} />
			</div>

			{openDeleteDialog && (
					<PopupDelete
						open={openDeleteDialog}
						onClose={handelCloseDeleteDialog}
						title={t('Delete Item')}
						subTitle={t('Do You Want To Delete This Item')}
						onDelete={handelDelete}
					/>
				)}
		</div>
	);
}
