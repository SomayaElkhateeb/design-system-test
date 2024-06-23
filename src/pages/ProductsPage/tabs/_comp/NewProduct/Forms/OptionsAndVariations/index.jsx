import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import VariationsManager from './_comp/VariationsManager';
import OptionsList from './_comp/OptionsList';
import AddOptionManager from './_comp/AddOptionManager';

function generateVariations(options) {
	const variations = [];

	function generate(currentOptions, currentVariation) {
		if (currentOptions.length === 0) {
			variations.push(currentVariation);
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
	return variations;
}

function ProductFormOptionsAndVariationsSection({ product, onOptionsChange, onVariationsChange }) {
	const { t } = useTranslation();
	const { control, handleSubmit, setValue, watch } = useForm({
		defaultValues: {
			options: product.options || [],
		},
	});

	const options = watch('options');

	const handleAddOption = (option) => {
		const newOptions = [...options, option];
		setValue('options', newOptions);
		onOptionsChange(newOptions);
		const newVariations = generateVariations(newOptions);
		onVariationsChange(newVariations);
	};

	const handleDeleteOption = (option) => {
		const newOptions = options.filter((o) => o.tempId !== option.tempId);
		setValue('options', newOptions);
		onOptionsChange(newOptions);
		const newVariations = generateVariations(newOptions);
		onVariationsChange(newVariations);
	};

	return (
		<div>
			<h2>{t('Options and Variations')}</h2>
			<div className='space-y-6'>
				<AddOptionManager
					handleSubmit={handleAddOption}
					getOptionValuesNames={() => options.map((o) => o.name)}
				/>
				<OptionsList options={options} onDelete={handleDeleteOption} />
				<VariationsManager
					options={options}
					variations={product.variations || []}
					onVariationsChange={onVariationsChange}
				/>
			</div>
		</div>
	);
}

export default ProductFormOptionsAndVariationsSection;
