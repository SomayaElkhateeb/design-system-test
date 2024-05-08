import { Button, InputRow, PopupProceed, SelectBoxRow } from 'src/app/components/optimized';
import AccordionItem from './AccordionItem';
import { PiUserCircleThin } from 'react-icons/pi';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

function TikTokMarketingCatalog() {
	const [isBusinessCenterChecked, setBusinessCenterChecked] = useState(false);
	const [isBusinessCenterOpen, setIsBusinessCenterOpen] = useState(true);
	const [isCatalogLocationChecked, setCatalogLocationChecked] = useState(false);
	const [isCatalogLocationOpen, setIsCatalogLocationOpen] = useState(false);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResult, setSearchResult] = useState(false);
	const [selectedOption, setSelectedOption] = useState('select an option');

	const handleBusinessCenter = () => {
		setIsPopupOpen(true);
	};
	const handleBusinessCenterProceed = () => {
		setIsBusinessCenterOpen(false);
		setIsPopupOpen(false);
		setBusinessCenterChecked(true);
		console.log('Proceeding...');
	};

	const handleCatalogLocation = () => {
		if (selectedOption !== 'select an option' ) {
			setCatalogLocationChecked(true);
			setIsCatalogLocationOpen(false);
		}
	};

	const handleOnChange = (value) => {
		setSelectedOption(value);
	};

	const locationList = [
		{ value: 'egypt', label: 'Egypt' },
		{ value: 'saudi_arabia', label: 'Saudi Arabia' },
		{ value: 'qatar', label: 'Qatar' },
		{ value: 'syria', label: 'Syria' },
	];

	const filteredLocations = locationList
		.filter((location) => location.label.toLowerCase().includes(searchQuery.toLowerCase()))
		.map((location) => location.label);

	return (
		<div className='flex flex-col'>
			<div className='w-[500px]'>
				{isPopupOpen && (
					<PopupProceed
						title='Approve access to your TikTok Ads Manager account'
						proceedBtnText="Proceed"
						cancelBtnText="Cancel"
						color="bg-blue-500"
						isOpen={isPopupOpen}
						onCancel={() => setIsPopupOpen(false)}
						onProceed={handleBusinessCenterProceed}
					>
						<p>
							In order to connect to this Business Center account, you'll need to approve admin
							access to the connected TikTok Ads Manager account.{' '}
						</p>
					</PopupProceed>
				)}
			</div>
			<div className='w-2/3'>
				<AccordionItem
					title='TikTok Business Center Account'
					isChecked={isBusinessCenterChecked}
					isOpen={isBusinessCenterOpen}
					toggleAccordion={() => setIsBusinessCenterOpen(!isBusinessCenterOpen)}
				>
					<span className='flex items-center mb-2'>
						Allow Dookan Create a TikTok Business Center account to access Your store manager,
						business page, and product catalog all in our place.
					</span>
					<div className='flex items-center justify-between p-4 border border-green-500 rounded-md'>
						<div className='flex items-center'>
							<PiUserCircleThin size={60} />
							<span>Allow Dookan to create account</span>
						</div>
						<Button onClick={handleBusinessCenter}>Create</Button>
					</div>
				</AccordionItem>
				<AccordionItem
					title='Marketing Catalog Location'
					isChecked={isCatalogLocationChecked}
					isOpen={isCatalogLocationOpen}
					toggleAccordion={() => setIsCatalogLocationOpen(!isCatalogLocationOpen)}
				>
					<span className='flex items-center mb-2'>
						Add the countries or regions where ads for your products will appear. you can update
						this in your settings later.
					</span>
					<div className=''>
						<div className='w-1/3'>
							<SelectBoxRow
								label='Default Location'
								options={locationList}
								selectedValue={selectedOption}
								defaultValue={'select an option'}
								handleOnChange={handleOnChange}
							/>
						</div>
						<p className='my-1'>You can’t change the default location once you finish setup.</p>
						<div className='w-1/3 my-5'>
							<InputRow
								label='Additional Locations'
								placeholder='Search for country or region'
								leftIcon={
									<span className='rotate-90'>
										<CiSearch size={30} />
									</span>
								}
								value={searchQuery}
								onFocus={() => setSearchResult(true)}
								handleOnChange={(value) => {
									setSearchQuery(value);
									setSearchResult(true);
								}}
							/>

							<div className='bg-white rounded-md shadow-md'>
								{/* filteredLocations result */}
								{searchQuery !== '' &&
									searchResult &&
									filteredLocations.map((item) => (
										<div
											className='p-3 hover:bg-blue-100'
											onClick={() => {
												setSearchQuery(item);
												setSearchResult(false);
											}}
										>
											{item}
										</div>
									))}
							</div>
						</div>
						<div className='flex justify-end'>
							<Button onClick={handleCatalogLocation}>Create</Button>
						</div>
					</div>
				</AccordionItem>

				{isBusinessCenterChecked && isCatalogLocationChecked && (
					<div className='flex justify-end'>
						<Button onClick={''}>Finish setup</Button>
					</div>
				)}
			</div>
		</div>
	);
}

export default TikTokMarketingCatalog;
