// import { useState } from 'react';
// import { Button, DatePicker, TimePicker } from 'src/app/components/optimized';
// import { IoIosAddCircle, IoIosClose } from 'react-icons/io';
// import { useTranslation } from 'react-i18next';

// // const ActiveDates = ({ formStore }: { formStore: UseFormReturn<newDiscountInterface> }) => {
// const ActiveDates = ({ setState }) => {
// 	const { t } = useTranslation();
// 	const [endDate, setEndDate] = useState(false);
// 	const [valueDate, setValueDate] = useState(/** @type {(import("dayjs").Dayjs | null)} */ null);
// 	console.log('valueDate', valueDate);
// 	const handleShowDate = () => {
// 		setEndDate(!endDate);
// 	};
// 	{
// 	}
// 	const handleEndDateChange = (newValue) => {
// 		setValueDate(newValue);
// 		setState((prevState) => ({
// 			...prevState,
// 			endDate: newValue,
// 		}));
// 	};
// 	return (
// 		<div className='bg-white w-full border border-constrained rounded-md p-[18px]'>
// 			<h3 className='mb-2 font-semibold text-title'>{t('Active dates')}</h3>
// 			<div className='flex gap-4 my-[18px]'>
// 				<DatePicker label={t('start date')} />
// 				<TimePicker label={t('start time')} />
// 			</div>

// 			{endDate && (
// 				<div className='flex gap-4 my-[18px]'>
// 					<DatePicker
// 						label={t('end date')}
// 						value={valueDate}
// 						handleOnChange={handleEndDateChange}
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
// 	const [endDate, setEndDate] = useState(false);

// 	const handleShowDate = () => {
// 		setEndDate(!endDate);
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
// 								value={field.value as Dayjs} // Ensure value is of type Dayjs
// 								handleOnChange={(date) => field.onChange(date)}
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
import { IoIosAddCircle, IoIosClose } from 'react-icons/io';
import FormField from 'src/app/components/ui/form/field';
import dayjs, { Dayjs } from 'dayjs';
import { addCouponInterface } from 'src/pages/MarketingPage/Coupons/AddCoupon/HookForAddCoupon';

const ActiveDatesCo = ({ formStore }: { formStore: UseFormReturn<addCouponInterface> }) => {
	const { t } = useTranslation();
	const [endDate, setEndDate] = useState<Dayjs | null>(null);

	const handleShowDate = () => {
		setEndDate(endDate ? null : dayjs());
	};

	return (
		<div className='bg-white w-full border border-constrained rounded-md p-[18px]'>
			<h3 className='mb-2 font-semibold text-title'>{t('Active dates')}</h3>
			<div className='flex gap-4 my-[18px]'>
				<DatePicker label={t('start date')} value={dayjs()} handleOnChange={() => {}} />
				<TimePicker label={t('start time')} />
			</div>

			{endDate && (
				<div className='flex gap-4 my-[18px]'>
					<FormField
						formStore={formStore}
						name='date'
						render={(field) => (
							<DatePicker
								label={t('end date')}
								value={field.value as Dayjs | null}
								handleOnChange={(date: Dayjs | null) => {
									if (date) {
										field.onChange({
											year: date.year(),
											month: date.month(),
											day: date.date(),
										});
									} else {
										field.onChange(null);
									}
								}}
							/>
						)}
					/>

					<TimePicker label={t('end time')} />
				</div>
			)}

			<Button
				variant='tertiary'
				LeftIcon={endDate ? IoIosClose : IoIosAddCircle}
				onClick={handleShowDate}
			>
				{endDate ? t('remove end date') : t('add end date')}
			</Button>
		</div>
	);
};

export default ActiveDatesCo;

// const handleEndDateChange = (newValue) => {
// 	setValueDate(newValue);
// 	setState((prevState) => ({
// 		...prevState,
// 		endDate: newValue,
// 	}));
// };

// const [valueDate, setValueDate] = useState(/** @type {(import("dayjs").Dayjs | null)} */ null);
