import { Button } from 'src/app/components/optimized';

interface OtpTimerProps {
	timer: number;
	isResendVisible: boolean;
	handleResend: () => void;
}

export default function OtpTimer({ timer, isResendVisible, handleResend }: OtpTimerProps) {
	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	};
	return (
		<div>
			<span className='title text-xl font-normal'>{formatTime(timer)}</span>
			{isResendVisible && (
				<div>
					<p className='paragraph text-subtitle flex items-center'>
						Didn't receive the code?&nbsp;
						<Button variant='link' text='Resend' onClick={handleResend} />
					</p>
				</div>
			)}
		</div>
	);
}
