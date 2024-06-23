import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function updateVariations(currentVariations, options) {
    const newVariations = [];

    function generate(currentOptions, currentVariation) {
        if (currentOptions.length === 0) {
            const existingVariation = currentVariations.find((v) => {
                return options.every((option) => v[option.name] === currentVariation[option.name]);
            });

            newVariations.push({
                ...currentVariation,
                ...(existingVariation || {}),
            });

            return;
        }

        const [option, ...restOptions] = currentOptions;
        for (const value of option.values) {
            generate(restOptions, {
                ...currentVariation,
                [option.name]: value.nameEn,
            });
        }
    }

    generate(options, {});
    return newVariations;
}

function VariationsManager({ options, variations, onVariationsChange }) {
    const { t } = useTranslation();

    useEffect(() => {
        onVariationsChange((currentVariations) => {
            const result = updateVariations(currentVariations, options);
            return result;
        });
    }, [options]);

    if (options.length === 0) {
        return null;
    }

    return (
        <div className='flex flex-col gap-y-3'>
            <h3 className='text-sm font-medium'>{t('Variations')}</h3>
            <div className='border-title/10 border rounded-lg py-3.5 pe-6 ps-4'>
                <table className='text-xs'>
                    <thead>
                        <tr>
                            <th className='text-left'>{t('SKU')}</th>
                            <th className='text-left'>{t('Price')}</th>
                            <th className='text-left'>{t('Stock')}</th>
                            {options.map((option) => (
                                <th key={option.tempId} className='text-left'>
                                    {t(option.name)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {variations.map((variation, index) => (
                            <tr key={index}>
                                <td>{variation.sku}</td>
                                <td>{variation.price}</td>
                                <td>{variation.stock}</td>
                                {options.map((option) => (
                                    <td key={option.tempId}>{variation[option.name]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default VariationsManager;
