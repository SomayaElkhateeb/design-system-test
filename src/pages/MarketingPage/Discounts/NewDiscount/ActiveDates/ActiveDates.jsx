import { useState } from 'react';
import { Button, DatePicker, TimePicker } from 'src/app/components/optimized';
import { IoIosAddCircle, IoIosClose } from 'react-icons/io';

const ActiveDates = () => {
	const [endDate, setEndDate] = useState(false);
	const [valueDate, setValueDate] = useState(/** @type {(import("dayjs").Dayjs | null)} */ (null));

	console.log('valueDate', valueDate);
	const handleShowDate = () => {
		setEndDate(!endDate);
	};

	return (
		<div className='bg-white w-full border border-constrained rounded-md p-[18px]'>
			<h3 className='mb-2 font-semibold text-title'>Active dates</h3>
			<div className='flex gap-4 my-[18px]'>
				<DatePicker label='start date' />
				<TimePicker label='start time' />
			</div>

			{endDate && (
				<div className='flex gap-4 my-[18px]'>
					<DatePicker label='end date' value={valueDate} handleOnChange={setValueDate} />
					<TimePicker label='end time' />
				</div>
			)}

			<Button variant='tertiary' LeftIcon={endDate ? IoIosClose : IoIosAddCircle} onClick={handleShowDate}>
				{endDate ? 'remove end date' : 'add end date'}
			</Button>
		</div>
	);
};

export default ActiveDates;
