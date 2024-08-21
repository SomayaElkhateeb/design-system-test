import { useFieldArray, UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import DropDownMenu from 'src/app/components/optimized/DropDownMenu';
import { LiaTrashAlt } from 'react-icons/lia';
import { BiEdit } from "react-icons/bi";
import { IAddAttributeFamilies } from '../_hook/HookAddAttributeFamilies';
import { useEffect, useState } from 'react';
import { AddFillIconWhite } from 'src/app/utils/icons';
import GroupAttributeTable from './GroupAttributeTable';
import CustomAttributes from './CustomAttributes';
import FormField from "src/app/components/ui/form/field";
import { Input } from "src/app/components/ui/input";
import { GlobalDialog } from "src/app/components/shared";


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

    const handleClose = () => {
        setOpenDialog(false);
    };

    const dialogStyle = {
        width: { lg: '50%', md: '70%', xs: '90%' },
        maxHeight: { md: '600px', xs: '500px' },
    };

    const handleOpenDialog = (index: number | null) => {
        setSelectedIndex(index);
        setOpenDialog(true);
    };

    const handleAddGroup = () => {
        // Get the values for the new group
        const name = formStore.getValues(`attribute_groups.${fields.length}.name`);
        const position = formStore.getValues(`attribute_groups.${fields.length}.position`);
        const isUserDefined = formStore.getValues(`attribute_groups.${fields.length}.is_user_defined`) || 0;
    
        // Ensure the position is unique
        const existingPositions = fields.map(field => field.position);
        if (existingPositions.includes(position)) {
            // Optionally, you might want to show an error message or alert here
            console.log(`Position ${position} already exists.`);
            return;
        }
    
        // Create the new group object
        const newGroup = {
            name: name || '',
            position: position || fields.length + 1,
            is_user_defined: isUserDefined,
            custom_attributes: [],
        };
    
        // Append the new group to the form's array
        append(newGroup);
    
        // Retrieve the updated groups from the form state
        const updatedGroups = formStore.getValues('attribute_groups');
    
        // Remove any duplicate groups before saving to localStorage
        const uniqueGroups = Array.from(new Map(updatedGroups.map(group => [group.position, group])).values());
    
        // Save the updated unique groups to localStorage
        localStorage.setItem('attribute_groups', JSON.stringify(uniqueGroups));
    
        // Close the dialog
        handleClose();
    };
    
    
    

    return (
        <div className="flex-col-global gap-4">
            <div>
                <Button variant='primary' LeftIcon={AddFillIconWhite} onClick={() => handleOpenDialog(null)}>
                    {t("add group")}
                </Button>
            </div>

            {openDialog && (
                <GlobalDialog openDialog={openDialog} handleClose={handleClose} style={dialogStyle}>
                    <div className='flex-col-global'>
                        <h3 className='title'>{t('Add Group')}</h3>

                        <FormField
                            formStore={formStore}
                            name={`attribute_groups.${fields.length}.name`}
                            label={t('Group Name')}
                            render={(field) => <Input {...field} placeholder={t('e.g., Group1')} />}
                        />

                        <FormField
                            formStore={formStore}
                            name={`attribute_groups.${fields.length}.position`}
                            label={t('Position')}
                            render={(field) => <Input {...field} placeholder={t('e.g., 1')} />}
                        />
                    </div>
                    <div className='flex items-center justify-end gap-5 py-5'>
                        <Button variant='tertiary' onClick={handleClose}>
                            {t('cancel')}
                        </Button>

                        <Button
                            variant='primary'
                            onClick={handleAddGroup}
                        >
                            {t('add')}
                        </Button>
                    </div>
                </GlobalDialog>
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
                        title={item.name || t('Group Name')} // Display the name from the field item
                    >
                        <div>
                            <GroupAttributeTable data={data} />
                            <CustomAttributes />
                        </div>
                    </DropDownMenu>
                </div>
            ))}
        </div>
    );
};

export default AddGroups;
