import { Button, LayoutCard, PopupProceed, ToastsNotification } from 'src/app/components/optimized';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LiaSyncAltSolid } from 'react-icons/lia';
import useMarketingSetup from '../_hook/useMarketingSetup';

const SnapchatSales = () => {
	const { syncStatus, setSyncStatus } = useMarketingSetup(null);
	const [showNotification, setShowNotification] = useState(true);
	const [_, setSearchParams] = useSearchParams();
	const [isPopupOpen, setIsPopupOpen] = useState(false);

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
		<section>
			<div className='w-[500px]'>
				{isPopupOpen && (
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
							In order to connect to this Business Center account, you'll need to approve admin
							access to the connected TikTok Ads Manager account.{' '}
						</p>
					</PopupProceed>
				)}
			</div>
			<div className='p-4 text-black bg-white'>
				<h3 className='text-xl font-medium'>Snapchat sales</h3>
			</div>
			<div className='bg-[#F9FAFC] p-4 flex flex-col items-center'>
				<div className='w-3/5'>
					{showNotification && (
						<ToastsNotification
							icon={<IoMdInformationCircleOutline size={25} />}
							backgroundColor='#E1E9FC'
							action={
								<button onClick={handleCloseNotification}>
									<IoClose />
								</button>
							}
						>
							<div className='flex justify-between items-center'>
								<span>Your ad account is under review. This normally takes up to 24 hours.</span>
								<button className='text-primary mx-1'>Learn More</button>
							</div>
						</ToastsNotification>
					)}
				</div>
				<div className='w-3/5 mt-12'>
					<h2 className='font-bold text-3xl mb-5'>Manage your Snapchat features</h2>
					<div className='mb-5 border'>
						<LayoutCard>
							<div className='flex items-center p-5'>
								<h2 className='font-bold text-xl'>Snapchat Marketing</h2>
								<p className='bg-gray-200 p-2 rounded-full mx-3'>Pending Account Review</p>
							</div>
							<p className='px-5'>
								Reach milions of potential customers with paid advertising campaigns
							</p>
						</LayoutCard>
					</div>

					{/* Catalog Sync is inActive */}
					{syncStatus === false && (
						<div className='border'>
							<LayoutCard>
								<div className='p-5'>
									<h2 className='font-bold text-xl px-5'>Marketing Catalog</h2>
									<div className='flex items-center justify-between px-5'>
										<p>Directly sync all of your product information to use for campaigns.</p>
										<Button variant='secondary' onClick={handleSetupNowClick}>
											Set up now
										</Button>
									</div>
								</div>
							</LayoutCard>
						</div>
					)}

					{/* Catalog Sync is Active */}
					{syncStatus === true && (
						<div className='mt-5 py-5'>
							<h1 className='text-2xl font-bold text-gray-800 mb-5'>Product Status on Snapchat</h1>

							<div className='p-4 border bg-white rounder'>
								<div className='flex justify-end'>
									<button
										type='button'
										className='text-red-400'
										onClick={() => setIsPopupOpen(true)}
									>
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
					)}
				</div>
			</div>
		</section>
	);
};

export default SnapchatSales;
