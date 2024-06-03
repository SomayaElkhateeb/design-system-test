import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';

interface StepActionsProps {
	isLastStep: boolean;
	isFirstStep: boolean;
  onFinish: () => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

export default function StepActions({
	onFinish,
	isLastStep,
	isFirstStep,
	goToNextStep,
	goToPreviousStep,
}: StepActionsProps) {
	const { t } = useTranslation();
	return (
		<div className='flex justify-end mt-3 gap-4'>
			{!isFirstStep && <Button onClick={goToPreviousStep} text={t('Prev')} />}
			<Button onClick={isLastStep ? onFinish : goToNextStep}>
				{isLastStep ? t('Finish') : t('Next')}
			</Button>
		</div>
	);
}
