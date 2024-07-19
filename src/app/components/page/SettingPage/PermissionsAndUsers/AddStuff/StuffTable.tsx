import { TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import { LiaTrashAlt } from 'react-icons/lia';
import BaseTable from 'src/app/components/optimized/TableLayoutGlobal/base.table';
import CustomTableBodyCheckbox from 'src/app/components/optimized/UiKits/CustomTableBodyCheckbox';
import CustomTableHeaderCheckbox from 'src/app/components/optimized/UiKits/CustomTableHeaderCheckbox';
import Avatar from 'src/app/components/optimized/UiKits/Avatar';
import { EditIcon, MoreIcon } from 'src/app/utils/icons';
import MenuOptions from 'src/app/components/optimized/Menu/MenuOptions';

export default function StuffTable({
    data,
    array,
    setArray,
    // settingMenus,
    isLoading,
}: {
    // data: OrderInterface[];
    array: string[];
    setArray: (e: string[]) => void;
    // settingMenus: menuType[];
    isLoading: boolean;
}) {
    //  hooks
    const { language } = useLanguage();
    const { t } = useTranslation();

    // settingMenus
    const options = [
        {
            id: 1,
            text: 'edit',
            icon: <EditIcon className='fill-title' />,
            click: () => console.log("edit")
        },
        {
            id: 2,
            text: 'delete',
            icon: <LiaTrashAlt size='28' className='fill-error' />,
            click: () => console.log("delete")
        },
    ];
    //  headers
    const dataHeaders = [
        {
            icon: (
                <CustomTableHeaderCheckbox
                    array={array}
                    setArray={setArray}
                    mainArray={data?.map((e) => e.id)}
                />
            ),
            title: t('staff name'),
        },
        { title: t('email') },
        { title: t('role') },
        { title: t('actions') },
    ];

    return (
        <BaseTable
            isLoading={isLoading}
            language={language}
            color='#55607A'
            headers={dataHeaders.map((h) => h)}
            rows={data?.map((e, i: number) => {
                return {
                    item: e,
                    elements: [
                        <TableCell>
                            <div className=' flex  items-center gap-[.3rem] '>
                                <CustomTableBodyCheckbox array={array} setArray={setArray} id={e.id} />
                                <Avatar fullName={e.name} />
                                <div className='flex-col-global gap-[.3rem]'>
                                    <p className='title'>{e.name}</p>
                                </div>
                            </div>
                        </TableCell>,
                        <TableCell>
                            <p className="text-primary underline text-sm">{e.email}</p>
                        </TableCell>,
                        <TableCell>
                            <p className="text-title font-bold text-sm">{e.role.name}</p>
                        </TableCell>,
                        <TableCell>
                            <MenuOptions
                                btn={<MoreIcon className='fill-subtitle' />}
                                options={options}
                            />
                        </TableCell>,
                    ],
                };
            })}
        />
    );
}
