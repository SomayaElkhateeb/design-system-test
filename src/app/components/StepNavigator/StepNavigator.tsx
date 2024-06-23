import { createContext, useContext } from 'react';
import useStepNavigation, { StepType } from './useStepNavigation';
import Step from './Step';

interface StepNavigatorProps {
	steps: StepType[];
	// onNext?: () => void;
	// onBack?: () => void;
	onFinish?: () => void;
}

const StepContext = createContext<any>(null);
export const useStepContext = () => useContext(StepContext);
// , onNext, onBack
export default function StepNavigator({ steps, onFinish }: StepNavigatorProps) {
	const stepNavigation = useStepNavigation(steps);
	// const { goToNextStep, goToPreviousStep } = useStepNavigation(steps);
	
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
