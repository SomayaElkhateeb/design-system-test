import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'src/app/components/optimized';
import { Switch } from 'src/app/components/ui/switch';
import { AddFillIcon } from 'src/app/utils/icons';
import RowItem from '../Comp/RowItem';
import AddRate from '../Comp/AddRate';

export default function SaudiArabia() {
	const { t } = useTranslation();
	const [showRate, setShowRate] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	toast.info('Any general rates will reflect here until you overwrite it. It will be isolated.');

	return (
		<>
			{/* <ToastContainer position='top-center' /> */}

			<div className='flex justify-between items-center pb-4'>
				{/* toast */}

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
					saudi={true}
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
					<Button variant='primary' onClick={() => navigate('setup')}>
						{t('setup')}
					</Button>
				</div>
			)}
		</>
	);
}
