import { type FC, memo } from 'react';

import StepHeader from './StepHeader';
import StepActions from './StepActions';
import { StepType } from './useStepNavigation';

interface StepProps {
	index: number;
	title: string;
	steps: StepType[];
	isActive: boolean;
	activeStep: number;
	isLastStep: boolean;
	isFirstStep: boolean;
	isCompleted: boolean;
	content: JSX.Element;
	onFinish: () => void;
	goToNextStep: () => void;
	goToPreviousStep: () => void;
	setActiveStep: (index: number) => void;
}

const Step: FC<StepProps> = memo(
	({
		steps,
		index,
		title,
		content,
		onFinish,
		isActive,
		activeStep,
		isLastStep,
		isFirstStep,
		isCompleted,
		goToNextStep,
		setActiveStep,
		goToPreviousStep,
	}) => {
		return (
			<div className='relative'>
				<StepHeader
					index={index}
					title={title}
					steps={steps}
					isActive={isActive}
					isLastStep={isLastStep}
					activeStep={activeStep}
					isCompleted={isCompleted}
					setActiveStep={setActiveStep}
				/>
				{isActive && (
					<div className='py-5 px-9'>
						{content}
						<StepActions
							onFinish={onFinish}
							isFirstStep={isFirstStep}
							isLastStep={isLastStep}
							goToNextStep={goToNextStep}
							goToPreviousStep={goToPreviousStep}
						/>
					</div>
				)}
			</div>
		);
	},
);
export default Step;
