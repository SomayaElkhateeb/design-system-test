import { useTranslation } from 'react-i18next';


import useCustomHookNewDiscount from 'src/pages/MarketingPage/Discounts/NewDiscount/HookForNewDiscount';


import SharedActiveDate from '../SharedActiveDate';

const ActiveDates = () => {
	const { t } = useTranslation();
	const { activeDates, endDateEnabled, setEndDateEnabled, handleDateTimeChange } =
		useCustomHookNewDiscount();

	return (
		<div className='global-cards grid grid-cols-2'>
			<h2 className='title text-lg col-span-2'>{t('Budget & Active dates')}</h2>

			<SharedActiveDate
				endDateEnabled={endDateEnabled}
				setEndDateEnabled={setEndDateEnabled}
				handleDateTimeChange={handleDateTimeChange}
				activeDates={activeDates}
			/>
		</div>
	);
};

export default ActiveDates;
