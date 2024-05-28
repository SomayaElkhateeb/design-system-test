import AboutYourBusiness from './_comp/tabs/AboutYourBusiness';
import AboutYourself from './_comp/tabs/AboutYourself';
import { useState } from 'react';
import TabX from 'src/app/components/optimized/Tabs/NewTab/TabX';
import AuthHeader from '../_comp/AuthHeader';

const RegistrationPage = () => {
	const [currentTab, setCurrentTab] = useState(0);
	const [reviewStatus, setReviewStatus] = useState(false);

	const handleTabClick = (index) => {
		setCurrentTab(index);
	};

	const handleNext = () => {
		if (currentTab < tabs.length - 1) {
			setCurrentTab(currentTab + 1);
		}
	};

	const handlePrev = () => {
		if (currentTab > 0) {
			setCurrentTab(currentTab - 1);
		}
	};
	const handleFinish = (status) => {
		setReviewStatus(status);
		alert(status);
	};

	const tabs = [
		{ title: 'Tell us about yourself', content: <AboutYourself /> },
		{ title: 'Tell us about your business', content: <AboutYourBusiness /> },
	];

	return (
		<section className='flex flex-col space-x-4 w-full py-12 space-y-16 bg-white m-auto items-center'>
			<AuthHeader />
			<div className='w-full md:w-4/5 p-3'>
				<TabX
					tabs={tabs}
					currentTab={currentTab}
					handleNext={handleNext}
					handlePrev={handlePrev}
					handleFinish={handleFinish}
					handleTabClick={handleTabClick}
				/>
			</div>
		</section>
	);
};

export default RegistrationPage;
