import { VerticalTabs } from 'src/app/components/optimized';
import AboutYourBusiness from './tabs/AboutYourBusiness';
import AboutYourself from './tabs/AboutYourself';
import { getImageUrl } from 'src/app/utils';
import { useContext, useState } from 'react';
import TabX from 'src/app/components/optimized/Tabs/NewTab/TabX';

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
	};

	const tabs = [
		{ title: 'Tell us about yourself', content: <AboutYourself /> },
		{ title: 'Tell us about your business', content: <AboutYourBusiness /> },
	];

	return (
		<section className='flex space-x-4 w-full py-12 space-y-12 bg-white m-auto justify-center mt-12'>
			<div className='w-3/4 '>
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
