import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IoMdAddCircle } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { SubHeader, Button } from 'src/app/components/optimized';
import Tabs from 'src/app/components/optimized/Tabs/Tabs';
import RolesPage from 'src/app/components/page/SettingPage/PermissionsAndUsers/AddStaff/RolesPage';
import StaffPage from 'src/app/components/page/SettingPage/PermissionsAndUsers/AddStaff/StaffPage';

const Users = () => {
	//  hooks
	const { t } = useTranslation();
	const location = useLocation();
	const navigate = useNavigate();
	const path = location.pathname;
	return (
		//  tabs section
		<>
			{/* <SubHeader title={path === '/settings/users' ? t('Users & Permissions') : t('Roles')} >
				<Button
					variant='primary'
					LeftIcon={IoMdAddCircle}
					onClick={() => navigate('addStuff')}
				>
					{path === '/settings/users' ? t('add staff') : t('add Roles')}
				</Button>
			</SubHeader> */}

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
				<Tab label={t('staff')} value='1' />
				<Tab label={t('roles')} value='2' />
			</Tabs>
		</>
	)



}
export default Users;
