// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { UseFormReturn } from 'react-hook-form';
// import { Button, DatePicker, TimePicker } from 'src/app/components/optimized';
// import { IoIosAddCircle, IoIosClose } from 'react-icons/io';
// import { newDiscountInterface } from 'src/pages/MarketingPage/Discounts/NewDiscount/HookForNewDiscount';
// import FormField from 'src/app/components/ui/form/field';
// import dayjs, { Dayjs } from 'dayjs';

// const ActiveDates = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
// 	const { t } = useTranslation();
// 	const [endDate, setEndDate] = useState<Dayjs | null>(null);

// 	const handleShowDate = () => {
// 		setEndDate(endDate ? null : dayjs());
// 	};

// 	return (
// 		<div className='bg-white w-full border border-constrained rounded-md p-[18px]'>
// 			<h3 className='mb-2 font-semibold text-title'>{t('Active dates')}</h3>
// 			<div className='flex gap-4 my-[18px]'>
// 				<DatePicker label={t('start date')} value={dayjs()} handleOnChange={() => {}} />
// 				<TimePicker label={t('start time')} />
// 			</div>

// 			{endDate && (
// 				<div className='flex gap-4 my-[18px]'>
// 					<FormField
// 						formStore={formStore}
// 						name='date'
// 						render={(field) => (
// 							<DatePicker
// 								label={t('end date')}
// 								value={field.value as Dayjs | null}
// 								handleOnChange={(date: Dayjs | null) => {
// 									if (date) {
// 										field.onChange({
// 											year: date.year(),
// 											month: date.month(),
// 											day: date.date(),
// 										});
// 									} else {
// 										field.onChange(null);
// 									}
// 								}}
// 							/>
// 						)}
// 					/>

// 					<TimePicker label={t('end time')} />
// 				</div>
// 			)}

// 			<Button
// 				variant='tertiary'
// 				LeftIcon={endDate ? IoIosClose : IoIosAddCircle}
// 				onClick={handleShowDate}
// 			>
// 				{endDate ? t('remove end date') : t('add end date')}
// 			</Button>
// 		</div>
// 	);
// };

// export default ActiveDates;

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UseFormReturn } from 'react-hook-form';
import { Button, DatePicker, TimePicker } from 'src/app/components/optimized';
import { newDiscountInterface } from 'src/pages/MarketingPage/Discounts/NewDiscount/HookForNewDiscount';
import dayjs, { Dayjs } from 'dayjs';
import { AddBgIcon, DeleteExitIcon } from 'src/app/utils/icons';

type DateTimeType = 'startDate' | 'startTime' | 'endDate' | 'endTime';

const ActiveDates = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
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

export default ActiveDates;
