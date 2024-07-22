import { useEffect } from 'react';

import { ArrangeButton } from 'src/app/components/optimized';
import FilterButton from 'src/app/components/optimized/Buttons/FilterButton';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { getRolesList } from 'src/app/store/slices/settingsPage/roles/rolesAsyncThunks';
import RolesTable from './RolesTable';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { nanoid } from 'nanoid';
import { UseCustomTableSorting } from 'src/app/utils/hooks/UseCustomTablesorting';
import { Role } from 'src/app/interface/settingsInterface/rolesSettingsInterface';

const RolesPage = () => {
	// redux
	const dispatch = useAppDispatch();
	const { rolesList, isLoading } = useAppSelector((state) => state.rolesSettings);
	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();

	useEffect(() => {
		dispatch(getRolesList());
	}, [dispatch]);

	const sortMenus = [
		{ id: nanoid(), text: 'Name A to Z' },
		{ id: nanoid(), text: 'Name Z to A' },
	];

	//  handel Sorting Table
	const sortFunctions = {
		'Name A to Z': (a: Role, b: Role) => a.name.localeCompare(b.name),
		'Name Z to A': (a: Role, b: Role) => b.name.localeCompare(a.name),
	};
	const { arrangedData: RolesArrangedData } = UseCustomTableSorting<Role>(
		sortFunctions,
		rolesList,
		sortMenus?.map((e) => e.text).includes(selectedOption) ? selectedOption : '',
	);

	return (
		<>
			<div className='flex-col-global gap-2'>
				<RolesBtn
					selectedOption={selectedOption}
					handleSelect={handleSelect}
					sortMenus={sortMenus}
				/>
				<hr />
				{/* import table all roles */}
				<RolesTable rolesList={RolesArrangedData} isLoading={isLoading} />
			</div>
		</>
	);
};

export default RolesPage;

const RolesBtn = ({
	selectedOption,
	handleSelect,
	sortMenus,
}: {
	selectedOption: string;
	handleSelect: (e: string) => void;
	sortMenus: { id: string; text: string }[];
}) => {
	return (
		<div className='md:flex-row-global flex-col-global justify-between w-full '>
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
