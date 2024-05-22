import { useState, useEffect } from 'react';
import { Button } from 'src/app/components/optimized';

import { getImageUrl } from 'src/app/utils';

const StepTwo = ({ onBack, onFinish }) => {
	return (
		<section className='flex justify-between w-full items-center'>
			<div className='w-2/6'>
				<OtpVerification onFinish={onFinish} />
			</div>
			<div className='w-3/6'>
				<img src={getImageUrl('images/register_1.svg')} alt='' />;
			</div>
		</section>
	);
};

export default StepTwo;

const OtpVerification = ({ onFinish }) => {
	const [counter, setCounter] = useState(10);
	const [isResendVisible, setIsResendVisible] = useState(false);

	useEffect(() => {
		const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
		if (counter === 0) {
			setIsResendVisible(true);
		}
		return () => clearInterval(timer);
	}, [counter]);

	const handleResend = () => {
		setCounter(10);
		setIsResendVisible(false);
	};

	return (
		<div className='flex justify-center items-center'>
			<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg'>
				<div className='text-xl font-semibold mb-4 text-center'>
					{counter > 0 ? `00:${counter.toString().padStart(2, '0')}` : '00:00'}
				</div>
				{isResendVisible && (
					<div className='text-center mb-4'>
						<p className='text-gray-600 text-sm'>
							Didn’t receive the code?
							<button onClick={handleResend} className='text-primary hover:text-blue-700 ml-1'>
								Resend
							</button>
						</p>
					</div>
				)}
				<div className='mb-4'>
					<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='otp'>
						OTP Code
					</label>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='otp'
						type='text'
						placeholder='OTP code'
					/>
				</div>
				<p className='text-gray-600 text-sm mb-4'>
					We've sent a code to your phone <span className='text-error'>+968 545465455</span>
					<a href='#' className='text-blue-500 hover:text-blue-700 text-primary'>
						{' '}
						Change
					</a>
				</p>
				<div className='flex items-center justify-end'>
					<Button variant='primary' type='button' onClick={() => onFinish()}>
						Verify
					</Button>
				</div>
			</form>
		</div>
	);
};
