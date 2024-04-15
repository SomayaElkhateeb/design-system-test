import { useState } from 'react';
import { Button, DatePicker, InputRow, TimePicker } from 'src/app/components/optimized';
import { AddBgIcon, DeleteExitIcon } from 'src/app/utils/icons';

const BudgetDetails = () => {
	const [endDate, setEndDate] = useState(false);
	const [valueDate, setValueDate] = useState(/** @type {(import("dayjs").Dayjs | null)} */ (null));
	const [budget, setBudget] = useState('');

	const handleBudget = (e) => {
		setBudget(e.target.value);
		console.log(budget);
	};

	const handleShowDate = () => {
		setEndDate(!endDate);
	};

	const handleEndDateChange = (newValue) => {
		setValueDate(newValue);
		// setState((prevState) => ({
		// 	...prevState,
		// 	endDate: newValue,
		// }));
	};

	return (
		<div className='w-[736px] p-5 bg-white rounded-xl border border-borders-lines'>
			<h2 className='title text-lg mb-6'>Budget & Active dates</h2>
			<div className='grid grid-cols-1 gap-4'>
				<div className='w-96'>
					<InputRow label='Budget' value={budget} onChange={handleBudget} name='budget' />
				</div>
				<div className='flex gap-4'>
					<DatePicker label='start date' />
					<TimePicker label='start time' />
				</div>
				{endDate && (
					<div className='flex gap-4'>
						<DatePicker label='end date' value={valueDate} handleOnChange={handleEndDateChange} />
						<TimePicker label='end time' />
					</div>
				)}
				<Button variant='tertiary' LeftIcon={endDate ? DeleteExitIcon : AddBgIcon} onClick={handleShowDate}>
					{endDate ? 'remove end date' : 'add end date'}
				</Button>
			</div>
		</div>
	);
};

export default BudgetDetails;
