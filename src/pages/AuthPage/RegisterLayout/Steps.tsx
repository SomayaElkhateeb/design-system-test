import InternalStepper from './InternalStepper';

type StepsProps = {
  stepsContent: React.ReactNode[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
};
export default function Steps({ stepsContent, currentStep, setCurrentStep }:StepsProps) {

	const renderStepContent = () => {
		const StepContent = stepsContent[currentStep - 1];
		return StepContent;
	};

	return (
		<div className='grid gap-5'>
			<InternalStepper
				currentStep={currentStep}
				stepsLength={stepsContent.length}
				setCurrentStep={setCurrentStep}
			/>
			<div>{renderStepContent()}</div>
		</div>
	);
}
