import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { LoginOptions } from './comp/LoginOptions';
import AboutYourself from './comp/tabs/AboutYourself/AboutYourself';
import RegisterLayout from '../RegisterLayout/RegisterLayout';
import AboutYourBusiness from './comp/tabs/AboutYourBusiness/AboutYourBusiness';
import StepNavigator from 'src/app/components/StepNavigator/StepNavigator';

export default function RegistrationPage() {
	const { t } = useTranslation();
	const [isLogin, setIsLogin] = useState<boolean>(false);

	const firstTab = isLogin ? <AboutYourself /> : <LoginOptions setLogin={setIsLogin} />;

	const tabs = [
		{ title: t('Tell us about yourself'), content: firstTab },
		{ title: t('Tell us about your business'), content: <AboutYourBusiness /> },
	];

	return (
		<RegisterLayout>
			<div className='flex flex-col gap-7 h-full w-full'>
				<h2 className='title text-[1.375rem]'>{t('Create your online store in two steps')}</h2>
				<StepNavigator steps={tabs} />
			</div>
		</RegisterLayout>
	);
}
