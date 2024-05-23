import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';

import BuyXGetY from './BuyXGetY';
import { newDiscountInterface } from '../../HookForNewDiscount';
import { SpecificCategory, SpecificProducts } from 'src/app/components/page';

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
