import { useTranslation } from 'react-i18next';
import SpecificCustomers from '../../../Selectors/SpecificCustomers';
import SpecificGroups from '../../../Selectors/SpecificGroups';

interface CustomerSegmentOptionsProps {
	segmentOptions: string;
}

const CustomerSegmentOptions: React.FC<CustomerSegmentOptionsProps> = ({ segmentOptions }) => {
	const { t } = useTranslation();
	return (
		<div>
			{segmentOptions === t('Specific customer groups') && <SpecificGroups />}
			{segmentOptions === t('Specific customers') && <SpecificCustomers />}
		</div>
	);
};

export default CustomerSegmentOptions;
