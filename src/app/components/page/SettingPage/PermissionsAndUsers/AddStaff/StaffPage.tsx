import { useTranslation } from 'react-i18next';
import { Button, ClientBox, SubHeader } from 'src/app/components/optimized';
import Avatar from 'src/app/components/optimized/UiKits/Avatar';
import { IoMdAddCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { getUsers } from 'src/app/store/slices/settingsPage/users/usersAsyncThunks';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { useEffect, useState } from 'react';
import { Role, User } from 'src/app/interface/settingsInterface/UsersSettingsInterface';
import StuffTable from 'src/app/components/page/SettingPage/PermissionsAndUsers/AddStaff/StaffTable';
import ActionsBtn from 'src/app/components/page/SettingPage/PermissionsAndUsers/AddStaff/ActionsBtn';


const StaffPage = () => {
    const [array, setArray] = useState<string[]>([]);
	const { t } = useTranslation();
	const navigate = useNavigate();
	// redux
	const dispatch = useAppDispatch();
	const { users,isLoading } = useAppSelector((state) => state.usersSettings);
	

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<div className='flex-col-global gap-2'>
			<SubHeader title={t('Users & Permissions')} >
				<Button
					variant='primary'
					LeftIcon={IoMdAddCircle}
					onClick={() => navigate('addStuff')}
				>
					{t('add staff')}
				</Button>
			</SubHeader>
			{/* control header row */}
			<div className='px-3'>

				<ActionsBtn />
				<hr className='pb-4' />
				<div className='global-cards bg-light-2'>

					{users?.length > 0 && users?.map((usersMember: User) => (
						<div key={usersMember.id} className='flex-col-global'>
							<div>
								<h3 className='title'>{t('Owner')}</h3>
								<p className='text-subtitle text-sm py-2'>{t('Add users and define what they can see or do in your store.')}</p>
							</div>
							<div className='flexResponsive'>
								<ClientBox
									title={usersMember.name}
									details={usersMember.role.name}
									avatar={<Avatar variant='user' fullName={usersMember.name} />}
								/>
								<div>
									<Button variant='tertiary' onClick={() => navigate('transferOwnership')}>
										{t('Transfer Ownership')}
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='px-3'>
				<h3 className='title'>{t('Staff')}</h3>
				<p className='text-subtitle text-sm py-2'>{t('Add users and define what they can see or do in your store.')}</p>
			</div>

			{/* import table all stuff */}
			<StuffTable  data={users} isLoading={isLoading} />
		</div>
	)

}
export default StaffPage;