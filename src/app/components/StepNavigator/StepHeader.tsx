import { CheckIcon } from 'src/app/utils/icons';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import useLanguageDirection from 'src/app/utils/hooks/useLangDirection';
import { useStepContext } from './StepNavigator';

interface StepHeaderProps {
	index: number;
	title: string;
}

export default function StepHeader({ index, title }: StepHeaderProps) {
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