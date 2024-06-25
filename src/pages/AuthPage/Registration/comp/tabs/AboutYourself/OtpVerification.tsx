import useOtp from './useOtp';
import { Form } from 'src/app/components/ui/form';
import { Input } from 'src/app/components/ui/input';
import { Button } from 'src/app/components/optimized';
import FormField from 'src/app/components/ui/form/field';
import OtpTimer from 'src/pages/AuthPage/RegisterLayout/OtpTimer';
import { useTranslation } from 'react-i18next';
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
