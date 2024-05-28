import { getImageUrl } from 'src/app/utils';
import AboutYourBusiness from './tabs/AboutYourBusiness';
import AboutYourself from './tabs/AboutYourself';
import { useState } from 'react';
import TabX from 'src/app/components/optimized/Tabs/NewTab/TabX';
import { useTranslation } from 'react-i18next';

const RegistrationPage = () => {
	const [currentTab, setCurrentTab] = useState(0);
	const [reviewStatus, setReviewStatus] = useState(false);
	const { t } = useTranslation();

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
			<div className='flex justify-between items-center w-4/5'>
				<img src={getImageUrl('brand/en-light.svg')} alt='' />
				<button className='text-xl font-semibold'>{t('العربية')}</button>
			</div>
			<div className='w-4/5'>
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
