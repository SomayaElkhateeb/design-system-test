import { TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { LiaTrashAlt } from 'react-icons/lia';
import BaseTable from 'src/app/components/optimized/TableLayoutGlobal/base.table';
import CustomTableBodyCheckbox from 'src/app/components/optimized/UiKits/CustomTableBodyCheckbox';
import CustomTableHeaderCheckbox from 'src/app/components/optimized/UiKits/CustomTableHeaderCheckbox';
import Avatar from 'src/app/components/optimized/UiKits/Avatar';
import { EditIcon, MoreIcon } from 'src/app/utils/icons';
import MenuOptions from 'src/app/components/optimized/Menu/MenuOptions';
import { RolesList } from 'src/app/interface/settingsInterface/rolesSettingsInterface';

const RolesTable = ({ rolesList, isLoading }: { rolesList: RolesList[]; isLoading: boolean }) => {
    //  hooks
    const { language } = useLanguage();
    const { t } = useTranslation();

    // settingMenus
    const options = [
        {
            id: 1,
            text: 'edit',
            icon: <EditIcon className='fill-title' />,
            click: () => console.log('edit'),
        },
        {
            id: 2,
            text: 'delete',
            icon: <LiaTrashAlt size='28' className='fill-error' />,
            click: () => console.log('delete'),
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
            rows={rolesList?.map((e, i: number) => {
                return {
                    item: e,
                    elements: [
                        <TableCell>
                            <p className='text-title text-sm'>{i + 1}</p>
                        </TableCell>,
                        <TableCell>


                            <p className='title'>{e.name}</p>

                        </TableCell>,
                        <TableCell>
                            <p className='text-title text-sm'>{e.permission_type}</p>
                        </TableCell>,


                        <TableCell>
                            <MenuOptions btn={<MoreIcon className='fill-subtitle' />} options={options} />
                        </TableCell>,
                    ],
                };
            })}
        />
    );
}

export default RolesTable;