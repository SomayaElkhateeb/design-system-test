import { UseFormReturn } from 'react-hook-form';

import { addCouponInterface } from '../../HookForAddCoupon';
import SpecificAutoCompleteInput from 'src/app/components/page/discount/Selectors/SpecificAutoCompleteInput';
import { useTranslation } from 'react-i18next';

const ApplyToOptions = ({
	applyTo,
	formStore,
}: {
	applyTo: string;
	formStore: UseFormReturn<addCouponInterface>;
}) => {
	//  hooks
	const { t } = useTranslation();
	// /////////////////////////////////////
	const handelRenderingComponentWithApplyTo = () => {
		switch (applyTo) {
			case 'Specific category':
				return (
					<SpecificAutoCompleteInput<addCouponInterface>
						name='specificCategories'
						label={t('Select Category')}
						formStore={formStore}
					/>
				);
			case 'Specific products':
				return (
					<SpecificAutoCompleteInput<addCouponInterface>
						name='specificProducts'
						label={t('select products')}
						formStore={formStore}
					/>
				);
		}
	};
	return handelRenderingComponentWithApplyTo();
};

export default ApplyToOptions;
