import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TabX } from 'src/app/components/optimized';
import { getImageUrl } from 'src/app/utils';
import StepOneRegister from './StepOneRegister';
import StepTwoRegister from './StepTwoRegister';

const Register = () => {
	const { t } = useTranslation();
	const [currentTab, setCurrentTab] = useState(0);
	const [_, setFinish] = useState(false);

	const handleTabClick = (index: number) => {
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

	const handleFinish = (value: boolean) => {
		setFinish(value);
	};
	const tabs = [
		{
			title: t('Tell us about yourself'),
			content: <StepOneRegister />,
		},
		{
			title: t('Tell us about your business'),
			content: <StepTwoRegister />,
		},
	];
	return (
		<div className='grid lg:grid-cols-2 md:grid-cols-1 px-15 gap-40'>
			<div className='bg-sky-200'>
				<h2>{t('Create your online store in two steps')}</h2>
				<TabX
					tabs={tabs}
					currentTab={currentTab}
					handleNext={handleNext}
					handlePrev={handlePrev}
					handleFinish={handleFinish}
					handleTabClick={handleTabClick}
				/>
			</div>
			<div className='flex justify-end'>
				<img src={getImageUrl('images/Frame.png')} alt='image' />
			</div>
		</div>
	);
};

export default Register;
