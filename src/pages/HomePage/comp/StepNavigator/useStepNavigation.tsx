import { useCallback, useState } from 'react';

export interface StepType {
	title: string;
	content: JSX.Element;
}

export default function useStepNavigation(steps: StepType[]) {
	const [activeStep, setActiveStep] = useState(0);

	const goToNextStep = useCallback(() => {
		if (activeStep < steps.length - 1) {
			setActiveStep((prevStep) => prevStep + 1);
		}
	}, [activeStep, steps.length]);

	const goToPreviousStep = useCallback(() => {
		if (activeStep > 0) {
			setActiveStep((prevStep) => prevStep - 1);
		}
	}, [activeStep]);

	return {
		activeStep,
		goToNextStep,
		setActiveStep,
		goToPreviousStep,
	};
}