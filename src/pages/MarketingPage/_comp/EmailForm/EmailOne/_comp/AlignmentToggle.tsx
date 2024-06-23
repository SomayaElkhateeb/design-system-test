import { FaAlignLeft, FaAlignCenter, FaAlignRight } from 'react-icons/fa';

const AlignmentToggle = ({ alignment, onAlignmentChange }) => {
	return (
		<label className='block mb-4 w-full my-3'>
			<span className='block text-sm font-medium text-gray-700 mb-2'>Alignment:</span>
			<div className='flex items-center space-x-2 w-full'>
				<button
					className={`p-2 w-full flex items-center justify-center ${
						alignment === 'left' ? 'bg-gray text-white' : 'text-gray-500'
					} border border-gray-300 rounded-l-md`}
					onClick={() => onAlignmentChange('left')}
				>
					<FaAlignLeft />
				</button>
				<button
					className={`p-2 w-full flex items-center justify-center ${
						alignment === 'center' ? 'bg-gray text-white' : 'text-gray-500'
					} border-t border-b border-gray-300`}
					onClick={() => onAlignmentChange('center')}
				>
					<FaAlignCenter />
				</button>
				<button
					className={`p-2 w-full flex items-center justify-center ${
						alignment === 'right' ? 'bg-gray text-white' : 'text-gray-500'
					} border border-gray-300 rounded-r-md`}
					onClick={() => onAlignmentChange('right')}
				>
					<FaAlignRight />
				</button>
			</div>
		</label>
	);
};

export default AlignmentToggle;
