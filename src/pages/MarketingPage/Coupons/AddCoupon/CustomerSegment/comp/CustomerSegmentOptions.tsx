import SpecificCustomers from 'src/app/components/page/discount/Selectors/SpecificCustomers';
import SpecificGroups from 'src/app/components/page/discount/Selectors/SpecificGroups';

interface CustomerSegmentOptionsProps {
	segmentOptions: string;
}

const CustomerSegmentOptions: React.FC<CustomerSegmentOptionsProps> = ({ segmentOptions }) => {
	return (
		<div>
			{segmentOptions === 'Specific customer groups' && <SpecificGroups />}
			{segmentOptions === 'Specific customers' && <SpecificCustomers />}
		</div>
	);
};

export default CustomerSegmentOptions;
