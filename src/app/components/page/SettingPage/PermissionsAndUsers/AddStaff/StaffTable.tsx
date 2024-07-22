import { TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { LiaTrashAlt } from 'react-icons/lia';
import BaseTable, { GlobalTableCell } from 'src/app/components/optimized/TableLayoutGlobal/base.table';

import Avatar from 'src/app/components/optimized/UiKits/Avatar';
import { EditIcon, MoreIcon } from 'src/app/utils/icons';
import MenuOptions from 'src/app/components/optimized/Menu/MenuOptions';
import { User } from 'src/app/interface/settingsInterface/UsersSettingsInterface';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';

export default function StuffTable({
	data,

	// settingMenus,
	isLoading,
}: {
	data: User[];

	// settingMenus: menuType[];
	isLoading: boolean;
}) {
	//  hooks
	const { language } = useLanguage();
	const { t } = useTranslation();
	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();

	// settingMenus
	const options = [
		{
			id: "1",
			text: 'edit',
			icon: <EditIcon className='fill-title' />,
		},
		{
			id: "2",
			text: 'delete',
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];
	//  headers
	const dataHeaders = [
		{ title: t('staff name') },
		{ title: t('email') },
		{ title: t('Role') },
		{ title: t('Status') },
		{ title: t('actions') },
	];

	return (
		<BaseTable
			isLoading={isLoading}
			language={language}
			color='#55607A'
			headers={dataHeaders.map((h) => h)}
			rows={data?.map((e: User, i: number) => {
				return {
					item: e,
					elements: [
						<GlobalTableCell>
							<div className=' flex  items-center gap-[.3rem] '>
								<Avatar fullName={e.name} />
								<div className='flex-col-global gap-[.3rem]'>
									<p className='title'>{e.name}</p>
								</div>
							</div>
						</GlobalTableCell>,
						<GlobalTableCell>
							<p className='text-primary underline text-sm'>{e.email}</p>
						</GlobalTableCell>,
						<GlobalTableCell>
							<p className='text-title text-sm'>{e.role.name}</p>
						</GlobalTableCell>,
						<GlobalTableCell>
							<p className='text-title text-sm'>{e.status === 1 ? 'Active' : 'not Active'}</p>
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
}
