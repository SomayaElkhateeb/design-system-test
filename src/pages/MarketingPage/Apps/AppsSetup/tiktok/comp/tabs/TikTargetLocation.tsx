import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { Button } from 'src/app/components/optimized';

interface LocationData {
	description: string;
	location: string[];
}

interface TikTargetLocationProps {
	data: LocationData;
}

const TikTargetLocation: React.FC<TikTargetLocationProps> = ({ data }) => {
	const [selectedLocations, setSelectedLocations] = useState<string[]>([data.location[0]]);
  
	console.log(selectedLocations);

	const handleLocationChange = (event: React.ChangeEvent<{}>, value: string[]) => {
		setSelectedLocations(value);
	};

	const handleConfirmClick = () => {
		console.log(selectedLocations);
	};

	return (
		<>
			<p>{data.description}</p>

			<div className='flex items-center justify-between'>
				<div className='my-5'>
					<Autocomplete
						multiple
						limitTags={2}
						id='multiple-limit-tags'
						options={data.location}
						value={selectedLocations}
						onChange={handleLocationChange}
						getOptionLabel={(option) => option}
						renderInput={(params) => <TextField {...params} label='limitTags' placeholder='Favorites' />}
						sx={{ width: '500px' }}
					/>
				</div>
				<Button onClick={handleConfirmClick}>Confirm</Button>
			</div>
		</>
	);
};

export default TikTargetLocation;
