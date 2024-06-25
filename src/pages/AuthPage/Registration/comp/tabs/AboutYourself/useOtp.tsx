import { useEffect, useState } from 'react';
import { z } from 'zod';

import { useForm } from 'src/app/utils/hooks/form';

export interface OtpVerificationInterface {
	otp: string;
}
interface useOtpProps {
	onFinish: (values: OtpVerificationInterface) => void;
}
const otpSchema = {
	otp: z.string().min(3, 'OTP code is required').length(6, 'OTP code must be 6 digits'),
};
export default function useOtp({ onFinish }: useOtpProps) {
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
		onFinish(values);
	};

	const { formStore, onSubmit } = useForm({
		schema: otpSchema,
		handleSubmit: handleSubmit,
		defaultValues: { otp: '' },
	});

	return { timer, isResendVisible, resetTimer, formStore, onSubmit };
}
