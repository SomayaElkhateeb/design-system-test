import { useTranslation } from 'react-i18next';
import SpecificCategory from '../../../../../../app/components/page/discount/Selectors/SpecificCategory';
import SpecificProducts from '../../../../../../app/components/page/discount/Selectors/SpecificProducts';
import { DiscountFormStore } from '../../NewDiscount';
import BuyXGetY from './BuyXGetY';

const ApplyToOptions = ({
	applyTo,
	formStore,
}: {
	applyTo: string;
	formStore: DiscountFormStore;
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
