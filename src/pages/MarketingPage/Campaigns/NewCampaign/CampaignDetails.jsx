import  { useState } from 'react';
import { InputRow } from 'src/app/components/optimized';
import SpecificProducts from 'src/app/components/page/discount/Selectors/SpecificProducts';



const CampaignDetails = () => {
	const { campaignName, activityName, adText, handleChange } = useCampaignDetails();
	return (
		<div className='w-[736px] p-5 bg-white rounded-xl border border-borders-lines'>
			<h2 className='title text-lg mb-6'>Campaign details</h2>
			<div className='grid grid-cols-1 gap-4'>
				<div className='w-96'>
					<InputRow label='Campaign name' value={campaignName} onChange={handleChange} name='campaignName' />
				</div>
				<div className='w-96'>
					<InputRow label='Activity name' value={activityName} onChange={handleChange} name='activityName' />
				</div>
				<div>
					<SpecificProducts />
					<p className='paragraph'>Select up to 5 products to promote.</p>
				</div>
				<div className='w-96'>
					<InputRow label='Ad Text' value={adText} onChange={handleChange} name='adText' />
				</div>
			</div>
		</div>
	);
};
export default CampaignDetails;


const useCampaignDetails = () => {
	const [campaignName, setCampaignName] = useState('');
	const [activityName, setActivityName] = useState('');
	const [adText, setAdText] = useState('');

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name === 'campaignName') setCampaignName(value);
		if (name === 'activityName') setActivityName(value);
		if (name === 'adText') setAdText(value);
	};

	return {
		campaignName,
		activityName,
		adText,
		handleChange,
	};
};