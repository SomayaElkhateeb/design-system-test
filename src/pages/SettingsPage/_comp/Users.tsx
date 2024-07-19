import { useTranslation } from 'react-i18next';
import { Button, ClientBox, SubHeader } from 'src/app/components/optimized';
import Avatar from 'src/app/components/optimized/UiKits/Avatar';
import { IoMdAddCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { getAdmin } from 'src/app/store/slices/settingsPage/users/usersAsyncThunks';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { useEffect, useState } from 'react';
import { Role } from 'src/app/interface/settingsInterface/UsersSettingsInterface';
import { calculateTimeAgo } from 'src/app/utils';
import StuffTable from 'src/app/components/page/SettingPage/PermissionsAndUsers/AddStuff/StuffTable';
import ActionsBtn from 'src/app/components/page/SettingPage/PermissionsAndUsers/AddStuff/ActionsBtn';

const Users = () => {
	const [array, setArray] = useState<string[]>([]);
	const { t } = useTranslation();
	const navigate = useNavigate();
	// redux
	const dispatch = useAppDispatch();
	const { admin, isLoading, error } = useAppSelector((state) => state.usersSettings);
	console.log(admin)

	useEffect(() => {
		dispatch(getAdmin());
	}, [dispatch]);

	return (
		<div className='flex-col-global'>
			<SubHeader title={t('Users & Permissions')} />
			{/* control header row */}
			<div className='px-3'>
				<div className='flex-row-global justify-between pb-3'>
					<div>
						<Button
							variant='primary'
							LeftIcon={IoMdAddCircle}
							onClick={() => navigate('addStuff')}
						>
							{t('add staff')}
						</Button>
					</div>
					<ActionsBtn />
				</div>
				<hr className='pb-4'/>
				<div className='global-cards bg-pri-top-light'>
					{/* owner section */}
					{admin.length > 0 && admin.map((adminMember: Role) => (
						<div key={adminMember.id} className='flex-col-global'>
							<div>
								<h3 className='title'>{t('Owner')}</h3>
								<p className='text-subtitle text-sm py-2'>{t('Add users and define what they can see or do in your store.')}</p>
							</div>
							<div className='flexResponsive'>
								<ClientBox
									title={adminMember.name}
									details={`Active ${calculateTimeAgo(adminMember.created_at)}`}
									avatar={<Avatar variant='user' fullName={adminMember.name} />}
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

			{/* import table all stuff */}
			<StuffTable array={array} setArray={setArray} data={admin} isLoading={isLoading}/>
		</div>
	)


}
export default Users;
