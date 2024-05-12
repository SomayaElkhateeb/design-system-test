import SpecificCategory from 'src/app/components/page/discount/Selectors/SpecificCategory';
import SpecificProducts from 'src/app/components/page/discount/Selectors/SpecificProducts';

const ApplyToOptions = ({ applyTo }: { applyTo: string }) => {
	return (
		<div>
			{applyTo === 'Specific category' && <SpecificCategory />}
			{applyTo === 'Specific products' && <SpecificProducts />}
		</div>
	);
};

export default ApplyToOptions;
