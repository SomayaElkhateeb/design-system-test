import { useTranslation } from 'react-i18next';
import SpecificCategory from '../../../../../../app/components/page/discount/Selectors/SpecificCategory';
import SpecificProducts from '../../../../../../app/components/page/discount/Selectors/SpecificProducts';
import BuyXGetY from './BuyXGetY';
import { UseFormReturn } from 'react-hook-form';
import { newDiscountInterface } from '../../HookForNewDiscount';

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
			{applyTo === 'Specific category' && <SpecificCategory formStore={formStore} />}
			{applyTo === 'Specific products' && <SpecificProducts formStore={formStore} />}
			{applyTo === 'Buy x get y' && <BuyXGetY formStore={formStore} />}
		</div>
	);
};

export default ApplyToOptions;
