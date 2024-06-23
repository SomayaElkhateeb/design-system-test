import React from 'react';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { useStepContext } from './StepNavigator';

const StepActions: React.FC = () => {
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

export default StepActions;
