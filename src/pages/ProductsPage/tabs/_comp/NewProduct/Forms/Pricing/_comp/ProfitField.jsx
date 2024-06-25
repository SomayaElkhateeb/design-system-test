import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import HorizontalBox from 'src/app/components/ui/horizontal-box';

/**
 * @template TFormStore
 *
 * @param {import('../types').Props<TFormStore>} props
 */
function ProfitField(props) {
	const { t } = useTranslation();
	const price = useWatch({ name: 'price', control: props.formStore.control });
	const discountPrice = useWatch({ name: 'discountPrice', control: props.formStore.control });
	const costPrice = useWatch({ name: 'costPrice', control: props.formStore.control });

	const profit = Number(price || 0) - Number(costPrice || 0) - Number(discountPrice || 0);

	return (
		<FormField
			formStore={props.formStore}
			name='price'
			label={t('Profit')}
			render={() => (
				<HorizontalBox start={<span className='pe-2'>SAR</span>}>
					<Input
						value={profit}
						type='number'
						disabled
						readOnly
						className='border-0 rounded-none grayscale brightness-[0.85]'
					/>
				</HorizontalBox>
			)}
		/>
	);
}

export default ProfitField;
