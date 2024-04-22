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
	return (
		<div>
			{applyTo === 'Specific category' && <SpecificCategory />}
			{applyTo === 'Specific products' && <SpecificProducts />}
			{applyTo === 'Buy x get y' && <BuyXGetY formStore={formStore} />}
		</div>
	);
};

export default ApplyToOptions;
