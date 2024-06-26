import { useState } from 'react';
import { Button, SelectBoxRow } from 'src/app/components/optimized';
import { useSearchParams } from 'react-router-dom';
import { usePlatformContext } from '../../PlatformContext';

interface Option {
	value: string;
	label: string;
}
const organizations = [
	{
		name: 'Fan Al Taalouq',
		url: 'FanAlTaalouq.dookan.net',
	},
	{
		name: 'Rasma',
		url: 'Rasma.dookan.net',
	},
];

const options: Option[] =
	organizations.map((store) => ({
		value: store.url,
		label: store.name,
	})) || [];

const SnapchatMarketingCatalog = () => {
	const [selectedOrganization, setSelectedOrganization] = useState('Select an organization');
	const [_, setSearchParams] = useSearchParams();
	const { setSyncStatus } = usePlatformContext();

	const handleSelectChange = (value) => {
		setSelectedOrganization(value);
	};
	const handleSync = () => {
		setSyncStatus(true);
		setSearchParams({ features_manage: 'active' });
		setSyncStatus(true);
	};

	return (
		<div className='p-5  flex flex-col gap-4'>
			<div className='global-cards p-0 overflow-hidden'>
				<h1 className='text-xl font-bold '>Catalog</h1>
				<p className=''>Select Organization To Use For Catalog Sync</p>
				<div className=''>
					<SelectBoxRow
						options={options}
						selectedValue={selectedOrganization}
						defaultValue={'Select an organization'}
						handleOnChange={handleSelectChange}
					/>
				</div>
				<div className='flex justify-end'>
					<Button disabled={selectedOrganization === 'Select an organization'} onClick={handleSync}>
						Sync
					</Button>
				</div>
			</div>
			<p className='bg-constrained border-t py-2 px-5'>
				Your Products are being synced into a Snapchat catalog in your organization. only products
				with the folowing required fields will be synced: id, title, description, link, image-link,
				availability, brand or mpn or gtin (
				<span className='text-primary cursor-pointer'>see required product metadata</span>).
			</p>
		</div>
	);
};

export default SnapchatMarketingCatalog;
