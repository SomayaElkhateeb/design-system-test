import { useTranslation } from 'react-i18next';
import Frame from 'src/app/assets/images/Frame.png';
import VerticalTabs from './VerticalTabs';
import StepOneRegister from './StepOneRegister';
import StepTwoRegister from './StepTwoRegister';

const Register = () => {
	const { t } = useTranslation();

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
				<VerticalTabs tabs={tabs} />
			</div>
			<div className='flex justify-end'>
				<img src={Frame} alt='image' />
			</div>
		</div>
	);
};

export default Register;
