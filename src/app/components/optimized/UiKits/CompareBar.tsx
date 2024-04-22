import { comparisonMenus } from 'src/app/utils/constants';
import CompareButton from './CompareButton';

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

interface Props {
	selectedComparisonOption: string;
	handleComparisonChange: () => void;
}
const CompareBar = ({ selectedComparisonOption, handleComparisonChange }: Props) => {
	return (
		<div className='mb-4 flex items-center gap-2'>
			<CompareButton
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
