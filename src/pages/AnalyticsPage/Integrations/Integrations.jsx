import { useState } from 'react';
import facebook from 'src/app/assets/social/facebook.svg';
import google from 'src/app/assets/social/google.svg';
import snap from 'src/app/assets/social/snapchat.svg';
import twitter from 'src/app/assets/social/twitter.svg';
import ControlCard from 'src/app/components/optimized/Cards/ControlCard';
import PopupActivate from 'src/app/components/optimized/Popups/PopupActivate';

const data = [
	{
		id: 1,
		image: facebook,
		name: 'Facebook Pixel',
		description:
			'Facebook pixel lets you track your store visitors and their behavior to optimize your Facebook ads, so you can retarget them and track your ad results.',
	},
	{
		id: 2,
		image: google,
		name: 'Google Analytics',
		description:
			'Google Remarketing lets you follow up with people who have already visited your website, and deliver ad content.',
	},
	{
		id: 3,
		image: snap,
		name: 'Snapchat Pixel',
		description:
			'Measure your Snapchat ads impact on the sales. Add a Snap Pixel to see how many snapchatters interact with your store after viewing your ads.',
	},
	{
		id: 4,
		image: twitter,
		name: 'Twitter Pixel',
		description:
			'Measure your Snapchat ads impact on the sales. Add a Snap Pixel to see how many snapchatters interact with your store after viewing your ads.',
		isOpen: true,
	},
];

const Integrations = () => {
	const [showPopup, setShowPopup] = useState(false);
	// const [name, setName] = useState([data.map{e => {
	// 	return e.name;
	// }}]);
	return (
		<section className='grid grid-cols-3 gap-5 p-5'>
			{data.map((item) => {
				return <ControlCard key={item.id} {...item} clickBtn={() => setShowPopup(!showPopup)} />;
			})}
			{showPopup && <PopupActivate name='facebook' onClose={() => setShowPopup(false)} />}
		</section>
	);
};

export default Integrations;
