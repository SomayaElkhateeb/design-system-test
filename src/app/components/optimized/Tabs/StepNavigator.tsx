// 1. Import statements
import { createContext, useContext, useCallback, useState } from 'react';
import React, { type FC } from 'react';
import { CheckIcon } from 'src/app/utils/icons';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import useLanguageDirection from 'src/app/utils/hooks/useLangDirection';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';

// 2. StepNavigatorProps and StepType interfaces
interface StepNavigatorProps {
	steps: StepType[];
	onFinish?: () => void;
}

interface StepType {
	title: string;
	content: JSX.Element;
}

// 3. StepContext and useStepContext hook
const StepContext = createContext<any>(null);

// 4. useStepNavigation hook
function useStepNavigation(steps: StepType[]) {
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

	const isLastStep = activeStep === steps.length - 1;
	const isFirstStep = activeStep === 0;

	return {
		activeStep,
		goToNextStep,
		goToPreviousStep,
		setActiveStep,
		isLastStep,
		isFirstStep,
		steps,
	};
}

const useStepContext = () => useContext(StepContext);

// 5. StepNavigator component
export default function StepNavigator({ steps, onFinish }: StepNavigatorProps) {
	const stepNavigation = useStepNavigation(steps);

	return (
		<StepContext.Provider value={{ ...stepNavigation, onFinish }}>
			<div className='flex flex-col gap-4 h-full'>
				{steps.map((_, index) => (
					<Step key={index} index={index} />
				))}
			</div>
		</StepContext.Provider>
	);
}

// 6. Step component and StepProps interface
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

React.memo(Step);

// 7. StepHeader component and StepHeaderProps interface
interface StepHeaderProps {
	index: number;
	title: string;
	isActive: boolean;
	isLastStep: boolean;
	isCompleted: boolean;
	setActiveStep: (index: number) => void;
}

function StepHeader({
	index,
	title,
	isActive,
	isLastStep,
	isCompleted,
	setActiveStep,
}: StepHeaderProps) {
	const { currentLanguage } = useLanguageDirection();
	const { xs } = useResponsive();

	const stepClasses = `flex justify-center items-center size-[1.94rem] z-20 rounded-full cursor-pointer ${
		isActive
			? 'bg-primary text-white'
			: isCompleted
			? 'bg-white border border-primary'
			: 'bg-white border border-hint text-hint'
	}`;

	return (
		<section className='flex gap-2 items-center'>
			<div className={stepClasses} onClick={() => setActiveStep(index)}>
				{isCompleted ? <CheckIcon className='fill-primary' /> : index + 1}
			</div>
			<div className={`capitalize ${isActive ? 'title' : 'paragraph text-subtitle'}`}>{title}</div>
			{!xs && !isLastStep && (
				<span
					className={`h-full w-px absolute top-6 ${
						currentLanguage === 'ar' ? 'right-[15px]' : 'left-[15px]'
					} ${isCompleted ? 'bg-primary' : 'bg-inactive'}`}
				></span>
			)}
		</section>
	);
}

// 8. StepActions component
export const StepActions: React.FC = () => {
	const { t } = useTranslation();
	const { isFirstStep, isLastStep, goToNextStep, goToPreviousStep, onFinish } = useStepContext();

	return (
		<div className='flex justify-end mt-3 gap-4'>
			{!isFirstStep && <Button onClick={goToPreviousStep} text={t('Prev')} />}
			<Button onClick={isLastStep ? onFinish : goToNextStep}>
				{isLastStep ? t('Finish') : t('Next')}
			</Button>
		</div>
	);
};
