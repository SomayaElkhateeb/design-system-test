import { Button } from 'src/app/components/optimized';
import './custom-radio.css';
interface SubscriptionOption {
	value: string;
	label: string;
	price: string;
}

interface SubscriptionOptionsProps {
	currentEmails: number;
	options: SubscriptionOption[];
	selectedOption: string;
	onOptionChange: (value: string) => void;
	buttonText: string;
}

const SubscriptionOptions: React.FC<SubscriptionOptionsProps> = ({
	currentEmails,
	options,
	selectedOption,
	onOptionChange,
	buttonText,
}) => {
	return (
		<div className='bg-pri-dark p-6 rounded-lg text-white'>
			<h2 className='text-xl font-semibold mb-2'>
				You have {currentEmails} emails to send this month
			</h2>
			<p className='mb-4'>Choose one of our packages for more emails</p>
			<div className='flex space-x-4 mb-6'>
				{options.map((option) => (
					<label
						key={option.value}
						className={`flex items-center p-4 border rounded-lg cursor-pointer ${
							selectedOption === option.value ? 'bg-success' : 'bg-blue-800'
						}`}
					>
						<input
							type='radio'
							name='subscription'
							value={option.value}
							checked={selectedOption === option.value}
							onChange={() => onOptionChange(option.value)}
							className='form-radio h-5 w-5 text-green-500 :checked-bg-white'
						/>
						<div className='ml-3'>
							<span className='block text-sm font-semibold'>{option.label}</span>
							<span className='block text-sm'>{option.price}</span>
						</div>
					</label>
				))}
			</div>
			<Button variant='primary'>{buttonText}</Button>
		</div>
	);
};

export default SubscriptionOptions;
