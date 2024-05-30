import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import VerticalTabs from './VerticalTabs';
import { StoreLaunchStep, storeLaunchSteps } from './HomeConstants';
import { Button, LineChart, SetupCard } from 'src/app/components/optimized';

export default function Setups({ startTour }) {
	const { t } = useTranslation();
	const [isFinished, setIsFinished] = useState(false);

	const handleFinish = () => {
		setIsFinished(true);
	};

	const tabs = [
		{
			title: t('Basic setup'),
			content: <SetupCardsWrapper items={storeLaunchSteps.basicSetup} />,
		},
		{
			title: t('Services setup'),
			content: <SetupCardsWrapper items={storeLaunchSteps.servicesSetup} />,
		},
	];

	return (
		<div>
			{isFinished ? (
				<div className='bg-red h-96'>
					<LineChart percentage='50' />
				</div>
			) : (
				<>
					<h2 className='title'>{t('Get ready for your first sale')}</h2>
					<p className='text-subtitle text-sm mb-4'>
						{t('There are only 2 main steps to launch your store')},
						<Button onClick={startTour} variant='link' text={t('Follow our tips')} />
						{t('to get started')}
					</p>
					<VerticalTabs tabs={tabs} handleFinish={handleFinish} />
				</>
			)}
		</div>
	);
}
interface SetupCardsWrapperProps {
	items: StoreLaunchStep[];
}
function SetupCardsWrapper({ items }: SetupCardsWrapperProps) {
	return (
		<div className='flex gap-4'>
			{items.map((item, index) => (
				<SetupCard key={index} Icon={item.icon} {...item} />
			))}
		</div>
	);
}
