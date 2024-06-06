import { useTranslation } from 'react-i18next';
import { UseFormReturn, Path, PathValue, FieldValues } from 'react-hook-form';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';

interface FormChoiceChipsProps<T extends FieldValues> {
	formStore: UseFormReturn<T>;
	name: Path<T>;
	label?: string;
	options: string[];
	description?: string;
	checkoutForm?: boolean;
}

export default function FormChoiceChips<T extends FieldValues>({
	formStore,
	name,
	label,
	options,
	description,
	checkoutForm,
}: FormChoiceChipsProps<T>) {
	const { t } = useTranslation();

	const handleChoiceChange = (option: string) => {
		formStore.setValue(name, option as PathValue<T, Path<T>>);
	};

	return (
		<div className={`grid ${checkoutForm ? 'gap-[.25rem]' : 'gap-2'} col-span-2`}>
			{label && (
				<h3 className={`title  ${checkoutForm ? 'font-normal' : 'font-semibold'}`}>
					{t(label as any)}
				</h3>
			)}
			<SingleChoiceChips
				options={options.map((option) => option)}
				setSelected={handleChoiceChange}
				selected={formStore.watch(name) as unknown as string}
			/>
			{description && <p className='paragraph text-subtitle'>{t(description as any)}</p>}
		</div>
	);
}
