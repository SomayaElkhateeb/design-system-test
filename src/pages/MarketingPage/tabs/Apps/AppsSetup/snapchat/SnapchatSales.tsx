import {
	Button,
	LayoutCard,
	PopupProceed,
	SubHeader,
	ToastsNotification,
} from 'src/app/components/optimized';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LiaSyncAltSolid } from 'react-icons/lia';
import { usePlatformContext } from '../PlatformContext';
import { useTranslation } from 'react-i18next';

const SnapchatSales = () => {
	const { syncStatus, setSyncStatus } = usePlatformContext();
	const [showNotification, setShowNotification] = useState(true);
	const [_, setSearchParams] = useSearchParams();
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const { t } = useTranslation();

	const handleCloseNotification = () => {
		setShowNotification(false);
	};

	const handleSetupNowClick = () => {
		setSearchParams({ catalog_marketing: 'active' });
	};

	const handleDisableSync = () => {
		console.log('Sync button clicked');
		setIsPopupOpen(false);
		setSyncStatus(false);
	};

	return (
		<>
			<SubHeader title={t('Snapchat sales')} />
			<section className='p-5 w-[90%] lg:w-[60%] mx-auto flex flex-col gap-4'>
				{showNotification && (
					<ToastsNotification
						icon={<IoMdInformationCircleOutline size={25} />}
						backgroundColor='#E7EEFF'
						action={
							<button onClick={handleCloseNotification}>
								<IoClose />
							</button>
						}
					>
						<div className='py-2'>
							<span className='text-sm text-title'>
								Your ad account is under review. This normally takes up to 24 hours.
								<Button variant='link' className='text-sm inline'>
									{t('Learn More')}
								</Button>
							</span>
						</div>
					</ToastsNotification>
				)}
				<h2 className='title text-lg pt-3'>{t('Manage your Snapchat features')}</h2>

				<div className='global-cards'>
					<div className='flex gap-2 flex-col lg:flex-row lg:items-center'>
						<h2 className='title'>{t('Snapchat Marketing')}</h2>
						<p
							className='py-2 px-4 rounded-full title text-sm w-fit'
							style={{ background: '#B3B3B3' }}
						>
							Pending Account Review
						</p>
					</div>

					<p className='text-title text-sm'>
						Reach milions of potential customers with paid advertising campaigns
					</p>
				</div>

				{/* Catalog Sync is inActive */}
				{syncStatus === false && (
					<div className='global-cards'>
						<h2 className='title'>{t('Marketing Catalog')}</h2>
						<div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
							<p className='global-install-p'>
								Directly sync all of your product information to use for campaigns.
							</p>
							<div className='global-install-btn'>
								<Button variant='secondary' onClick={handleSetupNowClick}>
									{t('Set up now')}
								</Button>
							</div>
						</div>
					</div>
				)}

				{/* Catalog Sync is Active */}
				{/* {syncStatus === true && (
					<div className='mt-5 py-5'>
						<h1 className='text-2xl font-bold text-gray-800 mb-5'>Product Status on Snapchat</h1>

						<div className='p-4 border bg-white rounder'>
							<div className='flex justify-end'>
								<button type='button' className='text-red-400' onClick={() => setIsPopupOpen(true)}>
									Disable Catalog Sync
								</button>
							</div>
							<div className='flex flex-col mt-8'>
								<div className='flex flex-col space-y-7 items-center mb-2'>
									<LiaSyncAltSolid size={50} />
									<h2 className='text-xl font-bold text-gray-800 mr-4'>Snapchat Marketing</h2>
									<p className='text-gray-500'>
										Reach milions of potential customers with paid advertising campaigns
									</p>
								</div>
							</div>
						</div>
						<div className='bg-gray-100 rounded-br-sm rounded-bl-sm p-4 py-8'>
							<p className='text-gray-500'>
								Snapchat review products in 3-5 days. Product statuses listed here are from your
								default country or region.
							</p>
						</div>
					</div>
				)} */}
			</section>
			{/* {isPopupOpen && (
				<PopupProceed
					title='Approve access to your TikTok Ads Manager account'
					proceedBtnText='Yes, Disable'
					cancelBtnText='Discard'
					isOpen={isPopupOpen}
					onCancel={() => setIsPopupOpen(false)}
					onProceed={handleDisableSync}
					color='bg-red-500'
				>
					<p>
						In order to connect to this Business Center account, you'll need to approve admin access
						to the connected TikTok Ads Manager account.{' '}
					</p>
				</PopupProceed>
			)} */}
		</>
	);
};

export default SnapchatSales;
