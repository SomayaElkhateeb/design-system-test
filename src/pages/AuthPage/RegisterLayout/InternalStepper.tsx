import { CheckIcon } from "src/app/utils/icons";

interface InternalStepperProps {
	currentStep: number;
	stepsLength: number;
	setCurrentStep: (step: number) => void;
}

export default function InternalStepper({
	currentStep,
	stepsLength,
	setCurrentStep,
}: InternalStepperProps) {
	const renderStep = (index: number) => {
		const stepNumber = index + 1;
		const isActive = index + 1 === currentStep;
		const isCompleted = index + 1 < currentStep;
		const baseClasses = 'w-9 h-5 flex items-center justify-center rounded-sm border';

		const handleClick = () => {
			if (isCompleted) {
				setCurrentStep(stepNumber);
			}
		};

		return (
			<button
				key={index}
				className={`${baseClasses}
          ${
						isActive
							? 'bg-primary border-transparent'
							: isCompleted
							? 'bg-white border-primary'
							: 'bg-white border-hint'
					}`}
				onClick={handleClick}
			>
				{isCompleted && !isActive && <CheckIcon className='fill-primary' />}
			</button>
		);
	};

	return (
		<div className='flex gap-2'>
			{Array.from({ length: stepsLength }).map((_, index) => renderStep(index))}
		</div>
	);
}
