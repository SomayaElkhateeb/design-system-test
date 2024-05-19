import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderSettings } from 'src/app/components/optimized';
import AddNavItemDialog from 'src/app/components/page/PagesPage/Navigation/AddNavItemDialog';

export default function AddNavigation() {
	//  hooks
	const [showDialog, setShowDialog] = useState(false);
	const { t } = useTranslation();

	//   style of dialog
	const style = {
		height: { md: '21.5rem', xs: '15.5rem' },

		width: { md: '35.5rem', xs: '20.8rem' },
	};
	return (
		<div>
			<HeaderSettings
				variant='settingOneBtn'
				title={t('Main menu')}
				btn1={{
					text: t('Add New Item'),
					onClick: () => {
						setShowDialog(true);
					},
				}}
			/>
			{showDialog && (
				<AddNavItemDialog
					openDialog={true}
					handelclose={() => setShowDialog(false)}
					style={style}
				/>
			)}
		</div>
	);
}
