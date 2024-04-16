import { useState } from 'react';
import { Button, DatePicker, TimePicker } from 'src/app/components/optimized';
import { IoIosAddCircle, IoIosClose } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

const ActiveDates = ({ setState }) => {
	const { t } = useTranslation();
	const [endDate, setEndDate] = useState(false);
	const [valueDate, setValueDate] = useState(/** @type {(import("dayjs").Dayjs | null)} */ (null));

	console.log('valueDate', valueDate);

	const handleShowDate = () => {
		setEndDate(!endDate);
	};

	const handleEndDateChange = (newValue) => {
		setValueDate(newValue);
		setState((prevState) => ({
			...prevState,
			endDate: newValue,
		}));
	};

	return (
		<div className='bg-white w-full border border-constrained rounded-md p-[18px]'>
			<h3 className='mb-2 font-semibold text-title'>{t('Active dates')}</h3>
			<div className='flex gap-4 my-[18px]'>
				<DatePicker label={t('start date')} />
				<TimePicker label={t('start time')} />
			</div>

			{endDate && (
				<div className='flex gap-4 my-[18px]'>
					<DatePicker label={t('end date')} value={valueDate} handleOnChange={handleEndDateChange} />
					<TimePicker label={t('end time')} />
				</div>
			)}

			<Button variant='tertiary' LeftIcon={endDate ? IoIosClose : IoIosAddCircle} onClick={handleShowDate}>
				{endDate ? t('remove end date') : t('add end date')}
			</Button>
		</div>
	);
};

export default ActiveDates;
