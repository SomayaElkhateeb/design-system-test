import { type FC } from 'react';

import useStepNavigation, { StepType } from './useStepNavigation';
import Step from './Step';

interface StepNavigatorProps {
	steps: StepType[];
	onFinish: () => void;
}

const StepNavigator: FC<StepNavigatorProps> = ({ steps, onFinish }) => {
	const { activeStep, setActiveStep, goToNextStep, goToPreviousStep } = useStepNavigation(steps);

	return (
		<div className='grid gap-4'>
			{steps.map((step, index) => {
				const isLastStep = index === steps.length - 1;
				const isFirstStep = index === 0;
				const isActive = index === activeStep;
				const isCompleted = index < activeStep;

				return (
					<Step
						key={index}
						index={index}
						steps={steps}
						title={step.title}
						isActive={isActive}
						onFinish={onFinish}
						content={step.content}
						activeStep={activeStep}
						isLastStep={isLastStep}
						isFirstStep={isFirstStep}
						isCompleted={isCompleted}
						goToNextStep={goToNextStep}
						setActiveStep={setActiveStep}
						goToPreviousStep={goToPreviousStep}
					/>
				);
			})}
		</div>
	);
};

export default StepNavigator;
