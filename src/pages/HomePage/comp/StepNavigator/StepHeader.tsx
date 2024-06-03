import { CheckIcon } from 'src/app/utils/icons';
import { UseLanguage } from 'src/app/components/CustomHook/LanguageHook';
import { useTranslation } from 'react-i18next';
import { StepType } from './useStepNavigation';

interface StepHeaderProps {
	index: number;
	title: string;
	steps: StepType[];
	isActive: boolean;
	activeStep: number;
	isLastStep: boolean;
	isCompleted: boolean;
	setActiveStep: (index: number) => void;
}

export default function StepHeader({
	index,
	title,
	steps,
	isActive,
	isLastStep,
	activeStep,
	isCompleted,
	setActiveStep,
}: StepHeaderProps) {
	const { t } = useTranslation();
	const language = UseLanguage();

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
			<div className={`capitalize ${isActive ? 'title' : 'paragraph text-subtitle'}`}>
				{t(title)}
			</div>
			{!isLastStep && (
				<span
					className={`h-full w-px absolute left-[15px] top-6 ${
						language === 'ar' ? 'right-[15px]' : 'left-[15px]'
					} ${isCompleted ? 'bg-primary' : 'bg-inactive'}`}
				></span>
			)}
		</section>
	);
}
