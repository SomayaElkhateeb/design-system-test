import { addAttributeInterface } from "../_hook/HookAddAttributes";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FormField from "src/app/components/ui/form/field";
import { Input } from "src/app/components/ui/input";
import TabbedFormField from "src/app/components/ui/form/tabbed-field";
import FormSwitchField from "src/app/components/ui/form/FormSwitchField";

const OptionFields = ({ formStore }: { formStore: UseFormReturn<addAttributeInterface> }) => {
    const { t } = useTranslation();

    return (
        <div className='global-cards gap-[1.2rem]'>
            <h3 className='title'>{t('Option Fields')}</h3>
            {/* repeat ?? */}

            <TabbedFormField
                formStore={formStore}
                keys={[
                    { name: 'adminNameEn', label: 'En' },
                    { name: 'adminNameAr', label: 'عربي' },
                ]}
                label={t('Admin Name')}
                renderer={(field) => <Input {...field} />}
            />

            <FormField
                formStore={formStore}
                name='swatchType'
                label={t('Swatch Type')}
                render={(field) => <Input {...field} />}
            />


            <div className="flex gap-4">
                <FormSwitchField<addAttributeInterface>
                    formStore={formStore}
                    name='order'
                    enable
                />
                <p>{t('Sort Order')}</p>
            </div>
        </div>
    )
}

export default OptionFields
