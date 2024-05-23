import { useTranslation } from 'react-i18next';
import SpecificCustomers from 'src/app/components/page/discount/Selectors/SpecificCustomers';
import SpecificProducts from 'src/app/components/page/discount/Selectors/SpecificProducts';

interface ApplyToOptions {
	applyTo: string;
}
export default function ApplyToOptions({ applyTo }: ApplyToOptions) {
	const { t } = useTranslation();
	return (
		<div>
			{applyTo === t('Specific customers') && <SpecificCustomers />}
			{applyTo === t('Specific products') && <SpecificProducts />}
			{applyTo === t('All') && null}
		</div>
	);
}
