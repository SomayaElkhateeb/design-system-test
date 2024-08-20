import { useFieldArray, UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import DropDownMenu from 'src/app/components/optimized/DropDownMenu';
import { LiaTrashAlt } from 'react-icons/lia';
import { FaCirclePlus } from 'react-icons/fa6';
import { BiEdit } from "react-icons/bi";
import { IAddAttributeFamilies } from '../_hook/HookAddAttributeFamilies';
import GroupForm from './GroupForm';
import { useState } from 'react';
import { AddFillIconWhite } from 'src/app/utils/icons';
import GroupAttributeTable from './GroupAttributeTable';
import CustomAttributes from './CustomAttributes';

const AddGroups = ({ formStore, label }: { formStore: UseFormReturn<IAddAttributeFamilies>; label: string }) => {
    const { t } = useTranslation();
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const { fields, append, remove } = useFieldArray({
        control: formStore.control,
        name: 'attribute_groups',
    });

    const data = [
        { code: 'dygectey', name: 'cuerh', type: 5 },
        { code: 'dyctey', name: 'cuerh', type: 5 },
        // Add more data as needed...
    ];

    const handleOpenDialog = (index: number | null) => {
        setSelectedIndex(index);
        setOpenDialog(true);
    };

    return (
        <div className="flex-col-global gap-4">
            <h4 className='title text-lg'>{t('Groups')} ({fields.length})</h4>

            {fields.length > 0 ? '' : <div>
                <Button variant='primary' LeftIcon={AddFillIconWhite} onClick={() => handleOpenDialog(null)}>
                    {t("add group")}
                </Button>
            </div>}

            {openDialog && (
                <GroupForm
                    formStore={formStore}
                    openDialog={openDialog}
                    setOpenDialog={() => setOpenDialog(false)}
                    index={selectedIndex !== null ? selectedIndex : fields.length}
                />
            )}

            {fields.length > 0 && fields.map((item, i) => (
                <div key={item.id} className="global-cards my-2">
                    <DropDownMenu
                        addCompo={
                            <div className='flex gap-4 items-center'>
                                <LiaTrashAlt
                                    onClick={() => remove(i)}
                                    className="iconClass text-[red]"
                                />
                                <BiEdit
                                    color="#032C58"
                                    onClick={() => handleOpenDialog(i)}
                                />
                            </div>
                        }
                        variant
                        title={`${t("Group")} ${i + 1}`}
                    >
                        <div>
                            <GroupAttributeTable data={data} />
                            <CustomAttributes />

                            <Button
                                variant='secondary'
                                textClassName='flex items-center justify-center gap-1.5 whitespace-nowrap bg-transparent border-title px-4 py-3 rounded-lg border'
                                className='px-0 border-0 rounded-none'
                                onClick={() =>
                                    append({
                                        code: '',
                                        name: '',
                                        position: fields.length + 1,
                                        is_user_defined: 0,
                                        custom_attributes: '', // []
                                    })
                                }
                            >
                                <FaCirclePlus className='size-5' />
                                {label}
                            </Button>
                        </div>
                    </DropDownMenu>
                </div>
            ))}
        </div>
    );
};

export default AddGroups;
