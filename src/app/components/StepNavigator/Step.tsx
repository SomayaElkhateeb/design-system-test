import React, { type FC } from 'react';
import { useStepContext } from './StepNavigator';
import StepHeader from './StepHeader';
interface StepProps {
	index: number;
}
const Step: FC<StepProps> = ({ index }) => {
	const { steps, activeStep, setActiveStep } = useStepContext();
	const step = steps[index];
	const isActive = index === activeStep;
	const isCompleted = index < activeStep;
	const isLastStep = index === steps.length - 1;
	return (
		<div className={`relative ${isActive ? 'flex-grow' : ''}`}>
			<StepHeader
				index={index}
				title={step.title}
				isActive={isActive}
				isLastStep={isLastStep}
				isCompleted={isCompleted}
				setActiveStep={setActiveStep}
			/>
			{isActive && <div className='py-5 px-9'>{step.content}</div>}
		</div>
	);
};
export default React.memo(Step);
