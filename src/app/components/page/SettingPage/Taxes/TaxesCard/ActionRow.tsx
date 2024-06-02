import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AddRate from './AddRate';
import { Switch } from 'src/app/components/ui/switch';

interface Props {
	general?: boolean;
}

export default function ActionRow({ general = false }: Props) {
	const { t } = useTranslation();
	const [isEnabled, setIsEnabled] = useState<boolean>(false);
	return (
		<div className='flex items-center justify-between'>
			{!general && (
				<div className='flex gap-2 items-center'>
					<Switch checked={isEnabled} onCheckedChange={() => setIsEnabled(!isEnabled)} />
					{isEnabled && <p className='paragraph'>{t('Enabled')}</p>}
				</div>
			)}
			<AddRate />
		</div>
	);
}
