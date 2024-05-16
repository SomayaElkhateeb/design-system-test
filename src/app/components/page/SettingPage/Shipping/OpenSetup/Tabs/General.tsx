import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from 'src/app/components/optimized';
import { AddFillIcon } from 'src/app/utils/icons';

import RowItem from '../Comp/RowItem';
import AddRate from '../Comp/AddRate';

export default function General() {
	const { t } = useTranslation();
	const [showRate, setShowRate] = useState(false);

	return (
		<>
			<Button
				variant='secondary'
				LeftIcon={AddFillIcon}
				onClick={() => {
					setShowRate(true);
				}}
			>
				{t('add rate')}
			</Button>
			{showRate && (
				<AddRate
					saudi={false}
					onClose={() => {
						setShowRate(false);
					}}
				/>
			)}
			<RowItem type={t('Free')} order={t('SAR 0 to SAR 30')} period={t('2 to 4 business days')} />
			<hr />
			<RowItem type={t('SAR 20')} order={t('SAR 30 and up')} period={t('2 to 4 business days')} />
		</>
	);
}
