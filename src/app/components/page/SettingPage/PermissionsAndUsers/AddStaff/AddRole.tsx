import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import { GlobalDialog } from 'src/app/components/shared';
import CustomizedAccordions from './PermissionType';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getPermissions } from 'src/app/store/slices/settingsPage/roles/rolesAsyncThunks';
import { useEffect } from 'react';

const AddRole = ({
	openDialog,
	setOpenDialog,
}: {
	openDialog: boolean;
	setOpenDialog: (e: boolean) => void;
}) => {
	const { t } = useTranslation();

	const handleClose = (status: boolean) => {
		setOpenDialog(status);
	};

	// redux
	const dispatch = useAppDispatch();
	const { permissions, isLoading, error } = useAppSelector((state) => state.rolesSettings);
	console.log('permissions', permissions);

	useEffect(() => {
		dispatch(getPermissions());
	}, [dispatch]);

	const dialogStyle = {
		width: { lg: '50%', md: '70%', xs: '90%' },
		height: { md: '600px', xs: '300px' },
	};

	return (
		<GlobalDialog openDialog={openDialog} handleClose={handleClose} style={dialogStyle}>
			{/* inputs */}

			{/* permission */}
			<CustomizedAccordions accordionData={permissions} />
			{/* <DynamicAccordion /> */}
			<div className='flex-end'>
				<Button variant='tertiary' onClick={() => handleClose(false)}>
					{t('cancel')}
				</Button>
				<Button onClick={() => handleClose(false)}>{t('add')}</Button>
			</div>
		</GlobalDialog>
	);
};

export default AddRole;
