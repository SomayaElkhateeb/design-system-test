import { comparisonMenus } from 'src/app/utils/constants';
import { ArrangeButton } from '..';

// how to use

// const Component = () => {
//
// 	const [selectedComparisonOption, setSelectedComparisonOption] = useState(null);
//
// 	const handleComparisonChange = (option) => {
// 		setSelectedComparisonOption(option);
// 	};
//
// 	return (
// 		<CompareBar selectedComparisonOption={selectedComparisonOption} handleComparisonChange={handleComparisonChange} />
// 	);
//
// };

const CompareBar = ({ selectedComparisonOption, handleComparisonChange }) => {
	return (
		<div className='mb-4 flex items-center gap-2'>
			<ArrangeButton
				sortMenus={comparisonMenus}
				selectedOption={selectedComparisonOption}
				handelSelect={handleComparisonChange}
			/>
			<div className='flex gap-2'>
				<p className='paragraph text-subtitle'>Compared to:</p>
				<p className='paragraph text-title'>{selectedComparisonOption}</p>
			</div>
		</div>
	);
};
export default CompareBar;
