import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';

interface OtpVerificationProps {
	onVerify: () => void;
	onResend: () => void; // Add a prop to handle the resend functionality
	phone: string;
	setCurrentStep: (step: number) => void;
}

export default function OtpVerification({
	onVerify,
	onResend,
	phone,
	setCurrentStep,
}: OtpVerificationProps) {
	const { timer, isResendVisible, resetTimer, formStore, onSubmit } = useOtp({ onVerify });
	const { t } = useTranslation();
	const handleResend = () => {
		resetTimer();
		onResend();
	};

	return (
		<Form {...formStore}>
			<form onSubmit={onSubmit} className='grid grid-cols-1 gap-4'>
				<OtpTimer timer={timer} isResendVisible={isResendVisible} handleResend={handleResend} />
				<FormField
					formStore={formStore}
					name='otp'
					render={(field) => <Input {...field} id='otp' type='text' placeholder='OTP code' />}
				/>
				<p className='paragraph text-subtitle'>
					{t("We've sent a code to your phone")}&nbsp;<span>{phone}</span>&nbsp;
					<Button variant='link' text={t('Change')} onClick={() => setCurrentStep(1)} />
				</p>
				<div className='flex justify-end'>
					<Button variant='primary' type='submit' text={t('Verify')} className='w-36' />
				</div>
			</form>
		</Form>
	);
}

interface OtpVerificationInterface {
	otp: string;
}

const otpSchema = {
	otp: z.string().min(3, 'OTP code is required').length(6, 'OTP code must be 6 digits'),
};

// useOtp =================================================

function useOtp({ onVerify }: { onVerify: () => void }) {
	const [timer, setTimer] = useState(10);
	const [isResendVisible, setIsResendVisible] = useState(false);

	useEffect(() => {
		if (timer > 0) {
			const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
			return () => clearInterval(interval);
		} else {
			setIsResendVisible(true);
		}
	}, [timer]);

	const resetTimer = (): void => {
		setTimer(10);
		setIsResendVisible(false);
	};

	const handleSubmit = (values: OtpVerificationInterface) => {
		console.log(values);
		onVerify();
	};

	const { formStore, onSubmit } = useForm({
		schema: otpSchema,
		handleSubmit: handleSubmit,
		defaultValues: { otp: '' },
	});

	return { timer, isResendVisible, resetTimer, formStore, onSubmit };
}

// OtpTimer =================================================

interface OtpTimerProps {
	timer: number;
	isResendVisible: boolean;
	handleResend: () => void;
}

export function OtpTimer({ timer, isResendVisible, handleResend }: OtpTimerProps) {
	const { t } = useTranslation();
	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	};
	return (
		<div>
			<span className='title md:text-xl font-normal'>{formatTime(timer)}</span>
			{isResendVisible && (
				<div>
					<p className='paragraph text-subtitle flex items-center'>
						{t("Didn't receive the code?")}&nbsp;
						<Button variant='link' text={t('Resend')} onClick={handleResend} />
					</p>
				</div>
			)}
		</div>
	);
}
