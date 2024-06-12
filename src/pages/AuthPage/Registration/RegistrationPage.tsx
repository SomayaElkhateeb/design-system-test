import AboutYourBusiness from './_comp/tabs/AboutYourBusiness';
import AboutYourself from './_comp/tabs/AboutYourself';
import AuthHeader from '../_comp/AuthHeader';
import StepNavigator from 'src/app/components/StepNavigator/StepNavigator';
import { useTranslation } from 'react-i18next';
import AuthImage from '../_comp/AuthImage';

export default function RegistrationPage() {
	const { t } = useTranslation();

	const tabs = [
		{ title: 'Tell us about yourself', content: <AboutYourself /> },
		{ title: 'Tell us about your business', content: <AboutYourBusiness /> },
	];

	return (
		<section className='flex flex-col container h-screen bg-white'>
			<AuthHeader />
			<section className='flex items-center justify-between flex-1'>
				<div className='grid gap-7'>
					<h2 className='title text-[1.375rem]'>{t('Create your online store in two steps')}</h2>
					<StepNavigator steps={tabs} />
				</div>
				<div className=''>
					<AuthImage path='images/register_1.svg' />
				</div>
			</section>
		</section>
	);
}

// const [reviewStatus, setReviewStatus] = useState(false);
// };
// const handleFinish = (status) => {
// 	setReviewStatus(status);
// 	alert(status);
// };
