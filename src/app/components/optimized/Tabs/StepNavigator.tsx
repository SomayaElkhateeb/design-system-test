import { createContext, useContext } from 'react';
import { CheckIcon } from 'src/app/utils/icons';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import useLanguageDirection from 'src/app/utils/hooks/useLangDirection';

interface StepType {
	title: string;
	content: JSX.Element;
}
interface StepNavigatorProps {
	steps: StepType[];
	activeStep: number;
	setActiveStep: (step: number) => void;
	onFinish?: () => void;
}

export default function StepNavigator({
	steps,
	activeStep,
	setActiveStep,
	onFinish,
}: StepNavigatorProps) {
	return (
		<StepContext.Provider value={{ steps, activeStep, setActiveStep, onFinish }}>
			<div className='flex flex-col gap-4 h-full'>
				{steps.map((_, index) => (
					<Step key={index} index={index} />
				))}
			</div>
		</StepContext.Provider>
	);
}

const StepContext = createContext<any>(null);

const useStepContext = () => useContext(StepContext);


const Step = ({ index }: { index: number }) => {
	const { steps, activeStep } = useStepContext();

	const step = steps[index];
	const isActive = index === activeStep;
	return (
		<div className={`relative ${isActive ? 'flex-grow' : ''}`}>
			<StepHeader index={index} title={step.title} />
			{isActive && <div className='py-5 px-9'>{step.content}</div>}
		</div>
	);
};

interface StepHeaderProps {
	index: number;
	title: string;
}

function StepHeader({ index, title }: StepHeaderProps) {
	const { steps, activeStep, setActiveStep } = useStepContext();

	const isActive = index === activeStep;
	const isCompleted = index < activeStep;
	const isLastStep = index === steps.length - 1;

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
