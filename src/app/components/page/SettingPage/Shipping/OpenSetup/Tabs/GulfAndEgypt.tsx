import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'src/app/components/optimized';
import { Switch } from 'src/app/components/ui/switch';
import { AddFillIcon } from 'src/app/utils/icons';

import RowItem from '../Comp/RowItem';
import AddRate from '../Comp/AddRate';
export default function GulfAndEgypt() {
	const [showRate, setShowRate] = useState(false);
	const { t } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<>
			<div className='flex justify-between items-center pb-4'>
				<div className='flex gap-2 items-center'>
					<Switch /> <span>{t('Enabled')}</span>
				</div>

				<Button
					variant='secondary'
					LeftIcon={AddFillIcon}
					onClick={() => {
						setShowRate(true);
					}}
				>
					{t('add rate')}
				</Button>
			</div>
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

			{location.pathname !== '/settings/shipping/setupProviders/smsa/openSetup/setup' && (
				<div className='pt-5 flex justify-end w-full'>
					<Button variant='primary' onClick={() => navigate('Setup')}>
						{t('Setup')}
					</Button>
				</div>
			)}
		</>
	);
}
