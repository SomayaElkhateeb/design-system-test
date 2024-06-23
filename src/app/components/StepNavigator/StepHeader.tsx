import { CheckIcon } from 'src/app/utils/icons';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import useLanguageDirection from 'src/app/utils/hooks/useLangDirection';
interface StepHeaderProps {
	index: number;
	title: string;
	isActive: boolean;
	isLastStep: boolean;
	isCompleted: boolean;
	setActiveStep: (index: number) => void;
}

export default function StepHeader({
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

