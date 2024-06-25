import { createContext, useContext } from 'react';

import StepHeader from './StepHeader';
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

const StepContext = createContext<any>(null);

export const useStepContext = () => useContext(StepContext);

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
