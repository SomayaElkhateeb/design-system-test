import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';

import { UseOtp } from './_hook/UseOtpHook';

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
	const { timer, isResendVisible, resetTimer, formStore, onSubmit, isLoading } = UseOtp({
		onVerify,
		phone,
	});
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
					name='code'
					render={(field) => <Input {...field} id='code' type='text' placeholder='OTP code' />}
				/>
				<p className='paragraph text-subtitle'>
					{t("We've sent a code to your phone")}&nbsp;<span>{phone}</span>&nbsp;
					<Button variant='link' text={t('Change')} onClick={() => setCurrentStep(1)} />
				</p>
				<div className='flex justify-end'>
					<Button
						loading={isLoading}
						variant='primary'
						type='submit'
						text={t('Verify')}
						className='w-36'
					/>
				</div>
			</form>
		</Form>
	);
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
