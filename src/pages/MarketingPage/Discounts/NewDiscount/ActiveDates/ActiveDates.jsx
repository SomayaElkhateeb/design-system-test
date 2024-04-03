import { Button, DatePicker, TimePicker } from 'src/app/components/optimized';
import { IoIosAddCircle } from 'react-icons/io';
import { IoIosClose } from 'react-icons/io';
import useDiscountForm from '../comp/useDiscountForm';

const ActiveDates = () => {
	const { endDatePicker, setEndDatePicker, endDate, setEndDate } = useDiscountForm();
	console.log('endDate', endDate);
	return (
		<div className='bg-white w-full border  border-constrained rounded-md p-[18px]'>
			<h3 className='mb-2 font-semibold text-title'>Active dates</h3>
			<div className='flex gap-4 my-[18px]'>
				<DatePicker label='start date' />
				<TimePicker label='start time' />
			</div>

			{endDatePicker && (
				<div className='flex gap-4 my-[18px]'>
					<DatePicker label='end date' value={endDate} onChange={setEndDate} />
					<TimePicker label='end time' />
				</div>
			)}

			<div className='w-fit' onClick={() => setEndDatePicker(!endDatePicker)}>
				<Button variant='ter' LeftIcon={endDate ? IoIosClose : IoIosAddCircle}>{`${
					endDate ? 'remove end date' : 'add end date'
				}`}</Button>
			</div>
		</div>
	);
};

export default ActiveDates;

//https://mui.com/x/react-date-pickers/date-picker/#system-ResponsiveDatePickers.tsx
