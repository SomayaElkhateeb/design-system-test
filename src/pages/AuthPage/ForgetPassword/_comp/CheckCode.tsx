import { FC, useState, useEffect } from 'react';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { getImageUrl } from 'src/app/utils';
import { useForm } from 'src/app/utils/hooks/form';
import { z, ZodObject, ZodRawShape } from 'zod';
import AuthImage from '../../_comp/AuthImage';

interface CheckCodeProps {
	usePhone: boolean;
	setIsVerified: (isVerified: boolean) => void;
}

const CheckCodeSchema: ZodObject<ZodRawShape> = z.object({
	otp: z.string().min(3, 'OTP code is required').length(6, 'OTP code must be 6 digits'),
});

type CheckCodeSchemaType = z.infer<typeof CheckCodeSchema>;

const CheckCode: FC<CheckCodeProps> = ({ usePhone, setIsVerified }) => {
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

	const { formStore, onSubmit } = useForm<CheckCodeSchemaType>({
		schema: CheckCodeSchema.shape,
		handleSubmit: (validatedData) => {
			console.log(validatedData);
			setIsVerified(true);
		},
		defaultValues: { otp: '' },
	});

	return (
		<section className='flex flex-col items-center w-full py-12 lg:flex-row lg:justify-between lg:space-x-8'>
			<div className='w-full lg:w-2/5 p-3'>
				<div className='w-full mx-w-xl bg-white p-8 rounded-md shadow-md'>
					<h2 className='mb-6 text-2xl font-semibold text-gray-800'>
						Check your {usePhone ? 'phone' : 'email'}
					</h2>
					<div className='mb-4 text-center'>
						<p className='text-2xl font-bold text-gray-800'>
							{counter > 0 ? `00:${counter.toString().padStart(2, '0')}` : '00:00'}
						</p>
						{isResendVisible && (
							<p className='text-sm text-gray-600'>
								Didn\'t receive the code?{' '}
								<button
									onClick={handleResend}
									className='text-blue-600 hover:underline focus:outline-none'
								>
									Resend
								</button>
							</p>
						)}
					</div>
					<Form {...formStore}>
						<form onSubmit={onSubmit}>
							<div className='mb-4'>
								<FormField
									container={{ className: 'mb-4' }}
									formStore={formStore}
									name='otp'
									render={(field) => (
										<Input {...field} id='otp' type='text' placeholder='OTP code' />
									)}
								/>
							</div>
							<div className='flex items-center justify-end'>
								<Button type='submit' variant='primary'>
									Verify
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
			<AuthImage path='images/register_1.svg' />
		</section>
	);
};

export default CheckCode;
