import { useEffect, useState } from 'react';

import ControlCard from 'src/app/components/optimized/Cards/ControlCard';
import data from '.././comp/data.json';
import { useTranslation } from 'react-i18next';
import { InputRow } from 'src/app/components/optimized';

// const Integrations = () => {

// const [activatedPlatforms, setActivatedPlatforms] = useState([]);

// const [showPopup, setShowPopup] = useState(false);

// const [selectedPlatform, setSelectedPlatform] = useState(null);

// const handleActivate = (platformId) => {

// 		setActivatedPlatforms((prevState) =>return  [...prevState, platformId]);
// 		setShowPopup(false);
// };

// const handleCardClick = (platform) => {
// 		setSelectedPlatform(platform);
// 		setShowPopup(true);
// };

// return (
// 	<section
// 		className='grid gap-5 p-5'
// 		style={{
// 			gridTemplateColumns: 'repeat(auto-fill, minmax(23rem, 1fr))',
// 		}}
// 	>
{
	/* {data.paltformIntegrations.map((item) => (
				<ControlCard key={item.id} platform={item} onCardClick={handleCardClick} />
			))}

			{showPopup && (
				<PopupActivate
					platform={selectedPlatform}
					onActivate={handleActivate}
					onClose={() => setShowPopup(false)}
				/>
			)} */
}
// 		</section>
// 	);
// };

// export default Integrations;

export default function Integrations() {
	const [activePlatformId, setActivePlatformId] = useState(false);
	const [activatedPlatforms, setActivatedPlatforms] = useState({}); // Track activated platforms

	const handleOpenPopup = (platformId) => {
		setActivePlatformId(platformId);
	};

	const handleClosePopup = () => {
		setActivePlatformId(null);
	};

	const handleActivate = (platformName, integrationId) => {
		// Implement logic to activate the platform using the provided ID and integration ID (e.g., API call)

		setActivatedPlatforms({ ...activatedPlatforms, [platformName]: true }); // Update activatedPlatforms state
	};
	return (
		<section
			className='grid gap-5 container'
			style={{
				gridTemplateColumns: 'repeat(auto-fill, minmax(23rem, 1fr))',
			}}
		>
			{data.paltformIntegrations.map((platform) => (
				<ControlCard
					key={platform.id}
					platform={platform}
					onOpenPopup={handleOpenPopup}
					isActive={activatedPlatforms[platform.platformName]}
				/>
			))}
			{activePlatformId && (
				<Popup
					platformId={activePlatformId}
					onClose={handleClosePopup}
					onActivate={handleActivate}
					platforms={data.paltformIntegrations}
				/>
			)}
		</section>
	);
}

const Popup = ({ platformId, onClose, onActivate, platforms }) => {
	const { t } = useTranslation();

	const [integrationId, setIntegrationId] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const [selectedPlatform, setSelectedPlatform] = useState(null);

	useEffect(() => {
		if (platformId) {
			setIsOpen(true);
			setSelectedPlatform(findPlatformById(platformId)); // Find platform object based on ID
		} else {
			setIsOpen(false);
			setSelectedPlatform(null);
		}
	}, [platformId]); // Update isOpen and selectedPlatform based on platformId changes

	const findPlatformById = (id) => {
		// Implement logic to find the platform object based on the provided ID (e.g., search platforms array)
		// Replace with your actual data access logic
		return platforms.find((platform) => platform.id === id);
	};

	const handleInputChange = (event) => {
		setIntegrationId(event.target.value);
	};

	const handleActivation = () => {
		onActivate(selectedPlatform.platformName, integrationId); // Pass platform ID and integration ID
		onClose(); // Close popup after activation
	};

	return (
		isOpen && (
			<div className='fixed inset-0 z-50 flex items-center justify-center'>
				{/* Overlay */}
				<div className='fixed inset-0 bg-black opacity-50' onClick={onClose}></div>

				{/* Popup Content */}
				<div className='relative flex flex-col content-between rounded-md  w-[35rem] p-5 bg-white'>
					<h3 className='font-semibold text-title capitalize mb-5'>
						{t('Activate')} {selectedPlatform?.platformName} {t('Pixel')}
					</h3>
					<div className='w-96'>
						<InputRow
							label={t('Pixle ID')}
							value={integrationId}
							onChange={(e) => setPixelId(e.target.value)}
						/>
					</div>
					<p className='mt-2 text-sm text-title'>
						{t('You can copy it from')}{' '}
						<span className='capitalize'>{selectedPlatform?.platformName}</span> {t('ads manager')}
					</p>

					<div className='flex items-center justify-end gap-2 mt-5'>
						<button className='btn-ter' onClick={onClose}>
							{t('Cancel')}
						</button>

						<button className='btn-pri' onClick={handleActivation}>
							{t('Activate')}
						</button>
					</div>
				</div>
			</div>
		)
	);
};
