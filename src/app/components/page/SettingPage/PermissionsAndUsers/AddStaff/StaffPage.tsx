import { useTranslation } from 'react-i18next';
import { Button, ClientBox } from 'src/app/components/optimized';
import Avatar from 'src/app/components/optimized/UiKits/Avatar';

import { useNavigate } from 'react-router-dom';
import { getUsers } from 'src/app/store/slices/settingsPage/users/usersAsyncThunks';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { useEffect, useState } from 'react';
import { User } from 'src/app/interface/settingsInterface/UsersSettingsInterface';
import StuffTable from 'src/app/components/page/SettingPage/PermissionsAndUsers/AddStaff/StaffTable';
import ActionsStuffBtns from './ActionsStuffBtns';
import { UseCustomTableSorting } from 'src/app/utils/hooks/UseCustomTablesorting';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { nanoid } from 'nanoid';

const StaffPage = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	// redux
	const dispatch = useAppDispatch();
	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();
	const { users, isLoading } = useAppSelector((state) => state.usersSettings);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	const sortMenus = [
		{ id: nanoid(), text: 'Name A to Z' },
		{ id: nanoid(), text: 'Name Z to A' },
	];

	//  handel Sorting Table
	const sortFunctions = {
		'Name A to Z': (a: User, b: User) => a.name.localeCompare(b.name),
		'Name Z to A': (a: User, b: User) => b.name.localeCompare(a.name),
	};
	const { arrangedData: UserArrangedData } = UseCustomTableSorting<User>(
		sortFunctions,
		users,
		sortMenus?.map((e) => e.text).includes(selectedOption) ? selectedOption : '',
	);

	return (
		<div className='flex-col-global gap-8'>
			{/* control header row */}
			<div className=' flex-col-global gap-0'>
				<ActionsStuffBtns selectedOption={selectedOption} handleSelect={handleSelect} sortMenus={sortMenus} data={users} />
				<hr />
			</div>
			<div className='flex-col-global'>
				<div className='global-cards bg-light-2'>
					{users?.length > 0 &&
						users
							?.filter((e) => e?.role?.name === 'Administrator')
							?.map((usersMember: User) => (
								<div key={usersMember.id} className='flex-col-global'>
									<div>
										<h3 className='title'>{t('Owner')}</h3>
										<p className='text-subtitle text-sm py-2'>
											{t('Add users and define what they can see or do in your store.')}
										</p>
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
				<div>
					<h3 className='title'>{t('Staff')}</h3>
					<p className='text-subtitle text-sm py-2'>
						{t('Add users and define what they can see or do in your store.')}
					</p>
				</div>

				{/* import table all stuff */}
				<StuffTable data={UserArrangedData} isLoading={isLoading} />
			</div>
		</div>
	);
};
export default StaffPage;
