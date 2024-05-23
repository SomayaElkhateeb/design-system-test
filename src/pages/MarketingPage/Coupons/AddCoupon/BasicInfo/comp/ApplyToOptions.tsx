import { UseFormReturn } from 'react-hook-form';
import { SpecificCategoryCo, SpecificProductsCo } from 'src/app/components/page';
import { addCouponInterface } from '../../HookForAddCoupon';

const ApplyToOptions = ({
	applyTo,
	formStore,
}: {
	applyTo: string;
	formStore: UseFormReturn<addCouponInterface>;
}) => {
	return (
		<div>
			{applyTo === 'Specific category' && <SpecificCategoryCo formStore={formStore} />}
			{applyTo === 'Specific products' && <SpecificProductsCo formStore={formStore} />}
		</div>
	);
};

export default ApplyToOptions;
