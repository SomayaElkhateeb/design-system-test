import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdAddCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { ArrangeButton, Button, SubHeader } from 'src/app/components/optimized';
import FilterButton from 'src/app/components/optimized/Buttons/FilterButton';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getRolesList } from 'src/app/store/slices/settingsPage/roles/rolesAsyncThunks';
import RolesTable from './RolesTable';
import AddRole from './AddRole';

const RolesPage = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [openDialog, setOpenDialog] = useState<boolean>(true);

	// redux
	const dispatch = useAppDispatch();
	const { rolesList, isLoading } = useAppSelector((state) => state.rolesSettings);
	console.log('rolesList', rolesList);

	useEffect(() => {
		dispatch(getRolesList());
	}, [dispatch]);


	return (
		<>
			<div className='flex-col-global gap-2'>
				<Btn />
				<hr />
				{/* import table all roles */}
				<RolesTable rolesList={rolesList} isLoading={isLoading} />
			</div>
			{/* {openDialog && <AddRole openDialog={openDialog} setOpenDialog={setOpenDialog} />} */}
		</>
	);
};

export default RolesPage;

const Btn = () => {
	const [selectedOption, setSelectedOption] = useState('name');

	const handleSelect = (optionId: string) => {
		setSelectedOption(optionId);
	};

	const sortMenus = [
		{ id: '1', text: 'Sort by Name' },
		{ id: '2', text: 'Sort by Date' },
		{ id: '3', text: 'Sort by Size' },
	];

	return (
		<div className='flex-row-global justify-between w-full pb-3'>
			<div>
				<input placeholder='Search' />
			</div>
			<div className='flex-row-global gap-3'>
				<ArrangeButton
					sortMenus={sortMenus}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
				<FilterButton
					sortMenus={sortMenus}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
			</div>
		</div>
	);
};
