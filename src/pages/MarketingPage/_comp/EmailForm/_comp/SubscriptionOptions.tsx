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
	click?: () => void;
}

const SubscriptionOptions: React.FC<SubscriptionOptionsProps> = ({
	currentEmails,
	options,
	selectedOption,
	onOptionChange,
	buttonText,
	click,
}) => {
	return (
		<div className='bg-pri-dark p-5 rounded-md text-white'>
			<h2 className='text-lg font-semibold pb-1'>
				You have {currentEmails} emails to send this month
			</h2>
			<div className='flex-col-global'>
				<p className='text-inactive text-sm'>Choose one of our packages for more emails</p>
				<div className='flex gap-4'>
					{options.map((option) => (
						<label
							key={option.value}
							className={`flex items-center px-4 py-2 border rounded-md cursor-pointer ${
								selectedOption === option.value ? 'bg-success' : ''
							}`}
						>
							<input
								type='radio'
								name='subscription'
								value={option.value}
								checked={selectedOption === option.value}
								onChange={() => onOptionChange(option.value)}
								className='form-radio size-5 :checked-bg-white'
							/>
							<div className='ml-3'>
								<p className='text-sm '>{option.label}</p>
								<span className='text-sm font-semibold'>{option.price}</span>
							</div>
						</label>
					))}
				</div>
				<div>
					<Button variant='primary' onClick={click}>
						{buttonText}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SubscriptionOptions;
