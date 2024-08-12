import useResponsive from "src/app/utils/hooks/useResponsive";
import { addAttributeInterface } from "../_hook/HookAddAttributes";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FormField from "src/app/components/ui/form/field";
import { Input } from "src/app/components/ui/input";
import SelectFormField from "src/app/components/ui/form/SelectFormField";
import TabbedFormField from "src/app/components/ui/form/tabbed-field";
import FormSwitchField from "src/app/components/ui/form/FormSwitchField";


const AttributeInfo = ({ formStore }: { formStore: UseFormReturn<addAttributeInterface> }) => {
    const { xs } = useResponsive();
    const { t } = useTranslation();

    const attributeType = [
        { name: t('select'), id: 1 },
        { name: t('text'), id: 2 },
        { name: t('radio'), id: 3 },
        { name: t('checkbox'), id: 4 },
    ]

    return (
        <div className='global-cards gap-[1.2rem]'>
            <h3 className='title'>{t('Attribute Info')}</h3>
            <div className={`w-full ${xs ? 'flex-col-global' : 'flex gap-4'}`}>
                <div className='w-1/2'>
                    <FormField
                        formStore={formStore}
                        name='code'
                        label={t('Code')}
                        render={(field) => <Input {...field} />}
                    />
                </div>
                <div className='w-1/2'>
                    <SelectFormField
                        name='attributeType'
                        label={t('Attribute Type')}
                        formStore={formStore}
                        options={attributeType?.map((item: any) => ({
                            label: item?.name,
                            value: item?.id?.toString(),
                        }))}
                        placeholder={t('Select Type')}
                    />
                </div>
            </div>
            <div className={`w-full ${xs ? 'flex-col-global' : 'flex gap-4'}`}>
                <div className='w-1/2'>
                    <TabbedFormField
                        formStore={formStore}
                        keys={[
                            { name: 'adminNameEn', label: 'En' },
                            { name: 'adminNameAr', label: 'عربي' },
                        ]}
                        label={t('Admin Name')}
                        renderer={(field) => <Input {...field} />}
                    />
                </div>
                <div className='w-1/2'>
                    <FormField
                        formStore={formStore}
                        name='swatchType'
                        label={t('Swatch Type')}
                        render={(field) => <Input {...field} />}
                    />
                </div>
            </div>

            <div className="flex gap-4">
                <FormSwitchField<addAttributeInterface>
                    formStore={formStore}
                    name='default'
                    enable
                />
                <p>{t('Default Null-Option')}</p>
            </div>
        </div>
    )
}

export default AttributeInfo
