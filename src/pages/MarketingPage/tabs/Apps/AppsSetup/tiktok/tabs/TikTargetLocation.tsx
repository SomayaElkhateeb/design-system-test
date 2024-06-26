import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Button } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';

interface LocationData {
	description: string;
	location: string[];
}

interface TikTargetLocationProps {
	data: LocationData;
}
const TikTargetLocation: React.FC<TikTargetLocationProps> = ({ data }) => {
	const { t } = useTranslation();
	const [selectedLocations, setSelectedLocations] = useState<string[]>([data.location[0]]);

	const handleLocationChange = (event: React.ChangeEvent<{}>, value: string[]) => {
		setSelectedLocations(value);
	};

	const handleConfirmClick = () => {
		console.log(selectedLocations);
	};

	return (
		<>
			<p className='text-title text-sm lg:w-[70%]'>{data.description}</p>
			<hr />
			<div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
				<div className='py-5'>
					<Autocomplete
						multiple
						limitTags={2}
						id='multiple-limit-tags'
						options={data.location}
						value={selectedLocations}
						onChange={handleLocationChange}
						getOptionLabel={(option) => option}
						renderInput={(params) => (
							<TextField {...params} label='limitTags' placeholder='Favorites' />
						)}
						sx={{ width: '500px' }}
					/>
				</div>
				<div>
					<Button onClick={handleConfirmClick}>{t('Confirm')}</Button>
				</div>
			</div>
		</>
	);
};

export default TikTargetLocation;
