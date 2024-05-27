import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import { Button, DatePicker, TimePicker } from 'src/app/components/optimized';

import dayjs, { Dayjs } from 'dayjs';
import { AddBgIcon, DeleteExitIcon } from 'src/app/utils/icons';
import { addCouponInterface } from 'src/pages/MarketingPage/Coupons/AddCoupon/HookForAddCoupon';

type DateTimeType = 'startDate' | 'startTime' | 'endDate' | 'endTime';

const ActiveDatesCo = ({ formStore }: { formStore: UseFormReturn<addCouponInterface> }) => {
	const { t } = useTranslation();
	const [endDateEnabled, setEndDateEnabled] = useState(false);
	const [activeDates, setActiveDates] = useState({
		startActivation: { startDate: new Date(), startTime: '00:00' },
		endActivation: { endDate: new Date(), endTime: '00:00' },
	});

	const handleDateTimeChange = (type: DateTimeType, value: Dayjs | null) => {
		if (value) {
			const updatedDates = { ...activeDates };
			if (type === 'startDate') {
				updatedDates.startActivation.startDate = value.toDate();
			} else if (type === 'startTime') {
				updatedDates.startActivation.startTime = value.format('HH:mm');
			} else if (type === 'endDate') {
				updatedDates.endActivation.endDate = value.toDate();
			} else if (type === 'endTime') {
				updatedDates.endActivation.endTime = value.format('HH:mm');
			}
			setActiveDates(updatedDates);
			formStore.setValue('activeDates', updatedDates);
		}
	};

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

export default ActiveDatesCo;
