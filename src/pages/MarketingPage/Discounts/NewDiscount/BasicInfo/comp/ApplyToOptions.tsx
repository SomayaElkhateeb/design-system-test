import { useTranslation } from 'react-i18next';
import SpecificCategory from '../../../../../../app/components/page/discount/Selectors/SpecificCategory';
import SpecificProducts from '../../../../../../app/components/page/discount/Selectors/SpecificProducts';
import BuyXGetY from './BuyXGetY';
import { UseFormReturn } from 'react-hook-form';
import { newDiscountInterface } from '../../NewDiscount';

const ApplyToOptions = ({
	applyTo,
	formStore,
}: {
	applyTo: string;
	formStore: UseFormReturn<newDiscountInterface>;
}) => {
	const { t } = useTranslation();
	return (
		<div>
			{applyTo === t('Specific category') && <SpecificCategory />}
			{applyTo === t('Specific products') && <SpecificProducts />}
			{applyTo === t('Buy x get y') && <BuyXGetY formStore={formStore} />}
		</div>
	);
};

export default ApplyToOptions;
