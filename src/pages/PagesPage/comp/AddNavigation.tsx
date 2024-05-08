import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderSettings } from 'src/app/components/optimized';
import AddNavItemDialog from 'src/app/components/page/PagesPage/Navigation/AddNavItemDialog';

export default function AddNavigation() {
	const [showDialog, setShowDialog] = useState(false);
	const { t } = useTranslation();
	return (
		<div>
			<HeaderSettings
				variant='settingOneBtn'
				to={-1}
				title={t('Main menu')}
				btn1={{
					text: t('Add New Item'),
					onClick: () => {
						setShowDialog(true);
					},
				}}
			/>
			{showDialog && (
				<AddNavItemDialog openDialog={true} handelclose={() => setShowDialog(false)} />
			)}
		</div>
	);
}
