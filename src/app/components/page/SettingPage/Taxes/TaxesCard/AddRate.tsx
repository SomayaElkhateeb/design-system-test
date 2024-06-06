import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import RatePopup from './RatePopup';
import { AddFillIcon } from 'src/app/utils/icons';
import { Button } from 'src/app/components/optimized';

export default function AddRateButton() {
	//  hooks
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button
				variant='secondary'
				LeftIcon={AddFillIcon}
				onClick={() => {
					setIsOpen(true);
				}}
			>
				{t('add rate')}
			</Button>
			{isOpen && (
				<RatePopup
					title='Add Rate'
					isOpen={isOpen}
					onClose={() => {
						setIsOpen(false);
					}}
				/>
			)}
		</>
	);
}
