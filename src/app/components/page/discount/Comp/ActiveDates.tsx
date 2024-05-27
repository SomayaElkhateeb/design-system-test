import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import { Button, DatePicker, TimePicker } from 'src/app/components/optimized';
import useCustomHookNewDiscount, {
	newDiscountInterface,
} from 'src/pages/MarketingPage/Discounts/NewDiscount/HookForNewDiscount';
import dayjs from 'dayjs';
import { AddBgIcon, DeleteExitIcon } from 'src/app/utils/icons';
import { useEffect } from 'react';

const ActiveDates = () => {
	const { t } = useTranslation();
	const { activeDates, endDateEnabled, setEndDateEnabled, handleDateTimeChange } =
		useCustomHookNewDiscount();

	
	return (
		<div className='global-cards grid grid-cols-2'>
			<h2 className='title text-lg col-span-2'>{t('Budget & Active dates')}</h2>

			<div className='flex col-span-2 gap-4'>
				<DatePicker
					value={dayjs(activeDates.startActivation.startDate)}
					label={t('Start Date')}
					handleOnChange={(date) => handleDateTimeChange('startDate', date)}
				/>
				<TimePicker
					value={dayjs(activeDates.startActivation.startTime, 'HH:mm')}
					label={t('Start Time')}
					handleOnChange={(time) => handleDateTimeChange('startTime', time)}
				/>
			</div>
			{endDateEnabled && (
				<div className='flex col-span-2 gap-4'>
					<DatePicker
						value={dayjs(activeDates.endActivation.endDate)}
						label={t('End Date')}
						handleOnChange={(date) => handleDateTimeChange('endDate', date)}
					/>
					<TimePicker
						value={dayjs(activeDates.endActivation.endTime, 'HH:mm')}
						label={t('End Time')}
						handleOnChange={(time) => handleDateTimeChange('endTime', time)}
					/>
				</div>
			)}
			<Button
				variant='tertiary'
				LeftIcon={endDateEnabled ? DeleteExitIcon : AddBgIcon}
				onClick={() => setEndDateEnabled(!endDateEnabled)}
				className='col-span-2'
			>
				{endDateEnabled ? t('Remove End Date') : t('Add End Date')}
			</Button>
		</div>
	);
};

export default ActiveDates;
