import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdAddCircle } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { SubHeader, Button } from 'src/app/components/optimized';
import Tabs from 'src/app/components/optimized/Tabs/Tabs';
import AddRole from 'src/app/components/page/SettingPage/PermissionsAndUsers/AddStaff/AddRole';
import RolesPage from 'src/app/components/page/SettingPage/PermissionsAndUsers/AddStaff/RolesPage';
import StaffPage from 'src/app/components/page/SettingPage/PermissionsAndUsers/AddStaff/StaffPage';

const Users = () => {
	//  hooks
	const { t } = useTranslation();
	const location = useLocation();
	const navigate = useNavigate();
	const [value, setValue] = useState(1);
	const [openDialog, setOpenDialog] = useState(false);
	return (
		//  tabs section
		<>
			<SubHeader title={t('Users & Permissions')}>
				<Button
					variant='primary'
					LeftIcon={IoMdAddCircle}
					onClick={() => {
						if (value === 1) {
							navigate('addStuff');
						} else {
							setOpenDialog(true);
						}
					}}
				>
					{value === 1 ? t('add staff') : t('add Roles')}
				</Button>
			</SubHeader>

			<Tabs
				body={
					<>
						<TabPanel value='1'>
							<StaffPage />
						</TabPanel>
						<TabPanel value='2'>
							<RolesPage />
						</TabPanel>
					</>
				}
			>
				{/*  children */}
				<Tab onClick={() => setValue(1)} label={t('Staff')} value='1' />
				<Tab onClick={() => setValue(2)} label={t('roles')} value='2' />
			</Tabs>
			{openDialog && <AddRole openDialog={openDialog} setOpenDialog={setOpenDialog} />}
		</>
	);
};
export default Users;
