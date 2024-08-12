
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import { addAttributeInterface } from '../_hook/HookAddAttributes';
import { Button } from 'src/app/components/optimized';
import { AddFillIcon } from 'src/app/utils/icons';

const OptionFields = ({ formStore }: { formStore: UseFormReturn<addAttributeInterface> }) => {
    const { t } = useTranslation();
    const { xs } = useResponsive();

    const [optionCount, setOptionCount] = useState(1);

    const addNewOption = () => {
        setOptionCount(optionCount + 1);
        const newOptionKey = `options.option_${optionCount}`;

        formStore.setValue(newOptionKey, {
            admin_name: '',
            en: { label: '' },
            ar: { label: '' },
            sort_order: 0, // 1 or 0
            swatch_value: '',
        });
    };
    
    return (
        <div>
            {Array.from({ length: optionCount }).map((_, index) => (
                <div className='global-cards gap-[1.2rem]' key={index}>
                    <h3 className='title'> {t('Option Fields')} {index + 1}</h3>
                    <div className={`w-full ${xs ? 'flex-col-global' : 'flex gap-4'}`}>
                        <div className='w-full lg:w-1/2'>
                            <FormField
                                formStore={formStore}
                                name={`options.option_${index}.admin_name`}
                                label={t('Admin Name')}
                                render={(field) => <Input {...field} />}
                            />
                        </div>

                        <div className='w-full lg:w-1/2'>
                            <TabbedFormField
                                formStore={formStore}
                                keys={[
                                    { name: `options.option_${index}.en.label`, label: 'En' },
                                    { name: `options.option_${index}.ar.label`, label: 'عربي' },
                                ]}
                                label={t('Name')}
                                renderer={(field) => <Input {...field} />}
                            />
                        </div>
                    </div>

                    <div className={`w-full ${xs ? 'flex-col-global' : 'flex gap-4'}`}>
                        <div className='w-full lg:w-1/2'>
                            <FormField
                                formStore={formStore}
                                name={`options.option_${index}.swatch_value`}
                                label={t('Swatch Type')}
                                render={(field) => <Input {...field} />}
                            />
                        </div>

                        <div className='w-full lg:w-1/2'>
                            <div className="flex gap-4">
                                <FormSwitchField<addAttributeInterface>
                                    formStore={formStore}
                                    name={`options.option_${index}.sort_order`}
                                    enable
                                />
                                <p>{t('Sort Order')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <Button onClick={addNewOption} variant='secondary' LeftIcon={AddFillIcon}>
                {t('Add More Option')}
            </Button>
        </div>
    );
};

export default OptionFields;


