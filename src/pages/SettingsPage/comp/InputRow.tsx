import { ClipLoader } from 'react-spinners';
import { cn } from 'src/app/utils';

export default function InputRow({
	label,
	leftIcon,
	rightIcon,
	loading,
	error,
	success,
}: {
	label?: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	loading?: boolean;
	error?: boolean;
	success?: boolean;
}) {
	// const reactId = useId();
	// const controlId = rest.id ?? reactId;

	const classNames = cn('bg-gray-50 focus-within:border-blue-500 focus-within:bg-auto', {
		'[&:not(:focus-within)]:border-red-500 [&:not(:focus-within)]:bg-auto': error,
		'[&:not(:focus-within)]:border-green-500 [&:not(:focus-within)]:bg-auto': success,
	});

	const containerClassName = cn('flex flex-col', {
		'group error': error,
		'group success': success,
	});

	return (
		<>
			<div className={containerClassName}>
				{label && <label className='block text-sm mb-1.5 font-medium'>{label}</label>}
				<div className={`${classNames} overflow-hidden rounded-md border w-full`}>
					<div className='relative'>
						{leftIcon && (
							<div className='absolute inset-y-0 left-0 flex items-center p-2'>{leftIcon}</div>
						)}
						<input
							className={`${
								leftIcon && 'pl-12'
							} block w-full px-4 py-2 border rounded focus:outline-none  border-none outline-none `}
							disabled={loading}
						/>
						{rightIcon && !loading && (
							<div className='absolute inset-y-0 right-0 flex items-center p-4'>{rightIcon}</div>
						)}
						{loading && (
							<div className='absolute inset-y-0 right-0 flex items-center pr-2'>
								<ClipLoader size={16} />
							</div>
						)}
					</div>
				</div>
				{error && (
					<small className='group-[.error:focus-within]:hidden text-xs text-red-500 '>
						{error}
					</small>
				)}
				{success && (
					<small className='group-[.success:focus-within]:hidden text-xs text-green-500 '>
						Success
					</small>
				)}
			</div>
		</>
	);
}

/*
import { FaUser, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

How to Use:

const [value, setValue] = useState('');
const [error, setError] = useState('');
const [success, setSuccess] = useState('');
const [loading, setLoading] = useState(false);
<InputRow
	label='Username'
	leftIcon={<FaUser />}
	rightIcon={<FaCheckCircle />}
	loading={loading}
	error={error}
	success={success}
	value={value}
	handleOnChange={(value) => setValue(value)}
/>;

*/
