import { TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { LiaTrashAlt } from 'react-icons/lia';
import BaseTable, {
	GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';

import { EditIcon, MoreIcon } from 'src/app/utils/icons';

import { Role } from 'src/app/interface/settingsInterface/rolesSettingsInterface';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';

const RolesTable = ({ rolesList, isLoading }: { rolesList: Role[]; isLoading: boolean }) => {
	//  hooks
	const { language } = useLanguage();
	const { t } = useTranslation();
    const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();

	// settingMenus
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
	//  headers
	const dataHeaders = [
		{ title: t('id') },
		{ title: t('role name') },
		{ title: t('permission type') },
		{ title: t('actions') },
	];

	return (
		<BaseTable
			isLoading={isLoading}
			language={language}
			color='#55607A'
			headers={dataHeaders.map((h) => h)}
			rows={rolesList?.map((e: Role, i: number) => {
				return {
					item: e,
					elements: [
						<GlobalTableCell>
							<p className='text-title text-sm'>{i + 1}</p>
						</GlobalTableCell>,
						<GlobalTableCell>
							<p className='title'>{e.name}</p>
						</GlobalTableCell>,
						<GlobalTableCell>
							<p className='text-title text-sm'>{e.permission_type}</p>
						</GlobalTableCell>,

						<GlobalTableCell>
							<ThreeDotsButton
								sortMenus={options}
								selectedOption={selectedOption}
								handelSelect={handleSelect}
							/>
						</GlobalTableCell>,
					],
				};
			})}
		/>
	);
};

export default RolesTable;
