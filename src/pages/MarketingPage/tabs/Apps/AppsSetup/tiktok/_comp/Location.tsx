import { Button, InputRow, PopupProceed, SelectBoxRow } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';

import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import AccordionInstall from './AccordionInstall';

export default function Location({ setIsCatalogLocationChecked }) {
	const { t } = useTranslation();
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResult, setSearchResult] = useState(false);

	const [isCatalogLocationOpen, setIsCatalogLocationOpen] = useState(false);

	const [selectedOption, setSelectedOption] = useState('select an option');

	const handleOnChange = (value) => {
		setSelectedOption(value);
	};

	const handleCatalogLocation = () => {
		// if (selectedOption !== 'select an option') {
		setIsCatalogLocationChecked(true);
		setIsCatalogLocationOpen(false);
		// }
	};
	const locationList = [
		{ value: 'egypt', label: 'Egypt' },
		{ value: 'saudi_arabia', label: 'Saudi Arabia' },
		{ value: 'qatar', label: 'Qatar' },
		{ value: 'syria', label: 'Syria' },
	];

	// const filteredLocations = locationList
	// 	.filter((location) => location.label.toLowerCase().includes(searchQuery.toLowerCase()))
	// 	.map((location) => location.label);
	return (
		<AccordionInstall title={t('Marketing Catalog Location')}>
			<p className='text-subtitle pb-6 text-sm w-[80%]'>
				Add the countries or regions where ads for your products will appear. you can update this in
				your settings later.
			</p>

			<div className='flex flex-col gap-5'>
				<div className='lg:w-1/2 w-full'>
					<SelectBoxRow
						label={t('Default Location')}
						options={locationList}
						selectedValue={selectedOption}
						defaultValue={'select an option'}
						handleOnChange={handleOnChange}
					/>
				</div>
				<p className='text-subtitle text-sm w-[80%]'>
					You can't change the default location once you finish setup.
				</p>
				<div className='lg:w-1/2 w-full'>
					<InputRow
						label={t('Additional Locations')}
						placeholder={t('Search for country or region')}
						leftIcon={
							<span className='rotate-90'>
								<CiSearch size={30} />
							</span>
						}
						value={searchQuery}
						// onFocus={() => setSearchResult(true)}
						// handleOnChange={(value) => {
						// 	setSearchQuery(value);
						// 	setSearchResult(true);
						// }}
					/>

					{/* <div className='bg-white rounded-md shadow-md'>
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
					</div> */}
				</div>

				<div className='flex justify-end'>
					<Button onClick={() => setIsCatalogLocationOpen(true)}>{t('Create')}</Button>
				</div>

				{isCatalogLocationOpen && (
					<PopupProceed
						title={t('Are you want to Disable Catalog Sync From your store?')}
						subTitle={t('You can Recync anytime with TikTok Catalog.')}
						proceedBtnText={t('Yes, Disable')}
						cancelBtnText={t('Discard')}
						isOpen={isCatalogLocationOpen}
						onCancel={() => setIsCatalogLocationOpen(false)}
						onProceed={handleCatalogLocation}
						color={'#EC5151'}
					/>
				)}
			</div>
		</AccordionInstall>
	);
}
