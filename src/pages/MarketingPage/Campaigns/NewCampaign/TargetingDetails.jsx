import { useState } from 'react';
import { SearshBox } from 'src/app/components/optimized';
import SingleChoiceChips from 'src/app/components/optimized/ChoiceChips/SingleChoiceChips';
const targetingOptions = ['Purchased from you', 'Visited your store', 'liked your page', 'having specific interests'];
const interests = [
	'Fashion',
	"Men's Clothing",
	"Women's Clothing",
	'Accessories',
	'Shoes',
	'Electronics',
	'Home Appliances',
	'Furniture',
	'Kitchenware',
	'Beauty Products',
	'dress',
];
const TargetingDetails = () => {
	const [selectedTarget, setSelectedTarget] = useState('');
	const [selectedInterests, setSelectedInterests] = useState('');

	const handleTargetSelect = (target) => {
		setSelectedTarget(target);
	};

	const handleSelectedInterests = (selectedInterests) => {
		setSelectedInterests(selectedInterests);
		console.log('Selected Interests:', selectedInterests);
	};

	return (
		<div className='w-[736px] p-5 bg-white rounded-xl border border-borders-lines'>
			<h2 className='title text-lg mb-6'>Targeting</h2>
			<div className='grid grid-cols-1 gap-4'>
				<div>
					<h2 className='title mb-1.5'>Target who is similar to people</h2>
					<SingleChoiceChips options={targetingOptions} setSelected={handleTargetSelect} selected={selectedTarget} />
				</div>
				{selectedTarget === 'having specific interests' && (
					<div>
						<SearshBox options={interests} onSelectedOptions={handleSelectedInterests} label='Specific interests' />
					</div>
				)}
			</div>
		</div>
	);
};

export default TargetingDetails;
