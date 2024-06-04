import { useTranslation } from 'react-i18next';

import VerticalTabs from './VerticalTabs';
import { StoreLaunchStep, storeLaunchSteps } from './HomeConstants';
import { Button, SetupCard } from 'src/app/components/optimized';
interface SetupsProps {
	startTour: () => void;
	handleSetup: () => void;
}
// Setups Parent Component
export default function Setups({ startTour, handleSetup }: SetupsProps) {
	const { t } = useTranslation();
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
		<section className='grid gap-3'>
			<SetupsHeader startTour={startTour} />
			<VerticalTabs tabs={tabs} setIsSetup={handleSetup} />
		</section>
	);
}

// Header Component
interface SetupsHeaderProps {
	startTour: () => void;
}
function SetupsHeader({ startTour }: SetupsHeaderProps) {
	const { t } = useTranslation();
	return (
		<h2 className='title mb-1'>
			{t('Get ready for your first sale')}
			<p className='text-subtitle paragraph sm:flex sm:flex-row flex-col'>
				{t('There are only 2 main steps to launch your store')},&nbsp;
				<Button onClick={startTour} variant='link' text={t('Follow our tips')} />
				&nbsp;
				{t('to get started')}
			</p>
		</h2>
	);
}

// Wrapper Component
interface SetupCardsWrapperProps {
	items: StoreLaunchStep[];
}
function SetupCardsWrapper({ items }: SetupCardsWrapperProps) {
	return (
		<div className='flex flex-col gap-4 lg:flex-row'>
			{items.map((item, index) => (
				<SetupCard key={index} Icon={item.icon} {...item} />
			))}
		</div>
	);
}
