import { Button, LayoutCard, ToastsNotification } from 'src/app/components/optimized';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const TikTokSales = () => {
	const [showNotification, setShowNotification] = useState(true);
	const [_, setSearchParams] = useSearchParams();

	const handleCloseNotification = () => {
		setShowNotification(false);
	};

	const handleSetupNowClick = () => {
		setSearchParams({ catalog_marketing: 'active' });
	};

	return (
		<section>
			<div className='p-4 text-black bg-white'>
				<h3 className='text-xl font-medium'>TikTok sales</h3>
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
					<h2 className='font-bold text-3xl mb-5'>Manage your TikTok features</h2>
					<div className='mb-5 border'>
						<LayoutCard>
							<div className='flex items-center p-5'>
								<h2 className='font-bold text-xl'>TikTok Marketing</h2>
								<p className='bg-gray-200 p-2 rounded-full mx-3'>Pending Account Review</p>
							</div>
							<p className='px-5'>
								Reach milions of potential customers with paid advertising campaigns
							</p>
						</LayoutCard>
					</div>
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
				</div>
			</div>
		</section>
	);
};

export default TikTokSales;
