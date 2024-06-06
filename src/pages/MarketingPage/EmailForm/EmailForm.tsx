import { useState } from 'react';
import SubscriptionOptions from './_comp/SubscriptionOptions';

import { useTranslation } from 'react-i18next';
import EmailOne from './EmailOne/EmailOne';
import PackageSubscribe from './EmailOne/_comp/PackageSubscribe';
import { getImageUrl } from 'src/app/utils';
import { useSearchParams } from 'react-router-dom';

const EmailForm = () => {
	const [selectedOption, setSelectedOption] = useState<string>('50000');
	const [istemplate, setIsTemplate] = useState<boolean>(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const mailOne = searchParams.get('template') === 'mailOne';
	const mailTwo = searchParams.get('template') === 'mailTwo';

	const isSubscribe = searchParams.get('subscribe') === 'active';

	const subscriptionOptions = [
		{ value: '20000', label: '20,000 emails/month', price: 'SAR 50' },
		{ value: '50000', label: '50,000 emails/month', price: 'SAR 50' },
	];

	const handleOptionChange = (value: string) => {
		setSelectedOption(value);
	};

	const { t } = useTranslation();

	return (
		<section>
			{!istemplate && !mailOne && !mailTwo && !isSubscribe && (
				<div>
					{/* <SubHeader title={t('Choose email template')} /> */}
					<SubscriptionOptions
						currentEmails={1000}
						options={subscriptionOptions}
						selectedOption={selectedOption}
						onOptionChange={handleOptionChange}
						buttonText='Subscribe To Package'
					/>
				</div>
			)}

			{!istemplate && !mailOne && !mailTwo && !isSubscribe && (
				<div className='flex space-x-4 p-5'>
					<div
						className='w-1/6 shadow-md  bg-white rounded-md p-5 cursor-pointer'
						onClick={() => {
							setSearchParams({ template: 'mailOne' });
							setIsTemplate(true);
						}}
					>
						<img src={getImageUrl('images/mailOne.png')} alt='' />
						Template 1
					</div>
					<div
						className='w-1/6 shadow-md bg-white rounded-md p-5 cursor-pointer'
						onClick={() => {
							setSearchParams({ template: 'mailTwo' });

							setIsTemplate(true);
						}}
					>
						<img src={getImageUrl('images/mailTwo.png')} alt='' />
						Template 2
					</div>
				</div>
			)}

			{mailOne && !isSubscribe && <EmailOne />}

			{isSubscribe && <PackageSubscribe />}
		</section>
	);
};

export default EmailForm;
