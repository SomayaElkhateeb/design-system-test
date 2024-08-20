import { UseFormReturn } from "react-hook-form";
import { IAddAttributeFamilies } from "../_hook/HookAddAttributeFamilies";
import { useTranslation } from "react-i18next";
import FormField from "src/app/components/ui/form/field";
import { Input } from "src/app/components/ui/input";
import { GlobalDialog } from "src/app/components/shared";
import SelectFormField from "src/app/components/ui/form/SelectFormField";
import CustomAttributes from "./CustomAttributes";
import { Button } from "src/app/components/optimized";

const GroupForm = ({
    formStore,
    openDialog,
    setOpenDialog,
    index,
}: {
    formStore: UseFormReturn<IAddAttributeFamilies>;
    openDialog: boolean;
    setOpenDialog: () => void;
    index: number;
}) => {
    const { t } = useTranslation();

    const handleClose = () => {
        setOpenDialog(false);
    };

    const dialogStyle = {
        width: { lg: '50%', md: '70%', xs: '90%' },
        maxHeight: { md: '600px', xs: '500px' },
    };

    const options = [
        { value: 'all', label: 'All' },
        { value: 'custom', label: 'Custom' },
    ];

    const customAttributeValue = formStore.watch(`attribute_groups.${index}.custom_attributes`);

    return (
        <GlobalDialog openDialog={openDialog} handleClose={handleClose} style={dialogStyle}>
            <div className='flex-col-global'>
                <h3 className='title'>{t('Add Group')}</h3>

                <FormField
                    formStore={formStore}
                    name={`attribute_groups.${index}.name`}
                    label={t('Group Name')}
                    render={(field) => <Input {...field} placeholder={t('e.g., Group1')} />}
                />

                <FormField
                    formStore={formStore}
                    name={`attribute_groups.${index}.position`}
                    label={t('Position')}
                    render={(field) => <Input {...field} placeholder={t('e.g., 1')} />}
                />

                <SelectFormField
                    name={`attribute_groups.${index}.custom_attributes`}
                    label={t('Attributes')}
                    formStore={formStore}
                    options={options}
                    placeholder={t('Select Attributes')}
                />

                {customAttributeValue === 'custom' && <CustomAttributes />}
            </div>
            <div className='flex items-center justify-end gap-5 py-5'>
                <Button variant='tertiary' onClick={handleClose}>
                    {t('cancel')}
                </Button>
                <Button variant='primary'>
                    {t('add')}
                </Button>
            </div>
         </GlobalDialog>
    );
};

export default GroupForm;
