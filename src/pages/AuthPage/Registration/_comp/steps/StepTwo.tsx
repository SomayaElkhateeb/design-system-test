import { FC, useState, useEffect } from 'react';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { getImageUrl } from 'src/app/utils';
import { useForm } from 'src/app/utils/hooks/form';
import { z, ZodObject, ZodRawShape } from 'zod';

interface StepTwoProps {
	onBack: () => void;
	onFinish: (data: OtpSchemaType) => void;
}

const StepTwo: FC<StepTwoProps> = ({ onBack, onFinish }) => {
	return (
		<section className='flex justify-between w-full items-center'>
			<div className='w-2/6'>
				<OtpVerification onFinish={onFinish} />
			</div>
			<div className='w-3/6'>
				<img src={getImageUrl('images/register_1.svg')} alt='' />
			</div>
		</section>
	);
};

export default StepTwo;

const otpSchema: ZodObject<ZodRawShape> = z.object({
	otp: z.string().min(3, 'OTP code is required').length(6, 'OTP code must be 6 digits'),
});

type OtpSchemaType = z.infer<typeof otpSchema>;

interface OtpVerificationProps {
	onFinish: (data: OtpSchemaType) => void;
}

const OtpVerification: FC<OtpVerificationProps> = ({ onFinish }) => {
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

	const { formStore, onSubmit } = useForm<OtpSchemaType>({
		schema: otpSchema.shape,
		handleSubmit: (validatedData) => {
			console.log(validatedData);
			onFinish(validatedData);
		},
		defaultValues: { otp: '' },
	});

	return (
		<div className='flex justify-center items-center'>
			<Form {...formStore}>
				<form
					className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg'
					onSubmit={onSubmit}
				>
					<div className='text-xl font-semibold mb-4 text-center'>
						{counter > 0 ? `00:${counter.toString().padStart(2, '0')}` : '00:00'}
					</div>
					{isResendVisible && (
						<div className='text-center mb-4'>
							<p className='text-gray-600 text-sm'>
								Didn’t receive the code?
								<button onClick={handleResend} className='text-primary hover:text-blue-700 ms-1'>
									Resend
								</button>
							</p>
						</div>
					)}
					<FormField
						container={{ className: 'mb-4' }}
						formStore={formStore}
						name='otp'
						render={(field) => <Input {...field} id='otp' type='text' placeholder='OTP code' />}
					/>
					<p className='text-gray-600 text-sm mb-4'>
						We've sent a code to your phone <span className='text-error'>+968 545465455</span>
						<a href='#' className='text-blue-500 hover:text-blue-700 text-primary'>
							{' '}
							Change
						</a>
					</p>
					<div className='flex items-center justify-end'>
						<Button variant='primary' type='submit'>
							Verify
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};
