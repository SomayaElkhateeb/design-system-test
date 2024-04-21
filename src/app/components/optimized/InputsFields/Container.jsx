import { useId } from 'react';
import { ClipLoader } from 'react-spinners';
import { cn } from 'src/app/utils';

/**
 * @param {{
 *  label?: import("react").ReactNode;
 *  leftIcon?: JSX.Element;
 *  rightIcon?: JSX.Element;
 *  loading?: boolean;
 *  error?: string;
 *  success?: boolean;
 * } & Omit<import('react').InputHTMLAttributes<HTMLInputElement>, "onChange">} props - Props for the Container component
 */

export default function Container({ label, leftIcon, rightIcon, loading, error, success, ...rest }) {
	const reactId = useId();
	const controlId = rest.id ?? reactId;

	const classNames = cn(
		'relative overflow-hidden rounded-md w-full border bg-gray-50 focus-within:border-blue-500 focus-within:bg-auto',
		{
			'[&:not(:focus-within)]:border-red-500 [&:not(:focus-within)]:bg-auto': error,
			'[&:not(:focus-within)]:border-green-500 [&:not(:focus-within)]:bg-auto': success,
		},
	);

	const containerClassName = cn('flex flex-col', {
		'group error': error,
		'group success': success,
	});

	return (
		<>
			<div className={containerClassName}>
				{label && (
					<label htmlFor={controlId} className='block text-sm'>
						{label}
					</label>
				)}
				<div className={classNames}>
					<div className='relative'>
						{leftIcon && <div className='absolute inset-y-0 left-0 flex items-center p-4'>{leftIcon}</div>}
						{/* <input
							ref={_ref}
							className={`${
								leftIcon && 'pl-16'
							} block w-full px-4 py-2 border rounded focus:outline-none  border-none outline-none`}
							disabled={loading}
							value={value}
							onChange={handleOnChange && ((event) => handleOnChange(event.target.value))}
							{...rest}
							id={controlId}
						/> */}
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
				{error && <small className='group-[.error:focus-within]:hidden text-xs text-red-500 '>{error}</small>}
				{success && <small className='group-[.success:focus-within]:hidden text-xs text-green-500 '>Success</small>}
			</div>
		</>
	);
}
