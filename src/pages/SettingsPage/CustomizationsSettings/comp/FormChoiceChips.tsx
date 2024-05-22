import { useTranslation } from 'react-i18next';
import { UseFormReturn, Path, PathValue } from 'react-hook-form';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';

interface FormChoiceChipsProps<T> {
	formStore: UseFormReturn<T>;
	name: Path<T>;
	label: string;
	options: string[];
	description?: string;
}

export default function FormChoiceChips<T>({
	formStore,
	name,
	label,
	options,
	description,
}: FormChoiceChipsProps<T>) {
	const { t } = useTranslation();

	const handleChoiceChange = (option: string) => {
		formStore.setValue(name, option as PathValue<T, Path<T>>);
	};

	return (
		<div className='grid gap-2 col-span-2'>
			<h3 className='title text-base'>{t(label as any)}</h3>
			<SingleChoiceChips
				options={options.map((option) => t(option as any))}
				setSelected={handleChoiceChange}
				selected={formStore.watch(name) as unknown as string}
			/>
			{description && <p className='paragraph text-subtitle'>{t(description as any)}</p>}
		</div>
	);
}
