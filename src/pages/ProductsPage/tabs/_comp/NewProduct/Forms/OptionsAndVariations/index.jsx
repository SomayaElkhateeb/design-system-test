import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from 'src/app/components/ui/card';
import { updateVariations } from './_comp/updateVariations';
import OptionsList from './_comp/OptionsList';
import AddOptionManager from './_comp/AddOptionManager';
import VariationsManager from './_comp/VariationsManager';
import OptionsAndVariationsFull from './_comp/_new/OptionsAndVariationsFull';

/**
 * @template TFormStore
 *
 * @param {import('./types').Props<TFormStore>} props
 */
export default function ProductFormOptionsAndVariationsSection(props) {
	const { t } = useTranslation();

	const getOptionValuesNames = useCallback(() => {
		const options = props.formStore.getValues('options');
		return options.map((option) => option.name);
	}, [props.formStore]);

	return (
		<>
			{/* <Card id={props.id}>
				<CardHeader>
					<CardTitle>{t('Options & Variations')}</CardTitle>
					<CardDescription className='text-gray-400'>
						{t(
							'Allow your customers to select from options such as Size and Color on your website.',
						)}
					</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col gap-4'>
					<OptionsList formStore={props.formStore} />
					<AddOptionManager
						getOptionValuesNames={getOptionValuesNames}
						handleSubmit={(values) => {
							const options = props.formStore.getValues('options');
							props.formStore.setValue('options', [...options, values.option]);
							updateVariations(props.formStore);
						}}
					/>
					<VariationsManager formStore={props.formStore} />
				</CardContent>
			</Card> */}
			<OptionsAndVariationsFull />
		</>
	);
}
